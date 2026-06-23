
class group_stage
{
  grp_ids = ["A","B","C","D","E","F","G","H","I","J","K","L"]
  #matches = []
  #group_tables = {}
  #COUNTRY

  #create_table(group_id)
  {
    console.log("create table", group_id)
    let matches = this.get_matches(group_id)
    let table = new points_table()
    this.#group_tables[group_id] = table
    
    // Add all the countries
    let teams = this.#COUNTRY.get_group_ids(group_id)
    //  console.log(teams)
    teams.forEach(t => {
      table.add_team(t.id,t.name,t.rank)
    })
  
//  console.log("matches", matches)
  
    matches.forEach(m => {
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
         
//       console.log("red card",r, cards1,cards2)
         
//       console.log("cards",m.cards, cards1, cards2)
         
         table.add_result(team1, goals1, team2, goals2, cards1, cards2)
      }
    })
  }

  #create_tables()
  {
    this.grp_ids.forEach(id => {
      this.#create_table(id)
    })
  }


  
  constructor(COUNTRY){
    this.#COUNTRY = COUNTRY
    add_matches(this)
    add_scores(this)
    this.#create_tables()
  }  
  
  
  add_match(match_no, stage, date, time, utc, location, team1, team2 )
  {
    let m = {}
    if (!stage.startsWith("Group")) return
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
  get_matches(group_id) {
    let group_matches = []
    this.#matches.forEach(m => {
      if (m.group_id == group_id)
        group_matches.push(m)
    })
    return group_matches
  }

  get_ranked_teams(group_id)
  {
    console.log("get ranked teams", group_id)
    let table = this.#group_tables[group_id]
    return table.get_ranked_teams()
  }


  get_group_table(group_id)
  {
    console.log("get group table", group_id)
    let table = this.#group_tables[group_id]
    return table.get_table_html()
  }  
  
}
