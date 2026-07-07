
class points_table
{
  #teams = []
  #third = false;
  #completed  = false;
  #confirmed = false;

  #results = []
  constructor(){  }
  
  #sorting = true
  
  #pad(n)
  {
    return String(n).padStart(3, '0');
  }
  
  
  #find_team_in_list(teams, team)
  {
//    console.log("find_team_in_list",teams,team)
    for (let i=0; i<teams.length;i++)
    {
      let t = teams[i]
//      console.log("fin in list",team,i,t)
      if ((t.abr == team) || (t.full == team))
        return t
    }
  }
  
  #find_team(team)
  {
    var t = this.#find_team_in_list(this.#teams,team)
//    if (!t) console.log("unknown team: ",team)
    return t
  }
  fix_cards(cards)
  {
    let c={y:0,yy:0,r:0,yr:0,pts:0}
    if(!cards) return c
    
    if (cards.hasOwnProperty("y"))   c.y   = cards.y
    if (cards.hasOwnProperty("yy"))  c.yy  = cards.yy
    if (cards.hasOwnProperty("r"))   c.r   = cards.r 
    if (cards.hasOwnProperty("yr"))  c.yr  = cards.yr
    if (cards.hasOwnProperty("pts")) c.pts = cards.pts 
    return c
  }
  

  #start_result(team)
  {
    let r = { ...team }
    r.pld=0
    r.pos=0
    r.sorted=""
    r.w=0
    r.l=0
    r.d=0
    r.ga=0
    r.gf=0
    r.gd=0
    r.pts=0
    r.h2h=""
    r.cs=0
//    console.log("start result",r)
    return r
  }
  
  #add_cards(team, cards)
  {
    let c = this.fix_cards(cards)
    let t = this.#find_team(team)
    if (!t) return;
//    console.log("add_cards", team, t, cards, c)
    t.cards.y  += c.y
    t.cards.yy += c.yy
    t.cards.r  += c.r
    t.cards.yr += c.yr
    t.cards.pts = 0 - (t.cards.y) - (t.cards.yy * 3) - (t.cards.r*4) - (t.cards.yr*5);
  }
  
  #find_results(teams)
  {
    if(!teams) teams = this.#teams
    let abr=[]
    teams.forEach(team => { abr.push(team.abr);})
//    console.log("search", teams,abr)
    var temp_results=[]
    this.#results.forEach(result =>{
//     console.log("team", result.team1, abr.includes(result.team1), result.team2, abr.includes(result.team2))
      if (abr.includes(result.team1) && abr.includes(result.team2))
         temp_results.push(result)
    })
    return temp_results
  }
  
  #score(pts,results)
  {
//    console.log("score",pts,results)
    function find(team){for(let i=0;i<pts.length;i++) if (pts[i].abr == team) return pts[i];}
    results.forEach(result =>{
      let t1 = find(result.team1)
      let t2 = find(result.team2)
//      console.log(result.team1+" vs "+result.team2, t1, t2)
      t1.gf += result.score[0]
      t2.gf += result.score[1]
      t1.ga += result.score[1]
      t2.ga += result.score[0]
      t1.gd = t1.gf - t1.ga
      t2.gd = t2.gf - t2.ga
      t1.pld++
      t2.pld++
      
      if (result.score[0] == 0) t2.cs++
      if (result.score[1] == 0) t1.cs++
      
      // In case it went to penalties, we use the ko score to workout winner.
      if (result.score_ko[0] > result.score_ko[1])
      {
        t1.w++
        t2.l++
        t1.pts+=3
      }
      else if (result.score_ko[1] > result.score_ko[0])
      {
        t2.w++
        t1.l++
        t2.pts+=3
      }
      else
      {
        t1.d++
        t2.d++
        t1.pts++
        t2.pts++
      }
    })
    
    pts.forEach(team =>{
      team.sorted = this.#pad(team.pts)+this.#pad(team.gd+500)+this.#pad(team.gf);
    })
    pts[0].pos = 1
//    pts[0].tied = (pts[0].sorted == pts[1].sorted)
    for(let i=1; i < pts.length; i++)
    {
      pts[i].tied = (pts[i].sorted == pts[i-1].sorted)
      if (pts[i].tied)
      {
        pts[i].pos = pts[i-1].pos
        pts[i-1].tied = true;
      }
      else
        pts[i].pos = i+1
    }
    pts.sort()
  }
  

  #simple_table(teams)
  {
    if (!teams) teams = this.#teams
//    console.log("simple_teams",teams)
    let pts=[]
    teams.forEach(t => pts.push(this.#start_result(t)))
//    console.log("pts",pts)
    let results = this.#find_results(pts)
//    console.log("results",results)
    this.#score(pts,results)
    
//    console.log("table",pts)    
    return pts
  }
  
  
  
//  Tie-breaking criteria for World Cup groups

//If two or more teams in the same group are equal on points after the completion of the group stage, the following criteria, in the order below, shall be applied to determine the ranking:

//Step one

// greatest number of points obtained in the group matches between the teams concerned
// superior goal difference resulting from the group matches between the teams concerned
// greatest number of goals scored in all group matches between the teams concerned
// If no decision can be made through this procedure, the criteria below shall apply as follows to the two or more teams still equal on points:

// Step two
// superior goal difference in all group matches
// greatest number of goals scored in all group matches
// highest team conduct score (players and team officials) relating to the number of yellow and red cards obtained
// If no decision can be made through the procedures of step one and two above, the following shall apply:

//Step three
// the two or more teams still equal on points shall be ranked according to the most recent published edition of the FIFA/Coca‑Cola Men’s World Ranking
  
  
  
  
  //1. check for all teams with same points
  //2. any with same points, do head 2 head
  //3.   check pts, GD GA
  //4    if and match do again
  
  #sort()
  {
    let tied = false;
    // Sort using the sorted String
    this.#teams.sort((a,b) => b.sorted.localeCompare(a.sorted));
    this.#teams[0].pos = 1
    this.#teams[0].tied = false
    for(let i=1; i < this.#teams.length; i++)
    {
      this.#teams[i].tied = this.#teams[i].sorted == this.#teams[i-1].sorted;
      if (this.#teams[i].tied)
      {
        this.#teams[i].pos = this.#teams[i-1].pos
        this.#teams[i-1].tied = true;
        tied = true
      }
      else
        this.#teams[i].pos = i+1
    }
    
//    console.log("sorted",tied, this.#teams)
    
    return tied
  }

  #load_basic_table()
  {
    let pts = this.#simple_table()
    pts.forEach(t => {
      let team = this.#find_team(t.abr)
      team.pos     = t.pos   
      team.sorted  = t.sorted
      team.pld     = t.pld
      team.w       = t.w     
      team.l       = t.l     
      team.d       = t.d     
      team.ga      = t.ga    
      team.gf      = t.gf    
      team.gd      = t.gd    
      team.cs      = t.cs
      team.pts     = t.pts   
    })
    
//    console.log("load_basic_table",this.#teams)
    
  }
 
  #get_sorted_partitions()
  {
    // Split the table up into those with the same sorted value
    let last_sorted=""
    let p_index = -1
    let parts=[]
    this.#teams.forEach(team => {
      if (team.sorted != last_sorted)
      {
        last_sorted = team.sorted;
        p_index++;
        parts[p_index] = []
      }
      parts[p_index].push(team)
    })
    return parts
  }
 
 
  
  // Step 0, sort by points first
  #sort_teams_by_points()
  {
    this.#teams.forEach(t => { t.sorted = this.#pad(t.pts) })
    return this.#sort()
  }

  #sort_by_h2h()
  {
//    console.log("sort by h2h")
    let parts = this.#get_sorted_partitions()
//    console.log("h2h sorted partitions", parts, parts.length)
    parts.forEach(p => {
      if(p.length == 1)
      {
        // no head 2 head needed now
      }
      else
      {
        // sort the partition only results using the old day simple rules
        var simple = this.#simple_table(p)
//        console.log("simple",simple)
        simple.forEach(t2 => {
//          console.log("t2",t2)
          let team = this.#find_team(t2.abr)
//          console.log(team)
          team.h2h = [t2.pts,t2.gd,t2.gf]
//        team.h2h = t2.sorted
          team.sorted = team.sorted  + "."+ t2.sorted
        })
      }
    })
    return this.#sort()
  }

  #sort_by_full()
  {
//    console.log("sort by full")
    // Get the full table of all teams
    var full = this.#simple_table()
    full.forEach(t2 => {
//      console.log("t2",t2)
      let team = this.#find_team(t2.abr)
      team.sorted = team.sorted + "."+ t2.sorted
    })
    return this.#sort()
  }

  #sort_by_cards()
  {
//    console.log("sort by full")
    this.#teams.forEach(t =>
    {
      t.sorted = t.sorted + "."+this.#pad(999+t.cards.pts)
    })
    return this.#sort()
  }
  #sort_by_rank()
  {
//    console.log("sort by rank")
    this.#teams.forEach(t =>
    {
      t.sorted = t.sorted + "." + this.#pad(999-t.rank)
    })
    return this.#sort()
  }

  #get_html()
  {
    this.sort_table()
    let pts = this.#teams
//    console.log("get html",pts)
// console.log("third", pts[2].abr, this.#third, this.#completed, this.#confirmed)
    
    var html=[]
    html.push("<table><tr><th rowspan=2>Pos<th rowspan=2>Qual<th rowspan=2 colspan=3>Team<th rowspan=2>Pld<th rowspan=2>W<th rowspan=2>D<th rowspan=2>L<th rowspan=2>GF<th rowspan=2>GA<th rowspan=2>GD<th rowspan=2>Pts<th colspan=5>Fair_Play<th>World<th colspan=3>Head_to_Head") //<th rowspan=2>blah")
    html.push("<tr><th>Y<th>YY&gt;R<th>R<th>YR<th>pts<th>Rank<th>PTS<th>GD<th>GF")
    pts.forEach((team,index) =>{
      let qs = this.get_qualified_status(team.abr)
      let q = (qs.qualified?"yes":"no")+(qs.confirmed?"":"**")

      html.push("<tr>")
      html.push("<td>"+team.pos+((team.tied)?"**":""))
      html.push("<td>"+q)
      html.push("<td class='flag_"+team.abr+"'>")
      html.push("<td>"+team.full)
      html.push("<td>("+team.abr+")")
      html.push("<td>"+team.pld)
      html.push("<td>"+team.w)
      html.push("<td>"+team.d)
      html.push("<td>"+team.l)
      html.push("<td>"+team.gf)
      html.push("<td>"+team.ga)
      html.push("<td>"+team.gd)
      html.push("<td>"+team.pts)
      html.push("<td>"+team.cards.y)
      html.push("<td>"+team.cards.yy)
      html.push("<td>"+team.cards.r)
      html.push("<td>"+team.cards.yr)
      html.push("<td>"+team.cards.pts)
      html.push("<td>"+team.rank)
      if (team.h2h)
      {
        html.push("<td>"+team.h2h.join("<td>"))
        
      }
      else
      {
        html.push("<td>---<td>---<td>---")
      }
//      html.push("<td>"+team.sorted)
    })
    html.push("</table>")
    return html.join("")
  }

  
  add_team(abr,full,rank)
  {
    let team = {abr:abr, full:full, rank:rank, cards:this.fix_cards()}
    this.#teams.push(team)
//    console.log("add team",team)
    this.#sorting = true
  }
  
  //cards has format {y:0, yy:0, r:0, yr:0}
  add_result(team1,g1,team2,g2,cards1,cards2)
  {
//    console.log(team1,"vs",team2)
    let t1 = this.#find_team(team1).abr
    let t2 = this.#find_team(team2).abr
     
//    console.log("add_result","team1",t1,g1,"team2",t2,g2,"cards1",cards1,"cards2",cards2)
    let result = {team1:t1, team2:t2, score:[g1,g2], score_ko:[g1,g2], cards:[cards1,cards2]}
    this.#add_cards(t1, cards1)
    this.#add_cards(t2, cards2)
    this.#results.push(result)
//    console.log("results", this.#results)

    this.#sorting = true
  }
  add_ko_result(team1,g1,k1,team2,g2,k2,cards1,cards2)
  {
//    console.log(team1,"vs",team2)
    console.log("add_ko_result",team1,g1,k1,team2,g2,k2,cards1,cards2)
    let t1 = this.#find_team(team1).abr
    let t2 = this.#find_team(team2).abr
     
    console.log("add_result","team1",t1,g1,"team2",t2,g2,"cards1",cards1,"cards2",cards2)
    let result = {team1:t1, team2:t2, score:[g1,g2], score_ko:[k1,k2], cards:[cards1,cards2]}
    this.#add_cards(t1, cards1)
    this.#add_cards(t2, cards2)
    this.#results.push(result)
//    console.log("results", this.#results)

    this.#sorting = true
  }


  sort_table()
  {
    if (!this.#sorting) return;
    
    this.#load_basic_table()
    let tied = this.#sort_teams_by_points()
    if (tied) tied = this.#sort_by_h2h()
    if (tied) tied = this.#sort_by_full()
    if (tied) tied = this.#sort_by_cards()
    if (tied) tied = this.#sort_by_rank()
    this.#sorting = false;
  }
  
  

  display_table(obj)
  {
    document.getElementById(obj).innerHTML = this.#get_html()
  }
  get_table_html()
  {
    return this.#get_html()
  }

  get_ranked_teams()
  {
    this.sort_table()
    return [...this.#teams]
  }

  set_matches_completed()
  {
    this.#completed = true;
  }
  is_completed()
  {
    return this.#completed
  }    
  set_group_stage_completed()
  {
      this.#confirmed = true;
  }

  third_qualified()  
  {
    this.#third = true;
  }
  
  get_qualified_status(team_id)
  {
    let t = this.#find_team(team_id)
    let q = { qualified: false, confirmed: false, pos: t.pos }
    switch (q.pos)
    {
      case 1:
      case 2:
      {
        q.qualified = true
        q.confirmed = this.#completed
        break;
      }
      case 3:
      {
        q.qualified = this.#third;
        q.confirmed = this.#confirmed
        break;
      }
      default:
      {
        q.qualified = false
        q.confirmed = this.#completed;
      }
    }
//    console.log("qual",q, this.#third, this.#completed, this.#confirmed)

    return q
  }
}
