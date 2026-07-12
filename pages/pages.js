class page {
  constructor(id, title, icon, style, display)
  {
    this.id = id
    this.title = title
    this.icon = icon
    this.ss = style
    this.display = display
  }
}

const pages = new class {
  #pages = []
  #search = {}
  #db
  #saber
  #header
  #sub_title
  #setup = false
  #icon
  #page
  #ss
  
  constructor()
  {
    console.log("pages constructor")
    this.#setup_display()
//    this.#display_dummy_page()
    style_sheet(
    `
      .page {
      }
      .title {
        vertical-align: top;
        .main_title{
          padding-left:60px;
          display: inline-block;
        }
        .sub_title{
          padding-left:8px;
        }
        .icon { display: inline-block; position:absolute; top:5px;}
      }

    `)

  }
  
  #set_style(style)
  {
    this.#ss.set(style)
  }

  
  #get_page_id()
  {
    return window.location.hash.replace(/^#/,"");
  }
  
  
  #set_page_id(id)
  {
    window.location.hash = id;
    this.#page.id = "page_"+id
  }
  
  #display_dummy_page(optional_text)
  {
    console.log("Dummy page")
    this.#display_title("Unknown page")
    this.#display_contents( () => {
      return div("Sorry, I couldn't find the page you wanted.").add(p(optional_text?optional_text:""))
    })
    this.#change_icon("jarjar")
  }

  #change_icon(icon)
  {
    console.log("Change icon to "+icon)
    this.#icon.clear()
    this.#icon.add(icons.get_icon(icon, "small"))
  }
  
  #display_title(title)
  {
    console.log("Change title to "+title)
    if (!title) title = ""
    this.#sub_title.set(title)
  }    
  #display_contents(display)
  {
    this.#page.clear().add(display(this.#db))
  }
  #update_menu()
  {
  }

  #setup_display()
  {
    if ((!document.body) || (this.#setup)) return;
    this.#setup_title()
    this.#setup_saber()
    this.#setup_menu()
    this.#setup_page()
    this.#setup = true;
    window.addEventListener('hashchange', (event) => {
      let id = this.#get_page_id()
      this.goto_page(id)
    })
  }
  
  #setup_title()
  {
    console.log("setup_title")
    const uc_title = "UC Master Yodas' World Cup Football 2026 Competition"
    
    this.#header = div().start()
    let logo  = div().class('logo').add_to(this.#header)
    let title_dom = div().class('title').add_to(this.#header)
    this.#icon = div().class('icon').add_to(title_dom)
    div().class('main_title').add(link('index.html',uc_title)).add_to(title_dom)
    this.#sub_title = span().class('sub_title').add_to(title_dom)
  }
  
  #setup_saber()
  {
    console.log("setup_saber")
    this.#saber = new saber(this.#header)
  }

  #setup_menu()
  {
  }
  #setup_page()
  {
    this.#page = div().class("page")
    this.#ss = style_sheet("")
  }


  set_db(db)
  {
    this.#db = db
  }
  
  get_page_link(id, text)
  {
    if (!this.#search.hasOwnProperty(id))
      return link(id,text)
    if (!text) text = this.#search[id].title
    return link("",text).onclick( () => pages.goto_page(id))
  }
  

  goto_page(id)
  {
    this.#setup_display()
    let page
    if (id=="")
    {
      // By default got to page 0 if it exists
      if (this.#pages.length > 0) 
        page = this.#pages[0]
      else 
      {
        this.#display_dummy_page("There are no pages to display currently.")
        return;
      }
    }
    else if (!this.#search.hasOwnProperty(id))
    {
      this.#display_dummy_page("Could not find "+id)
      return
    }
    else page = this.#search[id]

    this.#set_page_id(page.id)
    this.#set_style(page.ss)
    this.#change_icon(page.icon)
    this.#display_title(page.title)
    this.#display_contents(page.display)
    this.#update_menu(page.id)
  }
  
  add_page(new_page)
  {
    this.#pages.push(new_page)
    this.#search[new_page.id] = new_page
  }
  
  start_up()
  {
    this.#setup_display()
    let id = this.#get_page_id()
    this.goto_page(id)
  }
}




class saber {
  #saber = null;
  #saber_timer = null;
  static css = false;
  static get EVENTS() { return ['mousemove', 'scroll', 'keydown', 'mousedown', 'touchstart', 'wheel']; }

  
  static setup_css()
  {
    if (saber.css) return
    saber.css = true;
    style_sheet(
    `
      #saber {
        position: fixed;
        left: 70px; top: 134px;
        height: 5px;
        background-color: white;
        overflow: hidden;
        transform-origin: top left;
        transform: rotate(237deg);
        border-radius: 9px;
        transition: width 1s ease-in-out;
        z-index: 1005;
        animation: pulse 1s infinite alternate, rock 2s infinite alternate ease-in-out;
        border-top: 2px solid #ff4d4d;
        border-right: 2px solid #ff4d4d;
        border-bottom: 2px solid #ff4d4d;
        border-left: none;
      }
      .on  { width: 125px; }
      .off { width: 0px;  }

      @keyframes pulse {
        0%   { box-shadow: 5px 0 12px #ff3333, 5px 0 15px #ff0000, inset 0 0 3px #ff0000; }
        33%  { box-shadow: 5px 0 7px #ff0000, 5px 0 32px #ff0000; }
        100% { box-shadow: 5px 0 25px #ff3333, 5px 0 10px #ff0000; }
      }
      @keyframes rock {
        0%   { transform: rotate(236deg); }
        100% { transform: rotate(239deg); }
      }
    `)
  }
  constructor(parent)
  {
    console.log("new saber")
    saber.setup_css()
    this.#saber = div().id("saber").class('off').add_to(parent)
    
    saber.EVENTS.forEach(e => document.addEventListener(e, this.saber_activate, { passive: true }));
  }

  saber_activate = () =>
  {
    if (!this.#saber.has_class('on'))
    {
      this.#saber.class_remove('off');
      this.#saber.class('on');
      console.log("on", this.#saber.has_class('on'), this.#saber.has_class('off'))
    }
    clearTimeout(this.#saber_timer);
    this.#saber_timer = setTimeout(this.saber_deactivate, 3000);
  }
  saber_deactivate = () =>
  {
    console.log("off", this.#saber.has_class('on'), this.#saber.has_class('off'))
    this.#saber.class_remove('on');
    this.#saber.class('off');
  }
}



