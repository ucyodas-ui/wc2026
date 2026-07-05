
class match_stats
{
  #matches = []
  #COUNTRY
  #RESULTS
  #table
  #group_stage_table

  #qualified = {}


 
  constructor(COUNTRY, RESULTS){
    this.#COUNTRY = COUNTRY
    this.#RESULTS = RESULTS

    add_matches(this)
    
    this.#fixTeams()
    
    add_scores(this)
    
    this.#create_tables()
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
         let goals1 = m.result.t1
         let goals2 = m.result.t2
         
         let y  = get_y(  m.cards)
         let yy = get_yy( m.cards)
         let r  = get_r(  m.cards)
         let ry = get_yr( m.cards)
         
         
         let cards1 = {y:y.t1, yy:yy.t1, r:r.t1, ry:ry.t1}
         let cards2 = {y:y.t2, yy:yy.t2, r:r.t2, ry:ry.t2}
         
         this.#table.add_result(team1, goals1, team2, goals2, cards1, cards2)
//         console.log(m.stage)
         if (m.stage.startsWith("Group "))
           this.#group_stage_table.add_result(team1, goals1, team2, goals2, cards1, cards2)
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
    let full = get_full(result)
//    console.log("add_score", match_no, result, cards, full)
    if (full.ok)
    {
      this.#matches[match_no].result = full
      this.#matches[match_no].cards = cards
    }
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
    return this.#table.get_ranked_teams()
  }
  
  
}
