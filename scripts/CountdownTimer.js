/**
 * CountdownTimer
 *
 * A self-contained flip-clock countdown widget.
 *
 * Constructor:
 *   new CountdownTimer(title, date, parentElement, options?)
 *
 *   title         – string, displayed as the heading
 *   date          – Date | string, the target date/time to count down to
 *   parentElement – HTMLElement to append the timer section into
 *   options       – optional object:
 *       color       {string}  accent colour (default '#667eea')
 *       showWork    {boolean} show the "Work Days" panel (default true)
 *       holidays    {Array}   array of { date: 'YYYY-MM-DD', name: string }
 *                             used for work-day exclusions (default [])
 */
class CountdownTimer {

    // ─────────────────────────────────────────────────────────────
    //  Static / shared NZ holiday list (can be overridden per instance)
    // ─────────────────────────────────────────────────────────────
    static DEFAULT_HOLIDAYS = [
        { date: '2026-01-01', name: "New Year's Day" },
        { date: '2026-01-02', name: "Day after New Year's" },
        { date: '2026-02-06', name: "Waitangi Day" },
        { date: '2026-04-03', name: "Good Friday" },
        { date: '2026-04-06', name: "Easter Monday" },
        { date: '2026-04-27', name: "ANZAC Day (observed)" },
        { date: '2026-06-01', name: "Queen's Birthday" },
        { date: '2026-10-26', name: "Labour Day" },
        { date: '2026-11-13', name: "Canterbury Anniversary" },
        { date: '2026-12-25', name: "Christmas Day" },
        { date: '2026-12-28', name: "Boxing Day (observed)" },
        { date: '2027-01-01', name: "New Year's Day" },
        { date: '2027-01-04', name: "Day after New Year's (observed)" },
    ];

    // ─────────────────────────────────────────────────────────────
    //  Constructor
    // ─────────────────────────────────────────────────────────────
    constructor(title, date, parentElement, options = {}) {
        // Ensure the date is treated as UTC if a plain string is passed
        if (typeof date === 'string' && !date.endsWith('Z') && !date.includes('+')) {
          date = date + 'Z';
        }
      
        this.title       = title;
        this.targetDate  = new Date(date);
        this.parent      = parentElement;
        this.color       = options.color    ?? '#667eea';
        this.showWork    = options.showWork ?? true;
        this.holidays    = options.holidays ?? CountdownTimer.DEFAULT_HOLIDAYS;

        this._groups = {};
        this._intervalId = null;

        this._injectStyles();
        this._build();
        this._tick();
        this._intervalId = setInterval(() => this._tick(), 1000);
    }

    // ─────────────────────────────────────────────────────────────
    //  Public API
    // ─────────────────────────────────────────────────────────────

    /** Stop the countdown and (optionally) remove the DOM element. */
    destroy(removeElement = true) {
        clearInterval(this._intervalId);
        if (removeElement && this._section) {
            this._section.remove();
        }
    }

    /** Change the target date without rebuilding the DOM. */
    setDate(date) {
        this.targetDate = new Date(date);
    }

    // ─────────────────────────────────────────────────────────────
    //  Work-day helpers
    // ─────────────────────────────────────────────────────────────

    _isWeekend(date) {
        const d = date.getDay();
        return d === 0 || d === 6;
    }

    _isHoliday(date) {
        const str = date.toISOString().split('T')[0];
        return this.holidays.some(h => h.date === str);
    }

    _isWorkDay(date) {
        return !this._isWeekend(date) && !this._isHoliday(date);
    }

    _countWorkDays(startDate, endDate) {
        let count = 0;
        const current = new Date(startDate);
        current.setHours(0, 0, 0, 0);
        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);
        while (current < end) {
            if (this._isWorkDay(current)) count++;
            current.setDate(current.getDate() + 1);
        }
        return count;
    }

    // ─────────────────────────────────────────────────────────────
    //  Core tick
    // ─────────────────────────────────────────────────────────────

    _tick() {
        const now  = new Date();
        const diff = this.targetDate - now;

        if (diff <= 0) {
            ['totalDays','totalHours','totalMinutes','totalSeconds',
             'workDays','workHours','workMinutes','workSeconds']
                .forEach(k => this._groups[k]?.swapDigits('0'));
            return;
        }

        // ── Total time ──
        const totalDays    = Math.floor(diff / (1000 * 60 * 60 * 24));
        const totalHours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const totalMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const totalSeconds = Math.floor((diff % (1000 * 60)) / 1000);

        this._groups.totalDays.swapDigits(totalDays.toString());
        this._groups.totalHours.swapDigits(totalHours.toString().padStart(2, '0'));
        this._groups.totalMinutes.swapDigits(totalMinutes.toString().padStart(2, '0'));
        this._groups.totalSeconds.swapDigits(totalSeconds.toString().padStart(2, '0'));

        if (!this.showWork) return;

        // ── Work time ──
        const workDaysRemaining = this._countWorkDays(now, this.targetDate);
        let partialWorkSeconds = 0;

        if (this._isWorkDay(now)) {
            const endOfWorkToday = new Date(now);
            endOfWorkToday.setHours(16, 30, 0, 0);
            if (now < endOfWorkToday) {
                partialWorkSeconds = (endOfWorkToday - now) / 1000;
            }
        }

        const workDaySeconds       = 8.5 * 60 * 60;
        const totalWorkTimeSeconds = (workDaysRemaining * workDaySeconds) + partialWorkSeconds;

        const workDays    = Math.floor(totalWorkTimeSeconds / workDaySeconds);
        const workHours   = Math.floor((totalWorkTimeSeconds % workDaySeconds) / (60 * 60));
        const workMinutes = Math.floor((totalWorkTimeSeconds % (60 * 60)) / 60);
        const workSeconds = Math.floor(totalWorkTimeSeconds % 60);

        this._groups.workDays.swapDigits(workDays.toString());
        this._groups.workHours.swapDigits(workHours.toString().padStart(2, '0'));
        this._groups.workMinutes.swapDigits(workMinutes.toString().padStart(2, '0'));
        this._groups.workSeconds.swapDigits(workSeconds.toString().padStart(2, '0'));
    }

    // ─────────────────────────────────────────────────────────────
    //  DOM construction
    // ─────────────────────────────────────────────────────────────

    _build() {
        const formattedDate = this.targetDate.toLocaleString('en-NZ', {
            weekday: 'long', year: 'numeric', month: 'long',
            day: 'numeric', hour: '2-digit', minute: '2-digit'
        });

        this._section = this._el('div', 'timer-section');
        this._section.innerHTML = `
            <h1>${this.title}</h1>
            <p class="target-date">${formattedDate}</p>
            <div class="countdown-container${this.showWork ? '' : ' single-panel'}">
              <div class="countdown-group">
                <h2 style="color:${this.color}">Total Time Remaining</h2>
                <div class="countdown" id="_ct-total-${this._uid}"></div>
              </div>
              ${this.showWork ? `
              <div class="countdown-group">
                <h2 style="color:${this.color}">Work Days Only (Excl. Weekends &amp; NZ Holidays)</h2>
                <div class="countdown" id="_ct-work-${this._uid}"></div>
              </div>` : ''}
            </div>`;

        this.parent.appendChild(this._section);

        const totalEl = document.getElementById(`_ct-total-${this._uid}`);
        const workEl  = this.showWork
            ? document.getElementById(`_ct-work-${this._uid}`)
            : null;

        const c = this.color;
        this._groups.totalDays    = new _SegmentGroup(totalEl, 'Days',    '000', c);
        new _SpaceSegment(totalEl);
        this._groups.totalHours   = new _SegmentGroup(totalEl, 'Hours',   '00',  c);
        new _ColonSegment(totalEl, c);
        this._groups.totalMinutes = new _SegmentGroup(totalEl, 'Minutes', '00',  c);
        new _ColonSegment(totalEl, c);
        this._groups.totalSeconds = new _SegmentGroup(totalEl, 'Seconds', '00',  c);

        if (workEl) {
            this._groups.workDays    = new _SegmentGroup(workEl, 'Days',    '000', c);
            new _SpaceSegment(workEl);
            this._groups.workHours   = new _SegmentGroup(workEl, 'Hours',   '00',  c);
            new _ColonSegment(workEl, c);
            this._groups.workMinutes = new _SegmentGroup(workEl, 'Minutes', '00',  c);
            new _ColonSegment(workEl, c);
            this._groups.workSeconds = new _SegmentGroup(workEl, 'Seconds', '00',  c);
        }
    }

    // ─────────────────────────────────────────────────────────────
    //  Helpers
    // ─────────────────────────────────────────────────────────────

    get _uid() {
        // stable per-instance ID generated on first access
        if (!this.__uid) this.__uid = Math.random().toString(36).slice(2, 9);
        return this.__uid;
    }

    _el(tag, className) {
        const el = document.createElement(tag);
        if (className) el.className = className;
        return el;
    }

    // Inject the required CSS once per page load
    _injectStyles() {
        if (document.getElementById('_ct-styles')) return;
        const style = document.createElement('style');
        style.id = '_ct-styles';
        style.textContent = `
            .timer-section{background:rgba(255,255,255,.95);border-radius:10px;padding:5px;margin-bottom:10px;box-shadow:0 20px 60px rgba(0,0,0,.3)}
            .timer-section h1{text-align:center;margin-bottom:1px;font-size:1.8em}
            .timer-section h2{text-align:center;margin-bottom:10px;font-size:1.1em;font-weight:500}
            .countdown{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:10px}
            .time-section{text-align:center}
            .time-group{display:flex;gap:5px;margin-bottom:5px}
            .time-title{font-size:.9em;text-transform:uppercase;font-weight:600}
            .time-segment{display:block;width:70px;height:90px}
            .colon-segment{display:flex;align-items:center;font-size:60px;font-weight:900;width:10px}
            .space-segment{width:10px}
            .segment-display{position:relative;height:100%}
            .segment-display__top,.segment-display__bottom{overflow:hidden;text-align:center;width:100%;height:50%;position:relative;font-size:60px;font-weight:900;line-height:85px}
            .segment-display__top{color:#fff;background:linear-gradient(180deg,#444 0%,#333 100%);border-radius:8px 8px 0 0}
            .segment-display__bottom{color:#fff;background:linear-gradient(180deg,#333 0%,#444 100%);border-radius:0 0 8px 8px;line-height:0}
            .segment-overlay{position:absolute;top:0;perspective:400px;height:100%;width:100%}
            .segment-overlay__top,.segment-overlay__bottom{position:absolute;overflow:hidden;text-align:center;width:100%;height:50%;font-size:60px;font-weight:900;line-height:85px}
            .segment-overlay__top{top:0;color:#fff;background:linear-gradient(180deg,#555 0%,#444 100%);border-radius:8px 8px 0 0;transform-origin:bottom}
            .segment-overlay__bottom{bottom:2px;color:#fff;background:linear-gradient(180deg,#444 0%,#555 100%);border-radius:0 0 8px 8px;border-top:2px solid rgba(0,0,0,.3);transform-origin:top;line-height:0}
            .segment-overlay.flip .segment-overlay__top{animation:_ct-flip-top .6s ease-in}
            .segment-overlay.flip .segment-overlay__bottom{animation:_ct-flip-bottom .6s ease-out}
            @keyframes _ct-flip-top{0%{transform:rotateX(0deg)}50%,100%{transform:rotateX(-90deg)}}
            @keyframes _ct-flip-bottom{0%,50%{transform:rotateX(90deg)}100%{transform:rotateX(0deg)}}
            .target-date{text-align:center;color:#666;margin-top:20px;font-style:italic}
            .countdown-container{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:5px}
            .countdown-container.single-panel{grid-template-columns:1fr}
            .countdown-group{margin-bottom:5px}
            @media(max-width:1500px){.countdown-container{grid-template-columns:1fr}}
        `;
        document.head.appendChild(style);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
//  Private helper classes  (module-scoped, not exported)
// ─────────────────────────────────────────────────────────────────────────────

function _createDiv(parent, className) {
    const d = document.createElement('div');
    d.className = className;
    if (parent) parent.appendChild(d);
    return d;
}

class _Segment {
    constructor(parentDiv, digit, color) {
        this.color = color || '#667eea';
        const ts  = _createDiv(parentDiv, 'time-segment');
        const sd  = _createDiv(ts,  'segment-display');
        this._top    = _createDiv(sd, 'segment-display__top');
        this._bottom = _createDiv(sd, 'segment-display__bottom');
        this._overlay   = _createDiv(sd, 'segment-overlay');
        this._ovTop     = _createDiv(this._overlay, 'segment-overlay__top');
        this._ovBottom  = _createDiv(this._overlay, 'segment-overlay__bottom');

        [this._top, this._bottom, this._ovTop, this._ovBottom]
            .forEach(el => el.style.color = this.color);

        this.currentDigit = digit;
        this._top.innerText    = digit;
        this._bottom.innerText = digit;
        this._ovTop.innerText  = digit;
        this._ovBottom.innerText = digit;
    }

    _finishAnimation = () => {
        this._overlay.classList.remove('flip');
        this._bottom.innerText = this.currentDigit;
        this._ovTop.innerText  = this.currentDigit;
        this._overlay.removeEventListener('animationend', this._finishAnimation);
    };

    swapDigit(digit) {
        if (this.currentDigit === digit) return;
        this.currentDigit = digit;
        this._overlay.classList.add('flip');
        this._top.textContent      = this.currentDigit;
        this._ovBottom.textContent = this.currentDigit;
        this._overlay.addEventListener('animationend', this._finishAnimation);
    }
}

class _SegmentGroup {
    constructor(parentDiv, name, digits, color) {
        digits = digits || '00';
        this._totalDigits = digits.length;
        this._segments = [];
        this.color = color || '#667eea';

        const section  = _createDiv(parentDiv, 'time-section');
        const group    = _createDiv(section, 'time-group');
        const title    = _createDiv(section, 'time-title');
        title.innerText    = name;
        title.style.color  = this.color;

        for (let i = 0; i < this._totalDigits; i++) {
            this._segments.push(new _Segment(group, digits[i], this.color));
        }
    }

    swapDigits(digits) {
        digits = (digits || '').padStart(this._totalDigits, '0').slice(-this._totalDigits);
        this._segments.forEach((seg, i) => seg.swapDigit(digits[i]));
    }
}

class _ColonSegment {
    constructor(parentDiv, color) {
        const section = _createDiv(parentDiv, 'time-section');
        const group   = _createDiv(section, 'time-group');
        const colon   = _createDiv(group, 'colon-segment');
        colon.innerText   = ':';
        colon.style.color = color || '#667eea';
    }
}

class _SpaceSegment {
    constructor(parentDiv) {
        const section = _createDiv(parentDiv, 'time-section');
        const group   = _createDiv(section, 'time-group');
        _createDiv(group, 'space-segment');
    }
}
