const DRAW = new class {
  #matches = []
  #groups  = {}
  #group_teams = {}
  #group_matches = {}
  #final_match = 0
  #first_ko_match = -1
  #last_ko_match = -1
  
  #is_group_match(stage)
  {
    return stage.startsWith("Group")
  }
  
  #add_group(stage)
  {
    if (this.#groups.hasOwnProperty(stage)) return
    this.#groups[stage] = {}
    this.#group_teams[stage] = []
    this.#group_matches[stage] = []
  }
  
  #add_group_team(stage, team, team_id)
  {
    if (!this.#is_group_match(stage)) return
    this.#add_group(stage)

    if (!team_id) team_id = stage.split(' ')[1]+"??"
    
    console.log(team_id, team)
    
    if (this.#groups[stage].hasOwnProperty(team_id)) return
    
    this.#groups[stage][team_id] = team
    this.#group_teams[stage].push(team_id)
  }
  
  #add_group_match(stage, match_no)
  {
    if (!this.#is_group_match(stage)) return
    this.#add_group(stage)
    this.#group_matches[stage].push(match_no)
  }
  
  
  
  add_match(match_no, stage, date, time, utc, location, team1, team2 )
  {
    if (team2[0]=="3") team2 = `3vs${team1}`
    
    let id1 = this.COUNTRY.find_team_id(team1)
    let id2 = this.COUNTRY.find_team_id(team2)

    var match_info = {
      no:         match_no, 
      stage:      stage, 
      date:       date, 
      time:       time, 
      utc:        utc, 
      team_name1: team1, 
      team_name2: team2, 
      id1:        id1, 
      id2:        id2,
    }
    this.#matches[match_no] = match_info
    this.#add_group_team(stage, team1, id1)
    this.#add_group_team(stage, team2, id2)
    this.#add_group_match(stage, match_no)
    
    console.log("match", match_info)
    
    if(!this.#is_group_match(stage))
    {
      if (this.#first_ko_match == -1)
      {
        this.#first_ko_match = match_no;
        this.#last_ko_match = match_no;
      }
      else
      {
        if (match_no < this.#first_ko_match) this.#first_ko_match = match_no;
        if (match_no > this.#last_ko_match) this.#last_ko_match = match_no;
      }
    }    
    
    if (stage=="Final") this.#final_match = match_no
    
  }
  // Need to call this before adding any groups.
  add_country(COUNTRY)
  {
     this.COUNTRY = COUNTRY
  }
  
  get_group_teams(group)
  {
    if(!this.#group_teams.hasOwnProperty(group)) return  // unknown
    return this.#group_teams[group]
  }
  
  #knockouts = {
    F:    [],
    F34:  [],
    SF:   [],
    QF:   [],
    R16:  [],
    R32:  [],
  }
  #add_parent_matches(from_array, to_array)
  {
    from_array.forEach((match_no) => {
      let match = this.#matches[match_no]
      let parent1=match.team_name1.substr(2)*1
      let parent2=match.team_name2.substr(2)*1
      to_array.push(parent1)
      to_array.push(parent2)
    })
  }
  
  get_match(match_no)
  {
    return this.#matches[match_no]
  }
  
  setup_bracket()
  {
    // last match is the final, 3rd/4th is the match -1:
    this.#knockouts.F.push(this.#final_match)
    this.#knockouts.F34.push(this.#final_match-1)

    // Now work out each of the matches in order
    
    this.#add_parent_matches(this.#knockouts.F,   this.#knockouts.SF)
    this.#add_parent_matches(this.#knockouts.SF,  this.#knockouts.QF)
    this.#add_parent_matches(this.#knockouts.QF,  this.#knockouts.R16)
    this.#add_parent_matches(this.#knockouts.R16, this.#knockouts.R32)
    
    console.log("knockouts",this.#knockouts)
  }
  
  get_bracket()
  {
    return this.#knockouts
  }
  
  get_ko_match_numbers()
  {
    return [this.#first_ko_match, this.#last_ko_match]
  }
}