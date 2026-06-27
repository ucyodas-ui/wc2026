class entry_points
{
  #entries = []
  #entry_points = []
  #gs = {}
  #link_to_points = {}

  #calculate_entry_points(entry, index)
  {
//    console.log("Calculate entry points", entry)
    
    let points = {
      index: index,
      entry: entry,
      total: 0,
      potential: 0,
      groups: []
    }
    
//    // log all the QS status
//    this.#gs.grp_ids.forEach(group_id => {
//      let teams = this.#gs.get_ranked_teams(group_id)
//      teams.forEach((team,index) => {
//        let qs = this.#gs.get_qualified_status(team.abr)
//        console.log(team, "qs", qs)
//      })
//    })
    
    

    this.#link_to_points[entry.name] = points
    
    this.#calculate_groups_points(entry, points)
    
    this.#calculate_group_3rd_place_bonus(entry, points)
    
    this.#entry_points.push( points)
  }

  #calculate_groups_points(entry, points)
  {
    this.#gs.grp_ids.forEach(group_id => {
      this.#calculate_group_points(entry,points, group_id)
    })
  }

  #calculate_group_points(entry, points, group_id)
  {
    let gp = { grp: group_id, total:0, potential:0, position:{}, qualify: {}, all: true}
    points.groups.push(gp)
    
    let prediction = entry.groups[group_id]
    
    
    
//    console.log(entry.name, group_id, prediction)
    // Picking a team in correct position	1pt
    // Picking a team to qualify	          1pt
    // Pick all 4 positions correctly	    1pt per group
   
    prediction.forEach((team,index) => {
      let pos = index+1
      let qs = this.#gs.get_qualified_status(team)
//      console.log("qs??",team,index, qs)
      
      function add_points(v)
      {
        gp.potential+=v
        if (qs.confirmed) gp.total+=v
      }
      
      let correct_position = (pos == qs.pos)
      gp.position[team] = correct_position;
      if (correct_position)
      {
        add_points(1)
      }
      else
      {
        gp.all = false;
      }
      
      switch(pos)
      {
        case 1:
        case 2:
          gp.qualify[team] = qs.qualified
          break;
        case 3:
          // Check if picked as one of the 3rd places
          if (entry.groups.third.includes(team))
          {
            gp.qualify[team] = qs.qualified
          }
          break;
      }
      if (gp.qualify[team]) add_points(1)

      if(index==3 && gp.all) add_points(1)
      
    })

    points.total += gp.total
    points.potential += gp.potential

//    console.log("gp",gp)


  }  

  #calculate_group_3rd_place_bonus(entry, points)
  {
    let g3 = { picked: 0, qual:0, points:0}
    points.third_bonus = g3

    let third = this.#gs.get_third_place_ranks()
    
    third.forEach((team,index) => {
      let group_id = team.grp
      let prediction = entry.groups[group_id][2]
      let actual = team.data.abr
      if (prediction == actual)
      {
        g3.picked++
        if(index < 8) g3.qual ++
      }
      
//      console.log(group_id, "predicted", prediction, "actual", actual, team)
    })
    // Calulate points:
    // Picking 6 or 7 of the third place teams   = 1 pt
    // Picking 8 or 9 of the third place teams   = 2 pts
    // Picking 10     of the third place teams   = 3 pts
    // Picking 11     of the third place teams   = 4 pts
    // Picking all    of the third place teams   = 5 pts
    // Picking 4    of the third place qualifiers = 1 pt 
    // Picking 5    of the third place qualifiers = 2 pts
    // Picking 6    of the third place qualifiers = 3 pts
    // Picking 7    of the third place qualifiers = 4 pts
    // Picking all  of the third place qualifiers = 5 pts
    switch (g3.picked)
    {
      case  6:
      case  7: g3.points += 1; break;
      case  8:
      case  9: g3.points += 2; break;
      case 10: g3.points += 3; break;
      case 11: g3.points += 4; break;
      case 12: g3.points += 5; break;
    }
    switch (g3.qual)
    {
      case 4: g3.points += 1; break;
      case 5: g3.points += 2; break;
      case 6: g3.points += 3; break;
      case 7: g3.points += 4; break;
      case 8: g3.points += 5; break;
    }
    
    if (this.group_stage_completed)  points.total += g3.points
    points.potential += g3.points
  }



  constructor(entries, group_stage){
    this.#entries = entries
    this.#gs = group_stage
    
    this.#entries.forEach((entry, index) => {
      this.#calculate_entry_points(entry, index)
    })
    
    this.#entry_points.sort((b,a) => {
        return a.potential - b.potential
    })
    
    var pos = 0
    this.#entry_points.forEach((entry,index) => {
      if (index==0)
      {
        pos = 1
        entry.tied = false
      }
      else if (entry.potential == this.#entry_points[index-1].potential)
      {
        entry.tied = true;
        entry.tied = true;
        this.#entry_points[index-1].tied = true;
      }
      else
      {
        pos = index+1
      }
      entry.pos = pos
    })
    
    
  }
  
  total_points() {
    return [...this.#entry_points]
  }
  
  potential_points() {
    let pot = [...this.#entry_points]
    pot.sort((b,a) => {
      return a.potential - b.potential
    })
//    console.log("sort", pot)
    return pot
  }
  
  find_entry_points(name){
    return this.#link_to_points[name]
  }
  
}