function compare(a,b,asc)
{
//  console.log("compare",a,b,asc)
  const valueA = isNaN(a) || a === "" ? a : parseFloat(a);
  const valueB = isNaN(b) || b === "" ? b : parseFloat(b);
  
  if (typeof valueA === 'number' && typeof valueB === 'number')
  {
    return asc ? valueA - valueB : valueB - valueA;
  } 
  return asc ? valueA.localeCompare(valueB) 
             : valueB.localeCompare(valueA);
}


function makeTableSortable(tableElement) {
  if (!tableElement) return;

  // 1. Check and fix missing thead/tbody structure
  let thead = tableElement.querySelector("thead");
  let tbody = tableElement.querySelector("tbody");

  if (!thead || !tbody) {
    const allRows = Array.from(tableElement.rows);
    if (allRows.length === 0) return;

    if (!thead) {
      thead = document.createElement("thead");
      tableElement.insertBefore(thead, tableElement.firstChild);
    }
    if (!tbody) {
      tbody = document.createElement("tbody");
      tableElement.appendChild(tbody);
    }

    const firstRow = allRows.shift();
    const headerRow = document.createElement("tr");
    Array.from(firstRow.cells).forEach(cell => {
      const th = document.createElement("th");
      th.innerHTML = cell.innerHTML;
      if (cell.className) th.className = cell.className;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    firstRow.remove();

    allRows.forEach(row => tbody.appendChild(row));
  }

  // 2. Setup the sorting logic and indicators
  const headers = thead.querySelectorAll("th");
  let currentColumn = -1;
  let isAscending = true;

  headers.forEach(h => {
    h.style.cursor = "pointer";
    // Initialize every header with the neutral two-headed arrow
    h.textContent += " ⇅";
  });

  headers.forEach((header, columnIndex) => {
    header.addEventListener("click", () => {
      const rowsArray = Array.from(tbody.rows);
      
      if (currentColumn === columnIndex) {
        isAscending = !isAscending;
      } else {
        isAscending = true;
        currentColumn = columnIndex;
      }

      // Reset all headers back to the neutral unsorted arrow
      headers.forEach(h => {
        h.textContent = h.textContent.replace(/ [▲▼⇅]/, " ⇅");
      });

      // Override the active header with the explicit directional arrow
      header.textContent = header.textContent.replace(" ⇅", isAscending ? " ▲" : " ▼");

      // Perform the sort
      rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex] ? rowA.cells[columnIndex].textContent.trim() : "";
        const cellB = rowB.cells[columnIndex] ? rowB.cells[columnIndex].textContent.trim() : "";
        return compare(cellA,cellB, isAscending)
      });

      // Render the sorted rows
      rowsArray.forEach(row => tbody.appendChild(row));
    });
  });
}

function sort_li(list, asc)
{
  if (asc === undefined) asc = true;
  const items = Array.from(list.getElementsByTagName("li"));
//  console.log("sort_list",list, item_type, asc, "items", items)

  items.sort((a, b) => compare(a.textContent.trim(),b.textContent.trim(), asc));
  // Put the sorted items back into the list
  items.forEach(item => list.appendChild(item));
}

function sort_dt(list, asc)
{
  if (asc === undefined) asc = true;
  const items = [];
  let currentDt = null;
  for (const el of list.children) {
    if (el.tagName === 'DT') currentDt = el;
    else if (el.tagName === 'DD' && currentDt) {
      items.push({ dt: currentDt, dd: el });
      currentDt = null; // Reset
    }
  }
//  console.log("sort_dt",items,asc)
  // 2. Sort the pairs alphabetically by the <dt> text content
  items.sort((a, b) => compare(a.dt.textContent.trim(), b.dt.textContent.trim(), asc));

  // 3. Re-append the elements to the <dl> in the new sorted order
  items.forEach(pair => {
    list.appendChild(pair.dt);
    list.appendChild(pair.dd);
  });
}



class obj {
  static all = {};
  #element
  #is_table_cell
  #type
  #label
  
  constructor(type, innerHTML) {
    this.#element = document.createElement(type)
    console.log("new obj", type)
    if (typeof innerHTML !== "undefined")
      this.#element.innerHTML = innerHTML
    
    this.#is_table_cell =  ((type==="td") || (type == "th"));
    this.#type = type
    // Until we know better attach to the end of the doc.
    if (document.body)
      this.end()
  }
  
  input_type() {
//    console.log(this.#type)
    if (this.#type == "textarea") return this.#type
    if (this.#type != "input") return ""
    return this.#element.type
  }
  
  #error(msg) {console.log(this.#element.id, "Error:"+msg); }
  #log(msg) {
    if (msg) console.log(msg, this); else console.log(this);
  }
  anchor() {
    if (this.#label) return this.#label.dom()
    return this.#element;
  }
  
  add_to_dom(dom) {
    if (!dom) { this.#error("unknown dom"); return; }
    dom.appendChild(this.anchor());
    return this;
  }
  add_to_id(parent) { this.add_to_dom(document.getElementById(parent)); return this; }
  start()           { document.body.prepend(this.#element);             return this; }
  end()             { document.body.appendChild(this.#element);         return this; }
  add(...objs)      { objs.forEach(obj => {
                        this.#element.appendChild(obj.anchor()); });    return this; }
  add_to(obj)       { obj.add(this);                                    return this; }
  hide()            { this.anchor().style.display = "none";             return this; }
  show()            { this.anchor().style.display = "";                 return this; }
  id(id)            { 
                      if (this.#element.id && this.#element.id != id)
                        delete this.element[id];
                      if (id) obj.all[id] = this;
                      this.#element.id = id;                            return this; }
  class(name)       { this.#element.classList.add(name);                return this; }
  class_remove(name){ this.#element.classList.remove(name);             return this; }
  toggle(name)      { this.#element.classList.toggle(name);             return this; }
  has_class(name)   { return this.#element.classList.contains(name);                 }
  clear()           { this.#element.innerHTML = "";                     return this; }
  set(text)         { this.#element.innerHTML = text;                   return this; }
  text()            {                                                   return this.#element.innerHTML; }
  dom()             {                                                   return this.#element; }
  is_hidden()       {                                                   return (this.anchor().style.display === "none"); }
  italic()          { this.#element.style.fontStyle  = "italic";                 return this}
  bold()            { this.#element.style.fontWeight = "bold";                   return this}
  left()            { this.#element.style.textAlign = "left";                    return this}
  right()           { this.#element.style.textAlign = "right";                   return this}
  center()          { this.#element.style.textAlign = "center";                  return this}
  top()             { this.#element.style.verticalAlign = "top";                 return this}
  bottom()          { this.#element.style.verticalAlign = "bottom";              return this}
  middle()          { this.#element.style.verticalAlign = "middle";              return this}
  pointer()         { this.#element.style.cursor = "pointer";                    return this}
  style(rules)      { Object.assign(this.#element.style, rules);                 return this}
  rule(r)           { if (this.#type == "style") this.#element.sheet.insertRule(r);    return this}
  colspan(size)     { if (this.#is_table_cell) this.#element.colSpan = size;     return this}
  rowspan(size)     { if (this.#is_table_cell) this.#element.rowSpan = size;     return this}
  sort(asc)         { if (this.#type == "table") makeTableSortable(this.#element);
                      else if ((this.#type == "ul") || (this.#type == "ol")) sort_li(this.#element,asc);
                      else if (this.#type == "dl") sort_dt(this.#element,asc);
                      return this;
                    } 
  onclick(func)     { this.#element.addEventListener('click',  () => func( this.#element.id, this)); return this;}
  onchange(func)    { this.#element.addEventListener('change', () => func( this.#element.id, this.value(), this)); return this;}
  ontyping(func)    { this.#element.addEventListener('input',  () => func( this.#element.id, this.value(), this)); return this;}
  
  check()           { console.log("check",this.input_type());
                      if (this.input_type() == "checkbox") this.#element.checked = true;  return this;}
  uncheck()         { if (this.input_type() == "checkbox") this.#element.checked = false; return this; }
  def(value)        { if ((this.#type == "input") || (this.#type == "textarea")) this.#element.value = value; return this;}
  value()           { switch (this.input_type())
                      {
                        case "checkbox": return this.#element.checked;
                        default: return this.#element.value;
                      }
                      return ""
                    }
  label(text)       { if (this.#label) { this.#label.set(text); return this; }
                      this.#label = new obj("label", text); 
                      this.#element.before(this.#label.dom()); this.#label.dom().append(this.#element);
                      return this;
                    }
  get_label()       { return this.#label; }
  
  static find(id)   { 
                      if (!all.hasOwnProperty(id))
                      {
                        console.log("could not find dom obj", id)
                        return // nothing
                      }
                      let o = all[id];
                      console.log("find", id, o)
                      return o;
                    }
}

function convert_to_table(items,no_header) {  // an array of objects, or an array of arrays.
  var t = table();
  var thead_row = no_header ? t : thead().add_to(t);
  var tbody_row = no_header ? t : tbody().add_to(t);
 
  if (Array.isArray(items[0]))
  {
    items.forEach((item,index) => { (index == 0) ? thead_row.add(head(item)) : tbody_row.add(row(item))})
  }
  else // Assume each item has the same keys
  {
    const fields = Object.keys(items[0])
    if (!no_header) thead_row.add(head(fields))
    items.forEach( item => { let r = tr().add_to(tbody_row); fields.forEach(f => r.add(td(item[f])))})
  }
  return t;
}

function convert_to_list(items, ordered) {  // an array of strings, or an object converted to a definition list
  if (Array.isArray(items))
  {
    var t = ordered ? ol() : ul();
    items.forEach(item => li(item).add_to(t))
    return t;
  }
  // Is an object, convert to a definition list
  const fields = Object.keys(items)
  var t =  dl()
  fields.forEach(key => t.add(dt(key)).add(dd(items[key])))
  return t;
}


function style_sheet(sheet)
{
  return new obj("style", sheet).add_to_dom(document.head)
}


function link(href,title) { let lk = new obj("a", title ? title : href.replaceAll("_"," ").replace(/[.].*/,""))
             if (href) lk.dom().href = href;   return lk;}
function ol()       { return new obj("ol"); }
function dl()       { return new obj("dl"); }
function ul()       { return new obj("ul"); }
function li(text)   { return new obj("li",text); }
function dt(term)   { return new obj("dt",term); }
function dd(desc)   { return new obj("dd",desc); }
function table()    { return new obj("table"); }
function thead()    { return new obj("thead"); }
function tbody()    { return new obj("tbody"); }
function tr()       { return new obj("tr"); }
function td(text)   { return new obj("td",text); }
function th(text)   { return new obj("th",text); }
function row(cells) { var r = tr(); cells.forEach( cell => r.add(td(cell))); return r; }
function head(cells){ var r = tr(); cells.forEach( cell => r.add(th(cell))); return r; }
function div(text)  { return new obj("div",text); }
function span(text) { return new obj("span",text); }
function h1(text)   { return new obj("h1",text); }
function h2(text)   { return new obj("h2",text); }
function h3(text)   { return new obj("h3",text); }
function p(text)    { return new obj("p", text); }
function br(text)   { return new obj("br", text); }
function b(text)    { return new obj("b", text); }
function image(src) { let img = new obj("img"); img.dom().src = src; return img; }
function input(type){ 
                      let o = new obj("input"); 
                      o.dom().type=type; 
                      return o
                    }
function button(text){ return new obj("button", text); }
function checkbox(){ 
                      let cb = input("checkbox"); 
                      return cb;
                   }
function textarea(rows, cols){
                      let ta = new obj("textarea");
                      if (rows) ta.dom().rows = rows
                      if (cols) ta.dom().cols = cols
                      return ta
                  }
function contents(name, rules){
  if (!name) name = "Contents"
  if (!rules) rules = [ "h1","h2","h3","id" ]
  if (!Array.isArray(rules)) rules = [...rules]
  const selector = rules.map(str => str.replaceAll("id", "div[id], span[id], p[id], a[id]")).join(", ");
  console.log("contents", name, selector)
  let cdiv = div().add(b(name)).add(p())
  let list = ul().add_to(cdiv)
  let items = document.querySelectorAll(selector)
  items.forEach((item,index) => {
    console.log("item",index,item)
    let tag = item.tagName
    let id = item.id
    let name = item.innerText;
    switch(tag)
    {
      case "H1":
      case "H2":
      case "H3":
      { 
        break;
      }
      default:
      {
        if (id) name = id.replaceAll("_"," ").trim();
        break;
      }
    }
    if (!id)
    {
      id = `_content_${index}`
      item.id = id;
    }
    console.log(tag,id, name)
    if (name.toLowerCase() != "contents")
      li().add_to(cdiv).add(link("#"+id,name))
  })
  return cdiv
}  