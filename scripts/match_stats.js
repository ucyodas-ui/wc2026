
class match_stats
{
  #matches = []
  #COUNTRY
  #RESULTS
  #table
  #group_stage_table
  #gs

  #qualified = {}
  #team_stages = {}

  #most_goals = { match_goals:0, match_countries:[], tournament_goals:0, tournament_countries:[]}

 
  constructor(COUNTRY, RESULTS, gs){
    this.#COUNTRY = COUNTRY
    this.#RESULTS = RESULTS
    this.#gs = gs

    add_matches(this)
    
    this.#fixTeams()
    
    add_scores(this)
    
    
    this.#create_tables()
    
    this.#workout_most_goals()
    
//    this.#check_completed()
//    this.#set_qualifiers()
//    this.#check_third_qualifiers()

  }  
  
  #fixTeams()
  {
    // Use results to fix the names for all knock out teams
    this.#matches.forEach((match) => {
      if (!match.is_group)
      {
        match.team1 = this.#RESULTS.get_knockout_team1(match.match_no)
        match.team2 = this.#RESULTS.get_knockout_team2(match.match_no)
      }
    })
  }
  

  #create_tables()
  {
    this.#table = new points_table()
    this.#group_stage_table = new points_table()

//    console.log("create table", group_id)
    
    // Add all the countries
    let teams = this.#COUNTRY.get_all_ids()
    teams.forEach(t => {
//      console.log("add_team", t)
      this.#table.add_team(t.id,t.name,t.rank)
      this.#group_stage_table.add_team(t.id,t.name,t.rank)
    })
  
//  console.log("matches", matches)

    this.#matches.forEach(m => {
//    console.log("match", m)
      if (m.result.ok)
      {
         let team1 = m.team1
         let team2 = m.team2
         let g1 = m.result.f[0]
         let g2 = m.result.f[1]
         
         let y  = get_y(  m.cards)
         let yy = get_yy( m.cards)
         let r  = get_r(  m.cards)
         let ry = get_yr( m.cards)
         
         
         let cards1 = {y:y.t1, yy:yy.t1, r:r.t1, ry:ry.t1}
         let cards2 = {y:y.t2, yy:yy.t2, r:r.t2, ry:ry.t2}
         
         console.log(m.stage, m, team1, team2)
         if (m.stage.startsWith("Group "))
         {
           this.#table.add_result(team1, g1, team2, g2, cards1, cards2)
           this.#group_stage_table.add_result(team1, g1, team2, g2, cards1, cards2)
         }
         else
         {
            console.log(team1, team2, m.result.e, m.result.e.length,(m.result.e.length>=2))
            
            if (m.result.e.length>=2)
            {
              g1 = m.result.e[0]
              g2 = m.result.e[1]
            }
            console.log(team1, team2, g1, g2)
            let k1 = g1
            let k2 = g2

            if (m.result.p.length>=2)
            {
              k1 = m.result.p[0]
              k2 = m.result.p[1]
            }
            this.#table.add_ko_result(team1, g1,k1, team2, g2,k2, cards1, cards2)
         }
      }
    })
  }

  
  add_match(match_no, stage, date, time, utc, location, team1, team2 )
  {
    let m = {}
    this.#matches[match_no] = m
    m.match_no  = match_no
    m.stage     = stage
    m.date      = date 
    m.time      = time 
    m.utc       = utc 
    m.location  = location
    m.team1     = team1
    m.team2     = team2
    m.result    = {ok:false}
    m.cards     = 0
    m.group_id  = m.stage.slice(6)
    m.is_group  = stage.startsWith("Group")
  }
  
  add_score( match_no, result, cards)
  {
//    console.log("add_score", match_no, result, cards)
    if (result.f && result.f.length>=2)
    {
      this.#matches[match_no].result = {...result, ok:true}
    }
    else
    {
      this.#matches[match_no].result = { ok:false }
    }
    this.#matches[match_no].cards = cards

    this.#check_most_game_goals(match_no)
    
    console.log("add_score", match_no, this.#matches[match_no].result, this.#matches[match_no].cards)
  }
  
  
  
//  get_group_games_html(group_id)
//  {
//    let matches = this.get_matches(group_id)
//    let html = []
//    html.push("<table>")
//
//    matches.forEach(m => {
////      console.log(m)
//      html.push("<tr><td>#"+m.match_no)
//      html.push("<td>"+m.date)
//      html.push("<td>"+m.time)
//      html.push("<td>"+m.location)
//      html.push("<td>"+m.team1)
////      console.log(m.result)
//      html.push("<td>"+(m.result.ok ? m.result.t1:"--"))
//      html.push("<td>"+(m.result.ok ? m.result.t2:"--"))
//      html.push("<td>"+m.team2)
////      html.push("<td>"+m.cards     = 0
//        
//        
//    })
// 
//    html.push("</table>")
//    return html.join("")
//    
//  }
//  
//
//  third_place = []
//
//  get_third_place_ranks()
//  {
//    this.third_place = []
//    
//    this.grp_ids.forEach(id => {
//      let group_teams = this.get_ranked_teams(id)
//      this.third_place.push({grp:id,data:group_teams[2]})
//    })
////    console.log("third_place",this.third_place)
//    
//    this.third_place.sort((b,a) => {
//    
////      console.log("sort",a.data.abr,"p",a.data.pts,"gd",a.data.gd,"gf",a.data.gf,"c",a.data.cards.pts, "vs", b.data.abr,"p",b.data.pts,"gd",b.data.gd,"gf",b.data.gf,"c",b.data.cards.pts)       
//    
//      if (a.data.pts != b.data.pts) return (a.data.pts - b.data.pts);
//      if (a.data.gd  != b.data.gd)  return (a.data.gd  - b.data.gd);
//      if (a.data.gf  != b.data.gf)  return (a.data.gf  - b.data.gf);
//      if (a.data.cards.pts != b.data.cards.pts) return (a.data.cards.pts - b.data.cards.pts)
//      return b.rank - a.rank
//    })
//
//    return this.third_place
//  }
//
//  
//  get_qualified_status(team_id)
//  {
//    let group_id = this.#team_group[team_id]
//    let table = this.#group_tables[group_id]
////    console.log("get qs", team_id, group_id, table)
//    return table.get_qualified_status(team_id) 
//  }
//
//  group_stage_completed()
//  {
//    return this.#group_stage_completed
//  }
//  
//  has_qualified(team_id)
//  {
//    // Check if first or 2nd in group, or 3rd and in top 8.
//    return this.#qualified[team_id]
//  }
  
  get_table() {
    this.#calculate_stage()

    let table = [...this.#table.get_ranked_teams()]

    return table
  }
  
  #calculate_stage()
  {
    if (Object.keys(this.#team_stages).length > 0) return;
    
    let table = this.#table.get_ranked_teams()
    
    table.forEach( team => {
//      console.log("team",team)
      let team_id = team.abr
      this.#team_stages[team_id] = { id:team_id, alive:this.#gs.has_qualified(team_id), stage:"G" }
    })

    console.log("team_stages", this.#team_stages)
    
    // go through each knock out group and get loser / winner
    this.#matches.forEach(m => {
      if (!m.is_group)
      {
        let stage = m.stage.toLowerCase()
        if      (stage.includes("32")) stage = "R32";
        else if (stage.includes("16")) stage = "R16";
        else if (stage.includes("quarter")) stage = "QF";
        else if (stage.includes("semi")) stage = "SF"
        else if (stage.includes("third")) stage = "F34"
        else if (stage.includes("final")) stage = "F"
//        console.log(m, stage)
        if (m.team1 != "TBD") this.#team_stages[m.team1].stage = stage
        if (m.team2 != "TBD") this.#team_stages[m.team2].stage = stage
        if (m.result.ok)
        {
          let loser = ""
//          console.log(m.result)
          if (m.result.f[0] != m.result.f[1])
            loser =  (m.result.f[0] < m.result.f[1]) ? m.team1 : m.team2
          else if (m.result.e[0] != m.result.e[1])
            loser = (m.result.e[0] < m.result.e[1]) ? m.team1 : m.team2
          else
            loser = (m.result.p[0] < m.result.p[1]) ? m.team1 : m.team2
          this.#team_stages[loser].alive = false;
        }
      }
    })
    table.forEach( team => {
      team.alive = this.#team_stages[team.abr].alive
      team.stage = this.#team_stages[team.abr].stage
    })
    
  }
  
  #workout_most_goals()
  {
    let table = this.get_table()
    table.forEach(team => {
      let gf = team.gf;
      if (gf == this.#most_goals.tournament_goals) { this.#most_goals.tournament_countries.push(team.abr) }
      if (gf >  this.#most_goals.tournament_goals) { this.#most_goals.tournament_countries = [team.abr]; this.#most_goals.tournament_goals = gf;}
    })
    console.log("workout_most_goals", this.#most_goals)
  }

  
  #check_most_game_goals(match_no)
  {
    let m = this.#matches[match_no]
    console.log("check_most_game_goals",match_no,m)
    if (!m.result.ok) return;
    let g = m.result.f
    if (m.result.e.length>=2)
      g = m.result.e
    let t1 = this.#COUNTRY.find_team_id(m.team1)
    let t2 = this.#COUNTRY.find_team_id(m.team2)

    if (g[0] == this.#most_goals.match_goals) { this.#most_goals.match_countries.push(t1) }
    if (g[0] > this.#most_goals.match_goals)  { this.#most_goals.match_countries = [t1]; this.#most_goals.match_goals = g[0];}
    if (g[1] == this.#most_goals.match_goals) { this.#most_goals.match_countries.push(t2) }
    if (g[1] > this.#most_goals.match_goals)  { this.#most_goals.match_countries = [t2]; this.#most_goals.match_goals = g[1];}
  }

  get_most_goals()
  {
    return this.#most_goals
  }
  
  
}
