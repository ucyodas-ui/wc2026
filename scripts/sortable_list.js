class SortableList {

  constructor(items, title, onChange, parentId, options = {})
  {
    // items: array of objects with { id, flag, name, abr }
    //        flag should be a dataURL string (e.g. "data:image/png;base64,...")
    //        OR object where keys are IDs and values are display names (legacy)
    // title: string for the list title
    // onChange: callback(title, orderedIds) called when list order changes
    // parentId: the element ID to render the list into
    // options.zoneCount: number of drop zones (defaults to items.length)

    // Normalise legacy { id: value } map into the richer array format.
    // The value may be a plain string (old usage) or a full country object (new usage).
    if (!Array.isArray(items)) {
      items = Object.entries(items).map(([id, value]) => {
        if (value && typeof value === 'object') {
          return Object.assign({ id }, value);
        }
        return { id, name: value, flag: '', abr: '' };
      });
    }

    const zoneCount = (options.zoneCount && options.zoneCount > 0)
      ? Math.min(options.zoneCount, items.length)
      : items.length;

    this.allItems  = items;                        // full country objects, never mutated
    this.bankItems = [...items];                   // items sitting in the flag bank
    this.zones     = new Array(zoneCount).fill(null); // placed items, index = rank

    this.title    = title;
    this.onChange = onChange || (() => {});

    this.dragSource          = null;
    this.dragSourceType      = null;  // 'bank' | 'zone'
    this.dragSourceBankIndex = null;
    this.dragSourceZoneIndex = null;

    this.container     = null; // outer .list-container div
    this.bankEl        = null;
    this.zonesEl       = null;

    if (parentId) this.render(parentId);
  }

  // Render into a parent element
  render(parentId)
  {
    const parent = document.getElementById(parentId);
    if (!parent) {
      console.error(`SortableList: element #${parentId} not found`);
      return;
    }
    this.parentEl = parent;
    this._build();
  }

  getAll()
  {
    return this.allItems
  }

  // Return ordered array of IDs for placed items (nulls where empty)
  getOrder()
  {
    return this.zones.map(c => c ? c.id : null);
  }
  getPlacedAbr()
  {
    return this.zones.map(c => c ? c.abr : null);
  }

  // Return ordered array of placed country objects, with null gaps for empty slots.
  // e.g. [{ id:'au', name:'Australia', ... }, null, { id:'jp', ... }, null]
  getPlaced()
  {
    return this.zones.map(c => c ? Object.assign({}, c) : null);
  }

  // Return true only when every zone is filled
  isComplete()
  {
    return this.zones.every(c => c !== null);
  }

  // Programmatically place a country into a zone by id and zone index (0-based).
  // If the country is already in another zone, it is moved.
  // If the target zone is already occupied, the displaced country returns to the bank.
  // If the country is not found, logs an error and returns false.
  // e.g. list.setZone(0, 'au')  — place Australia in position 1
  setZone(zoneIndex, id)
  {
    if (zoneIndex < 0 || zoneIndex >= this.zones.length) {
      console.error(`SortableList.setZone: zoneIndex ${zoneIndex} out of range`);
      return false;
    }

    // Find the country in the bank or in another zone
    const bankIdx  = this.bankItems.findIndex(c => c.id === id);
    const fromZone = this.zones.findIndex(c => c && c.id === id);

    if (bankIdx === -1 && fromZone === -1) {
      console.error(`SortableList.setZone: id "${id}" not found`);
      return false;
    }

    // Already exactly where it should be — nothing to do.
    // (Without this check, the displace-then-remove steps below would
    // push this same item into the bank before removing it from the
    // zone, silently duplicating it.)
    if (fromZone === zoneIndex) {
      return true;
    }

    const country = bankIdx !== -1 ? this.bankItems[bankIdx] : this.zones[fromZone];

    // Remove country from wherever it currently lives FIRST, before any
    // displacement, so we never risk pushing the same object we're
    // about to place.
    if (bankIdx !== -1) {
      this.bankItems.splice(bankIdx, 1);
    } else {
      this.zones[fromZone] = null;
    }

    // Displace whatever is currently in the target zone back to the bank
    if (this.zones[zoneIndex] !== null) {
      this.bankItems.push(this.zones[zoneIndex]);
    }

    // Place it
    this.zones[zoneIndex] = country;

    this._refresh();
    return true;
  }

  // Clear a specific zone by index, returning its country to the bank.
  // e.g. list.clearZone(0)
  clearZone(zoneIndex)
  {
    if (zoneIndex < 0 || zoneIndex >= this.zones.length) {
      console.error(`SortableList.clearZone: zoneIndex ${zoneIndex} out of range`);
      return false;
    }
    if (this.zones[zoneIndex] === null) return true; // already empty
    this.bankItems.push(this.zones[zoneIndex]);
    this.zones[zoneIndex] = null;
    this._refresh();
    return true;
  }

  // Clear all zones, returning all countries to the bank.
  clearAllZones()
  {
    this.zones.forEach((c, i) => {
      if (c !== null) this.bankItems.push(c);
      this.zones[i] = null;
    });
    this._refresh();
    return this;
  }

  // Update the name and/or flag of an item by id, wherever it currently lives
  // (bank or a zone). Only the keys you pass in data are changed.
  // e.g. list.setItem('au', { name: 'Australia', flag: 'data:image/png;base64,...' })
  setItem(id, data)
  {
    const apply = obj => Object.assign(obj, {
      name: data.name !== undefined ? data.name : obj.name,
      flag: data.flag !== undefined ? data.flag : obj.flag,
      abr:  data.abr  !== undefined ? data.abr  : obj.abr,
    });

    const bankIdx   = this.bankItems.findIndex(c => c.id === id);
    const zoneIdx   = this.zones.findIndex(c => c && c.id === id);
    const masterIdx = this.allItems.findIndex(c => c.id === id);

    if (bankIdx   !== -1) apply(this.bankItems[bankIdx]);
    if (zoneIdx   !== -1) apply(this.zones[zoneIdx]);
    if (masterIdx !== -1) apply(this.allItems[masterIdx]);

    if (bankIdx !== -1 || zoneIdx !== -1) this._refresh();
    return this;
  }

  // Reset an item back to an unknown/blank state by id.
  // Clears name, flag, and abr; the chip in the bank will show just the id.
  // Optionally pass a placeholder object to partially override the blank state.
  clearItem(id, placeholder = {})
  {
    return this.setItem(id, Object.assign({ name: id, flag: '', abr: '' }, placeholder));
  }

  // --- Private: initial DOM build ---

  _build()
  {
    this.parentEl.innerHTML = '';

    this.container = document.createElement('div');
    this.container.className = 'list-container';

    const titleEl = document.createElement('div');
    titleEl.className = 'list-title';
    titleEl.textContent = this.title;
    this.container.appendChild(titleEl);

    this.bankEl = document.createElement('div');
    this.bankEl.className = 'flag-bank';
    this.container.appendChild(this.bankEl);

    this.zonesEl = document.createElement('div');
    this.zonesEl.className = 'drop-zones';
    this.container.appendChild(this.zonesEl);

    this.badgeEl = document.createElement('div');
    this.badgeEl.className = 'complete-badge';
    this.badgeEl.innerHTML = '<span style="font-size:16px">&#10003;</span> All countries placed!';
    this.container.appendChild(this.badgeEl);

    this.parentEl.appendChild(this.container);

    this._renderBank();
    this._attachBankDropListeners();
    this._renderZones();
    this._attachZoneDropListeners();
  }

  // --- Private: build a flag <img> element from a dataURL (or empty span fallback) ---

  _flagImg(src, className)
  {
    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.className = className || 'flag-img';
      img.draggable = false;
      return img;
    }
    const span = document.createElement('span');
    span.className = className || 'flag-img';
    return span;
  }

  // --- Private: render flag bank ---

  _renderBank()
  {
    this.bankEl.innerHTML = '';

    const label = document.createElement('div');
    label.className = 'flag-bank-label';
    label.textContent = 'Drag or click a flag to place it';
    this.bankEl.appendChild(label);

    this.bankItems.forEach((country) => {
      const chip = document.createElement('div');
      chip.className = 'flag-chip';
      chip.draggable = true;
      chip.appendChild(this._flagImg(country.flag, 'flag-img'));
      const abr = document.createElement('span');
      abr.className = 'abr';
      abr.textContent = country.abr || country.name;
      chip.appendChild(abr);

      chip.addEventListener('dragstart', e => {
        this.dragSource          = country;
        this.dragSourceType      = 'bank';
        this.dragSourceZoneIndex = null;
        setTimeout(() => chip.classList.add('dragging'), 0);
        e.dataTransfer.effectAllowed = 'move';
      });
      chip.addEventListener('dragend', () => chip.classList.remove('dragging'));

      // Click to place into the first available empty zone
      chip.addEventListener('click', () => {
        const firstEmpty = this.zones.findIndex(z => z === null);
        if (firstEmpty === -1) return; // all zones full
        this.setZone(firstEmpty, country.id);
      });

      this.bankEl.appendChild(chip);
    });
  }

  // Attach zone drop listeners once only via delegation on zonesEl (called from _build)
  _attachZoneDropListeners()
  {
    this.zonesEl.addEventListener('dragover', e => {
      e.preventDefault();
      const zone = e.target.closest('.drop-zone');
      if (zone) zone.classList.add('drag-over');
    });
    this.zonesEl.addEventListener('dragleave', e => {
      const zone = e.target.closest('.drop-zone');
      if (zone && !zone.contains(e.relatedTarget)) zone.classList.remove('drag-over');
    });
    this.zonesEl.addEventListener('drop', e => {
      e.preventDefault();
      const zone = e.target.closest('.drop-zone');
      if (!zone) return;
      zone.classList.remove('drag-over');
      const targetZi = parseInt(zone.dataset.zoneIndex);

      if (this.dragSourceType === 'bank') {
        const liveBankIndex = this.bankItems.findIndex(c => c.id === this.dragSource.id);
        if (liveBankIndex === -1) return;
        const displaced = this.zones[targetZi];
        this.zones[targetZi] = this.dragSource;
        this.bankItems.splice(liveBankIndex, 1);
        if (displaced) this.bankItems.push(displaced);
        this._refresh();

      } else if (this.dragSourceType === 'zone') {
        const fromZi = this.dragSourceZoneIndex;
        if (fromZi !== targetZi) {
          const temp = this.zones[targetZi];
          this.zones[targetZi] = this.zones[fromZi];
          this.zones[fromZi] = temp;
          this._refresh();
        }
      }
    });
  }

  // Attach bank drop listeners once only (called from _build)
  _attachBankDropListeners()
  {
    this.bankEl.addEventListener('dragover', e => {
      e.preventDefault();
      this.bankEl.classList.add('drag-over-bank');
    });
    this.bankEl.addEventListener('dragleave', () => {
      this.bankEl.classList.remove('drag-over-bank');
    });
    this.bankEl.addEventListener('drop', e => {
      e.preventDefault();
      this.bankEl.classList.remove('drag-over-bank');
      if (this.dragSourceType === 'zone' && this.dragSourceZoneIndex !== null) {
        this.bankItems.push(this.zones[this.dragSourceZoneIndex]);
        this.zones[this.dragSourceZoneIndex] = null;
        this._refresh();
      }
    });
  }

  // --- Private: render drop zones ---

  _renderZones()
  {
    this.zonesEl.innerHTML = '';

    this.zones.forEach((country, zi) => {
      const zone = document.createElement('div');
      zone.className = 'drop-zone' + (country ? ' filled' : '');
      zone.dataset.zoneIndex = zi;

      // Rank number bubble
      const num = document.createElement('div');
      num.className = 'zone-number';
      num.textContent = zi + 1;
      zone.appendChild(num);

      if (country) {
        // Filled zone — draggable item (no remove button inside)
        const item = document.createElement('div');
        item.className = 'zone-item';
        item.draggable = true;
        item.appendChild(this._flagImg(country.flag, 'zone-flag'));
        const nameEl = document.createElement('span');
        nameEl.className = 'zone-name';
        nameEl.textContent = country.name;
        item.appendChild(nameEl);
        const abrEl = document.createElement('span');
        abrEl.className = 'zone-abr';
        abrEl.textContent = country.abr || '';
        item.appendChild(abrEl);

        // Drag handle
        const handle = document.createElement('div');
        handle.className = 'zone-handle';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 20 20');
        svg.setAttribute('fill', 'none');
        [[7,5],[13,5],[7,10],[13,10],[7,15],[13,15]].forEach(([cx,cy]) => {
          const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          c.setAttribute('cx', cx); c.setAttribute('cy', cy); c.setAttribute('r', '1.5'); c.setAttribute('fill', 'currentColor');
          svg.appendChild(c);
        });
        handle.appendChild(svg);
        item.appendChild(handle);

        // Drag events for zone item (reordering)
        item.addEventListener('dragstart', e => {
          this.dragSource          = country;
          this.dragSourceType      = 'zone';
          this.dragSourceZoneIndex = zi;
          this.dragSourceBankIndex = null;
          setTimeout(() => zone.classList.add('dragging'), 0);
          e.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', () => zone.classList.remove('dragging'));

        zone.appendChild(item);

        // Remove button lives OUTSIDE the draggable item so it never appears in the drag ghost
        const rmBtn = document.createElement('button');
        rmBtn.className = 'remove-btn';
        rmBtn.textContent = '\u00D7';
        rmBtn.title = 'Return to bank';
        rmBtn.addEventListener('click', e => {
          e.stopPropagation();
          this.bankItems.push(this.zones[zi]);
          this.zones[zi] = null;
          this._refresh();
        });
        zone.appendChild(rmBtn);

      } else {
        // Empty zone — show placeholder
        const ph = document.createElement('span');
        ph.className = 'zone-placeholder';
        ph.textContent = 'Drop a flag here';
        zone.appendChild(ph);
      }

      this.zonesEl.appendChild(zone);
    });
  }

  // --- Private: re-render both sections and fire onChange ---

  _refresh()
  {
    this._renderBank();
    this._renderZones();
    this.container.classList.toggle('complete', this.isComplete());
    this.onChange(this.title, this.getOrder());
  }
}