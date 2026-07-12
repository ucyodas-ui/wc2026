
class menu
{
  #side
  #list
  #options = {}
  #last_option
  #callback
  static stylesheet

  static add_stylesheet()
  {
    if (menu.stylesheet) return;
    menu.stylesheet = style_sheet(
    `
    /* Jedi Theme Variables */
    :root {
      --bg-color: #0c0f0a;       /* Deep space dark charcoal */
      --text-color: #b0c4b1;     /* Subtle silver-green text */
      --hover-bg: #192218;       /* Muted forest green background highlight */
      --glow-color: #2ff53c;     /* Bright Jedi Green Lightsaber Glow */
      --transition-speed: 0.3s;
    }

    /* Reset & Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      display: flex;
      background-color: #121611; /* Dark space background matching theme */
      color: #ffffff;
      overflow-x: hidden;
    }

    /* Sidebar Container (Hover Controller) */
    .sidebar-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 70px; /* Slim view width by default */
      background-color: var(--bg-color);
      padding: 24px 10px;
      overflow-x: hidden;
      overflow-y: auto; /* Allows smooth scrolling for the 24 links */
      transition: width var(--transition-speed) ease; /* Smooth expanding animation */
      z-index: 100;
      box-shadow: 2px 0 15px rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
    }

    /* Hide default scrollbar but retain movement */
    .sidebar-wrapper::-webkit-scrollbar {
      width: 4px;
    }
    .sidebar-wrapper::-webkit-scrollbar-thumb {
      background: var(--hover-bg);
      border-radius: 4px;
    }

    /* Header Section Layout */
    .sidebar-header {
      margin-bottom: 25px;
      padding-left: 14px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .logo-text {
      color: var(--glow-color);
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: 3px;
      text-shadow: 0 0 8px rgba(47, 245, 60, 0.4); /* Header glow */
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    /* Navigation Links Layout */
    .nav-list {
      list-style: none;
    }

    .nav-item {
      margin: 4px 0;
    }

    /* Target link element wrapper */
    .nav-link {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--text-color);
      padding: 10px 14px;
      border-radius: 8px;
      white-space: nowrap;
      border-left: 4px solid transparent;
      transition: all var(--transition-speed) ease;
    }

    /* SVG Icon Controls */
    .nav-icon {
      width: 22px;
      height: 22px;
      min-width: 22px;
      margin-right: 20px;
      fill: currentColor; /* Automatically matches parent text state color */
      transition: transform var(--transition-speed) ease, filter var(--transition-speed) ease;
      display: inline-block;
    }

    /* Hide text labels initially */
    .link-text {
      opacity: 0;
      font-weight: 500;
      letter-spacing: 0.5px;
      font-size: 0.9rem;
      transition: opacity 0.2s ease;
    }

    /* ----------------------------------------------------------- */
    /* HOVER STATE TRIGGERS                                       */
    /* ----------------------------------------------------------- */
    
    /* 1. Expand Sidebar Width on Hover */
    .sidebar-wrapper:hover {
      width: 260px; /* Wide view width */
    }

    /* 2. Style links and light up icons when parent is hovered */
    .sidebar-wrapper:hover .nav-link {
      color: #ffffff;
    }

    .sidebar-wrapper:hover .nav-icon {
      color: var(--glow-color);
      filter: drop-shadow(0 0 4px var(--glow-color));
    }

    /* 3. Reveal Typography Content on Hover */
    .sidebar-wrapper:hover .logo-text,
    .sidebar-wrapper:hover .link-text {
      opacity: 1;
      transition-delay: 0.1s; /* Tiny delay prevents text breaking during pop-out */
    }

    /* 4. Deep hover states for individual rows */
    .nav-link:hover {
      background-color: var(--hover-bg) !important;
      border-left-color: var(--glow-color) !important;
      box-shadow: inset 5px 0 10px rgba(47, 245, 60, 0.05);
    }

    .nav-link:hover .nav-icon {
      transform: scale(1.15) !important;
      filter: drop-shadow(0 0 8px var(--glow-color)) !important;
    }

    /* Main Content Layout Adjustments */
    .main-content {
      margin-left: 70px; /* Syncs with collapsed sidebar space */
      padding: 40px;
      width: 100%;
      transition: margin-left var(--transition-speed) ease;
    }

    .main-content h1 {
      color: var(--glow-color);
      margin-bottom: 15px;
      font-weight: 700;
    }

    .main-content p {
      color: #a2a3b7;
      line-height: 1.6;
    }

    /* Push main page layout forward when panel expands */
    .sidebar-wrapper:hover ~ .main-content {
      margin-left: 260px; /* Syncs perfectly with expanded width */
    }
    `)    
  }

  constructor(title, callback)
  {
    this.#callback = callback
    this.#menu = new obj("aside").class("sidebar")
    this.#menu.add(div().class("wrapper").add(span(title).class("logo-text")))
    this.#list = ul().add_to(this.#side)
  }

  unselect_option()
  {
    if (this.#last_option)
      this.#last_option.remove_class("selected")
    this.#last_option = null
  }
  select_option(id)
  {
    if (!this.#options.hasOwnProperty(id)) return;
    this.unselect_option()
    this.#last_option = this.#options[id]
    this.#last_option.class("selected")
  }
  
  #call_callback(id)
  {
    return () => this.#callback(id)
  }
  
  add_option(name,id,icon)
  {
    let op = li().class("nav-item").add_to(this.#menu)
    let lk = link(this.#call_callback(id),"").class("nav-link").add_to(op)
    lk.add(icon).class("nav-icon")
    lk.add(span(name).class("link-text")
  }
}
  