const page_points_earned = new page( "points_earned", "How Points are Earned", "c3p0", 
`
    table.points {
      border-collapse: collapse; /* Removes default gaps between cells */
      font-family: sans-serif;
      line-height: 1.2;
      background-color: white;
      box-shadow: 2px 2px 4px black;
    }

  .points{
    max-width:1000px;



    td,th { vertical-align:top; padding:3px;}
    font-size:18px;
    color: var(--black);

    tr:nth-child(even) {  background-color: #f2f2f2;}
    tr:nth-child(odd) {  background-color: #ffffff;}
    th { background-color: #333; color: white; border-top:1px solid white;}
    
    .double { border-top:3px double silver; }
  }
`
, (db) =>
{
  function cell(text) { return td(text? text : "&nbsp;")} 
  function add_row(stage, reason, points, max_points) { return tr().add(cell(stage),cell(reason),cell(points),cell(max_points)); }
  function add_header(name)            { return tr().add(th(name).colspan(4)); }
  function add_total(pts)         { return tr().add(td("").colspan(3), td(pts).class("double")) }
  
  return div().add(
    p(),
    h1("How points are scored?"),
    p("This is a work in progress, but it will be something similar to this:"),
    p(),
    table().class("points").add(
      head(["Stage","Reason","Points","Max points"]),

      add_header("Group Phase"),
      add_row(""            ,"Picking a team in correct position"        , "1 pt"          ,"48 pts" ),
      add_row(""            ,"Picking a team to qualify"                 , "1 pt"          ,"32 pts" ),
      add_row(""            ,"Pick all 4 positions correctly"            , "1 pt per group","12 pts" ),
      add_row("Third place" ,"Picking 6 or 7  of the third place teams"  , "1 pt "         ,"10pts"  ),
      add_row(""            ,"Picking 8 or 9  of the third place teams"  , "2 pts"         ,""       ),
      add_row(""            ,"Picking 10      of the third place teams"  , "3 pts"         ,""       ),
      add_row(""            ,"Picking 11      of the third place teams"  , "4 pts"         ,""       ),
      add_row(""            ,"Picking all     of the third place teams"  , "5 pts"         ,""       ),
      add_row(""            ,"Picking 4    of the third place qualifiers", "1 pt "         ,""       ),
      add_row(""            ,"Picking 5    of the third place qualifiers", "2 pts"         ,""       ),
      add_row(""            ,"Picking 6    of the third place qualifiers", "3 pts"         ,""       ),
      add_row(""            ,"Picking 7    of the third place qualifiers", "4 pts"         ,""       ),
      add_row(""            ,"Picking all  of the third place qualifiers", "5 pts"         ,""       ),
      add_total(                                                                            "102 pts"),
      add_header("Knockouts"),
      add_row("Round of 32   ", "Picking both teams", "1 pt  per game", "16 pts"),
      add_row("              ", "Picking winner    ", "2 pts per game", "32 pts"),
      add_row("Round of 16   ", "Picking both teams", "1 pt  per game", "16 pts"),
      add_row("              ", "Picking winner    ", "3 pts per game", "24 pts"),
      add_row("Quarter-finals", "Picking both teams", "2 pts per game", "16 pts"),
      add_row("              ", "Picking winner    ", "4 pts per game", "16 pts"),
      add_row("Semi-finals   ", "Picking both teams", "4 pts per game", "8pts  "),
      add_row("              ", "Picking winner    ", "5 pts per game", "10 pts"),
      add_total(                                                        "138 pts"),
      add_header("Finals"),
      add_row("3rd place playoff","Picking both teams ","5 pts" , "5 pts "),
      add_row("4th place",        "Picking loser      ","5 pts ", "5 pts "),
      add_row("3rd place",        "Picking winner     ","8 pts ", "8 pts "),
      add_row("In Final ",        "Picking both teams ","10 pts", "10 pts"),
      add_row("2nd place",        "Picking loser      ","10 pts", "10 pts"),
      add_row("1st place",        "Picking winner     ","20 pts", "20 pts"),
      add_total("",                                                     "58 pts"),
      add_header("Bonus Points"),
      add_row("Most goals",       "in a games       "                       , "3 pts", "3 pts"),
      add_row(""          ,       "in the tournament"                       , "5 pts", "5 pts"),
      add_total(                                                         "8 pts"),
      tr().add(th("Total points").colspan(3), th("306 pts").class("double"))
    ),
    p("Which gives a max total of 306 points which isn't great, so I will be playing with the numbers soon.")
    
  )
  
})
