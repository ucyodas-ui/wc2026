class entry_points
{
  #entries = []
  #entry_points = []
  #gs = {}

  #calculate_entry_points(entry, index)
  {
    console.log("Calculate entry points", entry)
    
    let points = {
      index: index,
      entry: entry,
      total: 0,
      potential: 0,
      groups: []
    }
    
    this.#calculate_groups_points(entry, points)
    
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
//      console.log(team,index, qs)
      
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
          if (qs.qualified) add_points(1)
          break;
        case 3:
          // Check if picked as one of the 3rd places
          if (entry.groups.third.includes("team"))
          {
            gp.qualify[team] = qs.qualified
            if (qs.qualified) add_points(1)
          }
          break;
      }
      if(gp.all) add_points(1)
    })

    points.total += gp.total
    points.potential += gp.potential

//    console.log("gp",gp)
  }  


  constructor(entries, group_stage){
    this.#entries = entries
    this.#gs = group_stage
    
    this.#entries.forEach((entry, index) => {
      this.#calculate_entry_points(entry, index)
    })
    
    this.#entry_points.sort((b,a) => {
        return a.total - b.total
    })
    
    var pos = 0
    this.#entry_points.forEach((entry,index) => {
      if (index==0)
      {
        pos = 1
        entry.tied = false
      }
      else if (entry.total == this.#entry_points[index-1].total)
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
  
  points() {
    return [...this.#entry_points]
  }
  
}