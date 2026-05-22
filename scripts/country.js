const COUNTRY = new class {
  #data = {}

  #UNKNOWN_FLAG_URL            = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAbCAYAAAAOEM1uAAABj0lEQVR4AeyWS4vCQBCEayIq6sHHovFx04N/fv+ON08qaNQoKKghr7UaAq7X7kPYNVAz04HpfKnM9MRbLBZ5meWh5NcHUPuB/r6D9Xodo9EIs9kM8/lc+vF4jFqtpjVP5qsd9H0f3W4XBK1UKtJ3Oh1Mp1M0Gg1oLzXg8XhEmqY4HA7YbDY4n8/C5HkeBoOBjDWNGvB2u2G5XArg5XLBdrtFFEXCRFdloGjUgHw2HWRP0blqtcqhOCsDRWMC+Pp8rklC8h4dZa+RKWCv15MNQyB+eq5PjjUyA2w2m6B7hLnf71itVsjznKFKZoD9fh/OOcRxLHBZlqnAiskmgM450EEmDcPQZHMwF2UCyESFihJTxNreBJBrbb/fw9o9vpwJIBMRLggCPB4PhmYyAXTOYTKZyM+CPxyawTGRCWCr1UK73QZ/Fr6etdDiiCMcZQLI0sJkFMvL69HHexqZAHLnrtdrhKeT1MAkSTRMv+aaADLj9XpFsNuBRxxjK5kBWgG95/kvgO/vbRfTwe9nutLqBwAA//8KBOA2AAAABklEQVQDACPlJ9YeubxxAAAAAElFTkSuQmCC";
  #list = []
  
  #alternate = {}

  #add(id, name, img_url)
  {
    var img = new Image();
    var info = 
    {
      id:id,
      name: name,
      rank: 999,
      img: img,
      loaded: false,
      region: "",
      group: "",
    }
    img.onload = () => {  info.loaded = true;  }   
    img.src = img_url
    img.alt = id
    this.#data[id] = info
  }

  constructor() {
  }

 setup_keys()
 {
  // Keep an array of all the data
  const keys = Object.keys(this.#data)
  keys.forEach(key => {
    this.#list.push(this.#data[key])
  })

  this.#add("???", "Unknown",        this.#UNKNOWN_FLAG_URL)
  
  this.#add_alternatives()


 }   

  #add_alternatives()
  {
    this.add_alternate_name("Ivory Coast", "Cote d'Ivoire")
    this.add_alternate_name("Curacao", "Curaçao")
  }

  add_id(id, name)
  {
    var info = 
    {
      id:id,
      name: name,
      rank: 999,
      img: 0,
      loaded: false,
      region: "",
      group: "",
    }
    this.#data[id] = info
  }


 
  find_team_id(name)
  {
    for( let i=0; i< this.#list.length; i++)
    {
      let info = this.#list[i]
//      console.log(info.name, name, info.name === name)
      if (info.name === name) return info.id
    }
    // Check if their is another alternate name for the country
    if (this.#alternate.hasOwnProperty(name))       return this.#alternate[name]
    // Could be the id rather than name, so check for that.
    if (this.#data.hasOwnProperty(name))            return name
    console.log("unknown country name:", name)
//    console.log(this.#list)
    return
  }

  add_alternate_name(alt, name)
  {
    this.#alternate[alt] = this.find_team_id(name)
  }    
 
  #add_data(team, data_name, value)
  {
    let id = this.find_team_id(team)
    if (!id) return
    this.#data[id][data_name] = value
    return this.#data[id]
  }
  #get_data(id, data_name)
  {
//    console.log("get", id, data_name)
    if (this.#data.hasOwnProperty(id))
      return this.#data[id][data_name]
    return
  }
 
  add_flag(   team, img_url)    
  { 
    console.log("add flag for",team)
  
    let info = this.#add_data(team, "img_url", img_url  ); 
    if (info)
    {
      var img = new Image();
      info.img = img
      img.onload = () => {  info.loaded = true;  }   
      img.src = img_url
      img.alt = info.id
    }
  }
  
  add_region( team, region) { this.#add_data(team, "region",  region  ); }
  add_group(  team, group)  { this.#add_data(team, "group",   group   ); }
  add_rank(   team, rank)   { this.#add_data(team, "rank",    rank    ); }

  get_name(id)       { name = this.#get_data(id,   "name"       );
                       if(name) name= name.replace("ç", "&#231;");
                       if(name == "undefined") return
                       return name;
                     }
  get_region(id)     { return this.#get_data(id,   "region"     ); }
  get_group(id)      { return this.#get_data(id,   "group"      ); }
  get_rank(id)       { return this.#get_data(id,   "rank"       ); }

  get_image(id)
  {
    let img = new Image();
    if (this.#data.hasOwnProperty(id))
    {
      img.src = this.#data[id].img.src
      img.alt = this.#data[id].id
    }
    else
    {
      img.src = this.#data["???"].img.src
      img.alt = "TBD"
    }
    img.width = 50  
    return img
  }
  
  get_list()
  {
    return this.#list
  }
  
  // 0="Group A", 1="Group B".....
  index_to_id(index)
  {
    return "Group "+String.fromCharCode(65+index)
  }

  get_name_flag_div(id, header)
  {
    id = this.find_team_id(id)
    let cname = this.get_name(id) || "TBD"
    cname += " ("+ id +")"
    let div  = document.createElement('div');
    let span = document.createElement('span');
    span.innerHTML = (header || "") + cname +"<br><span style='font-size:12px'>WR:#"+(this.get_rank(id)||"?")+"</span>"
    let img = this.get_image(id)
    img.style.float='right'
    img.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)'
    div.appendChild(img)
    div.appendChild(span)
    return div
  }
  
  get_data_info(id)
  {
    id = this.find_team_id(id)
    let data =
    {
      id: id,
      flag: this.#data[id].img.src || this.#data["???"].img.src,
      abr: id,
      name: this.get_name(id) || "TBD",
      rank: this.get_rank(id)||"?",
    }
    console.log("get_data_info", id, data)
    return data
  }
  
  get_all_ids()
  {
    return [...this.#list]
  }
  
}

