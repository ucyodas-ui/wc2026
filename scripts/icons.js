const icons = new class {
  #images = [
    [ "ewok",   "empire",   "walker",     "porg",   "tie",        "grogu"   ],
    [ "xwing",  "c3p0",     "death_star", "falcon", "r2d2",       "maul"    ],
    [ "ahsoka", "trooper",  "jarjar",     "yoda",   "mando",      "jabba"   ],
    [ "bb8",    "han",      "leia",       "vada",   "resistance", "empty"   ],
  ]
  
  #position = {}
  
  constructor(){
    console.log("icons setup")
    this.#images.forEach((row_array, row) => {
      row_array.forEach((cell, col ) => {
        this.#position[cell] = [row,col];
      })
    })
    style_sheet(
    `
      .sprite_icon_small {
        width: 50px;
        height: 50px;
        background-image: url('images/spritesheet_sm.png');
        background-size: 300px 200px; 
      }
      .sprite_icon_medium {
        width: 150px;
        height: 150px;
        background-image: url('images/spritesheet.png');
         background-size: 900px 600px; 
      }
      .sprite_icon_full {
        width: 650px;
        height: 650px;
        background-image: url('images/spritesheet.png');
        background-size: 3900px 2600px; 
      }
      .sprite_icon_small,
      .sprite_icon_medium,
      .sprite_icon_full
      {
        display: inline-block;
        background-repeat: no-repeat;
        image-rendering: auto;
        margin-right:5px;
      }
    `
    )
  }
  #get_xy(size,name)
  {
    if (!this.#position.hasOwnProperty(name))
    {
      console.log("can not find icon", name)
      name = "empty";
    }
  
    return [ 
      0 - (this.#position[name][1] * size),
      0 - (this.#position[name][0] * size)
    ]
  }
  
  get_icon(name, size)
  {
    let pos;
    switch (size)
    {
      case "small":   pos = this.#get_xy( 50, name);  break;
      case "medium":  pos = this.#get_xy(150, name);  break;
      case "large":   pos = this.#get_xy(650, name);  break;
    }
    console.log("getting ",size,"icon",name, "pos", pos)
    
    return div().class(`sprite_icon_${size}`).style({backgroundPosition: `${pos[0]}px ${pos[1]}px`})
  }
}