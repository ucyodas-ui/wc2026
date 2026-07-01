class third_place_tracker {
  #third_place_draw = {}
  #third_place_id = ""
  #third_place_vs = {}

  constructor () {
  //    this.#set_third_place_id("ABCDEFGH")
  }

  
  #set_third_place_id(id)
  {
//    console.log("set_third_place_id", id)
//    if (id == this.#third_place_id) return;
    
    // the id is the 3rd place finishes, using this ID we can work who the first place winners play,
    // It needs to be sorted alphabetically
    this.#third_place_id = id.split('').sort().join('')

    // These are the group winners that will play the 3rd place teams in other groups;
    const winners = "ABDEGIKL"
    
  
    if (!this.#third_place_draw.hasOwnProperty(this.#third_place_id))
    {
      // TODO: reset all the third place knockouts
//      console.log("set_third_place_id", id, ">>", "not known")
      for(let i=0;i<8;i++)
      {
        let group_first = "1"+winners[i]
        let group_third = "3?"
        this.#third_place_vs[group_first] = group_third
      } 

      return
    }

    let vs = this.#third_place_draw[this.#third_place_id]

//    console.log("third place groups=", id, "then 1A,1B,1D,1E,1G,1L,1K,1L play", vs)
    

    for(let i=0;i<8;i++)
    {
      let group_first = "1"+winners[i]
      let group_third = "3"+vs[i]
      
      this.#third_place_vs[group_first] = group_third
    }
    
//    console.log("third place groups=", this.#third_place_id, vs,this.#third_place_vs)
  }

  // Set up the table of which 1st teams play the 3rd place teams.
  set_third_place_table(THIRD_PLACE_RANKING_VS)
  {
    for(let i=0;i<THIRD_PLACE_RANKING_VS.length;i+=2)
    {
      this.#third_place_draw[THIRD_PLACE_RANKING_VS[i]] = THIRD_PLACE_RANKING_VS[i+1]
    }
//    console.log("third draw", this.#third_place_draw)

    // Work out the versa table again
    this.#set_third_place_id(this.#third_place_id)
  }
  
  set_third_place_groups(groups)
  {
//    console.log(groups)
    let ids = []
    // We only care about the first 8 group 3rd places
    
//    console.log("set_third_place_groups", groups)
    
    
    for(let i=0; i<8; i++)
    {
      if (groups[i])
        ids.push(groups[i].grp)
    }
    this.#set_third_place_id(ids.join(""))
  }
  
  get_3rd_place_group_vs(group1)
  {
    let table = this.#third_place_vs
    var grp_id = "1"+group1
//    console.log("get third", grp_id, table, table[grp_id])
    if (table.hasOwnProperty(grp_id)) return table[grp_id][1]

    return
  }
}


class knockout_results{
  #group_data = {}
  #group_completed = {}
  #ko_data = []

  #third_place = new third_place_tracker
  
  #UNKNOWN = "TBD"
  #COUNTRY = {}
  #DRAW = {}

  constructor () {
  }

  #get_team(game_info)
  {
    
    let stage = game_info[0];
    if (stage=="W") console.log("get_team",game_info, this.get_knockout_winner(Number(game_info.substring(2))))
    switch(stage)
    {
      case "W":  {   return this.get_knockout_winner(Number(game_info.substring(2))); }
      case "L":  {   return this.get_knockout_loser( Number(game_info.substring(2))); }
      case "1":  {   return this.get_group_placing(game_info[1], 1).team; }
      case "2":  {   return this.get_group_placing(game_info[1], 2).team; }
      case "3":  {   let group1 = game_info[4];  //3vs1A
                     let group3 = this.#third_place.get_3rd_place_group_vs(group1);
//                     console.log("find 3rd for "+group1, group3);
                     return this.get_group_placing(group3, 3).team;  }
      default:   { console.log("What is this:", game_info); return this.#UNKNOWN;}
    }
  }

  #update_match_results()
  {
//    console.log("update_match_reports")
    this.#ko_data.forEach((item, match_no) =>
    {
      let match_info = item.match_info;
//      console.log("match", match_no, match_info)
      let team_name1 = this.#get_team(match_info.team_name1)
      let team_name2 = this.#get_team(match_info.team_name2)
      item.team_ids[0] = team_name1
      item.team_ids[1] = team_name2
      item.match_info.id1 = team_name1
      item.match_info.id2 = team_name2
      
      console.log("Update results", match_no, item)
      
    })
  }



  add_country(COUNTRY)
  { 
    this.#COUNTRY = COUNTRY; 
  }
  add_draw(DRAW)
  {
    this.#DRAW = DRAW
    var ko_numbers = DRAW.get_ko_match_numbers()
    for(let i=ko_numbers[0];i<=ko_numbers[1];i++)
    {
      
      this.#ko_data[i] =
      {
        match_info: DRAW.get_match(i), 
        team_ids: [this.#UNKNOWN, this.#UNKNOWN],
        winner: 0, // No winner
        score: {f:[], e:[   ],p:[   ]}
      }
    }
  }
  add_third_place_ranking_table(THIRD_PLACE_RANKING_VS)
  {
    this.#third_place.set_third_place_table(THIRD_PLACE_RANKING_VS)
  }
  
  setup_defaults()
  {
    let groups = []
    for(let i=0;i<12;i++)
      groups.push("Group "+String.fromCharCode(65+i))
    this.add_third_place_teams(groups)
  }
  
  
  add_group_results(group, results, changed)
  {
//    console.log("Add group results", group, results, changed)
    if (!this.#group_data.hasOwnProperty(group))
    {
      this.#group_data[group] = []
    }
    for(let i=0; i<results.length; i++)
    {
      this.#group_data[group][i] = results[i]
    }
    if (changed)
      this.#group_completed[group] = true
    
//    console.table(this.#group_data[group])
   
    this.#update_match_results()   
  }
 
  get_group_placing(group, placing)
  {
//    console.log("get_group_placing",group,placing,this.#group_data, this.#group_data.hasOwnProperty(group))
    if (!this.#group_data.hasOwnProperty(group)) return this.#UNKNOWN;
//    console.log("find group place", group, placing, this.#group_completed[group], this.#group_data[group][placing-1].abr)
    return { completed: this.#group_completed[group], team: this.#group_data[group][placing-1].abr }
  }
  
 
  add_third_place_teams(groups)
  {
    this.#third_place.set_third_place_groups(groups)
    this.#update_match_results()   
  }
  
  add_knockout_result(match_no, score)
  {
    if (! this.#ko_data.hasOwnProperty(match_no)) return; // not a knock out match
    
    console.log("add_knockout_result",match_no, score)

    this.#ko_data[match_no].score = score
    this.#ko_data[match_no].winner = find_winner(score) 
    console.log("add_knockout_result",match_no, this.#ko_data[match_no])    
      
    this.#update_match_results()   
  }
  
  
  get_knockout_winner(match_no)
  {
    if (!this.#ko_data.hasOwnProperty(match_no)) return this.#UNKNOWN
    switch(this.#ko_data[match_no].winner)
    {
      case 1: return this.get_knockout_team1(match_no);
      case 2: return this.get_knockout_team2(match_no);
      default:  return this.#UNKNOWN
    }
  }
  
  has_winner(match_no)
  {
    if (this.get_knockout_team1(match_no) == this.#UNKNOWN) return false
    if (this.get_knockout_team2(match_no) == this.#UNKNOWN) return false
    if (this.#ko_data[match_no].winner) return true
    return false;
  }

  get_knockout_loser(match_no)
  {
    if (!this.#ko_data.hasOwnProperty(match_no)) return this.#UNKNOWN
    switch(this.#ko_data[match_no].winner)
    {
      case 2: return this.get_knockout_team1(match_no);
      case 1: return this.get_knockout_team2(match_no);
      default:  return this.#UNKNOWN
    }
  }
  
  get_knockout_team1(match_no)
  {
    console.log("get_knockout_team1",match_no,this.#ko_data[match_no].team_ids)
    return this.#ko_data[match_no].team_ids[0]
  }
  
  get_knockout_team2(match_no)
  {
    return this.#ko_data[match_no].team_ids[1]
  }
  
  get_knockout_score(match_no)
  {
    return this.#ko_data[match_no].score
  }
  
}