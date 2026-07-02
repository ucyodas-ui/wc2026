class entry_points
{
  #entries = []
  #entry_points = []
  #gs = {}
  #kr = {}
  #link_to_points = {}

  #calculate_entry_points(entry, index, ko_games)
  {
//    console.log("Calculate entry points", entry)
    
    let points = {
      index: index,
      entry: entry,
      grp_total: 0,
      grp_potential: 0,
      ko_total: 0,
      ko_potential: 0,
      total: 0,
      potential: 0,
      ko:{
        R32: [],
        R16: [],
        QF: [],
        SF: [],
        F34: [],
        F: [],
      },
      ko_totals:{
        R32:  0,
        R16:  0,
        QF:   0,
        SF:   0,
        F34:  0,
        F:    0,
      },
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
    
    this.#calculate_knockout_points(entry, points, ko_games)
    
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

    points.grp_total += gp.total
    points.grp_potential += gp.potential


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
    
    if (this.#gs.group_stage_completed())  points.total += g3.points
    points.potential += g3.points
  }


  #calculate_knockout_points(entry, points, all_games)
  {
    if (!this.#kr) return
    
    this.#calculate_R32_points(entry, points, all_games)
    this.#calculate_R16_points(entry, points, all_games)
    this.#calculate_QF_points( entry, points, all_games)
    this.#calculate_SF_points( entry, points, all_games)
    this.#calculate_F34_points(entry, points, all_games)
    this.#calculate_F_points(  entry, points, all_games)
    
//    console.log("points",points)
    
  }
  
  #calculate_ko_points(ko_type, entry, points, all_games, pts_for_both, pts_for_winner, pts_for_loser)
  {
//    console.log(entry,ko_type,all_games)
    const predicted     = entry.knock_outs[ko_type]
    const real_matches  = all_games[ko_type].matches
    const real_winners  = all_games[ko_type].winners
    const real_losers   = all_games[ko_type].losers
    const not_lost_yet  = all_games[ko_type].not_lost_yet

    function game_matches(pred, real)
    {
//      console.log("pred", pred, "real", real)
      if ((pred.team1 == real.team1) && (pred.team2 == real.team2))  return true
      if ((pred.team1 == real.team2) && (pred.team2 == real.team1))  return true
      return false
    }

    if (!Array.isArray(predicted)) predicted = [predicted]
    
    predicted.forEach( pmatch => {
      let found_match = false;
      real_matches.forEach( rmatch => {
        found_match = found_match || game_matches(pmatch, rmatch)
      })
      let pts =
      { 
        both: found_match? pts_for_both : 0,
        winner: real_winners.includes( pmatch.winner)? pts_for_winner : 0,
        loser:  real_losers.includes(  pmatch.loser) ? pts_for_loser : 0,
        pwinner: not_lost_yet.includes(pmatch.winner)? pts_for_winner : 0,
        ploser: not_lost_yet.includes( pmatch.loser) ? pts_for_loser : 0,
      }
      let tpts = pts.both + pts.winner + pts.loser
      let ppts = tpts + pts.pwinner + pts.ploser
      points.ko[ko_type].push(pts)
      points.ko_totals[ko_type]+=tpts
      points.total += tpts
      points.potential += ppts
      points.ko_total += tpts
      points.ko_potential += ppts
    })
  }
  
//                                                                                                             x2   W   L
  #calculate_R32_points(entry, points, all_games) { this.#calculate_ko_points("R32", entry, points, all_games,  1,  2,  0);  }
  #calculate_R16_points(entry, points, all_games) { this.#calculate_ko_points("R16", entry, points, all_games,  1,  3,  0);  }
  #calculate_QF_points( entry, points, all_games) { this.#calculate_ko_points("QF",  entry, points, all_games,  2,  4,  0);  }
  #calculate_SF_points( entry, points, all_games) { this.#calculate_ko_points("SF",  entry, points, all_games,  4,  5,  0);  }
  #calculate_F34_points(entry, points, all_games) { this.#calculate_ko_points("SF",  entry, points, all_games,  5,  8,  5);  }
  #calculate_F_points(  entry, points, all_games) { this.#calculate_ko_points("SF",  entry, points, all_games, 10, 20, 10);  }




  constructor(entries, group_stage, knockout_results){
    this.#entries = entries
    this.#gs = group_stage
    this.#kr = knockout_results
    
    let ko_games = this.#kr ? this.#kr.get_bracket() : null

    
    this.#entries.forEach((entry, index) => {
      this.#calculate_entry_points(entry, index, ko_games)
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