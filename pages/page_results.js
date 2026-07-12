const page_results = new page( "results", "Results", "r2d2", 
`
.results {
  margin-left:20px;
  padding:5px;
  background: var(--paper);
  color: var(--black);
  border-collapse: collapse;
  box-shadow: 2px 2px 2px 4px RGBA(0,0,0,0.4);
  
  th {
    border: 1px solid var(--grey);
    padding: 8px; 
    background: var(--black);
    color: var(--sand);
  }
  
  td { padding-left:10px; 
    border: 1px solid var(--grey);   /* Gives cells a visible border */
    padding: 4px; 
  }

  tr:nth-child(even) td {
    background-color: #dde; /* A very soft, subtle grey */
  }

}

  h2 { background-color:#111; padding: 10px;}
  h3 { color: white; }

  li { padding-left:20px; list-style: none;  padding-left: 1.5em; /* Create space for the icon */}
  li::before {
    content: "\\26BD"; font-size:10px;
    padding-right:5px;
  }
.contents {
  th {
    border: 1px solid var(--grey);
    padding: 8px; 
    background: var(--black);
    color: var(--sand);
    border-bottom: 3px solid #e5b32b;
  }
  td {
     padding:3px;
  }
`
, (db) =>
{
  function add_row(file, title, notes) { return tr().add(td().add(pages.get_page_link(file, title)), td().add(li(notes))); }
  function add_header(name)            { return tr().add(th(name).colspan(3)); }
  
  return div().add(p("The group stages is complete. I can now start handing out some points.  See how you are going below."),
  table().class("contents").add(
    add_header("Yoda's Competition points"),
    add_row("results", "This page"         ,"see who is leading the competition"),
    add_row("competition_points_summary.html"  , "Competition points summary"         ,"see who is leading the competition"),
    add_row("Knockout_points.html"             , "Knock-out Points summary"           ,"see how you are getting points in each stage of the knock-outs"),
    add_row("Knockout_stage_mini_leagues.html" , "Knock-out Stage Mini-league points" ,"see how you are doing in the mini-leagues, at the knock-out stage"),
    add_row("Group_Stage_points_summary.html"  , "Group stage points summary"         ,"see how you scored points in the group stage"),
    add_row("Group_stage_mini_leagues.html"    , "Group Stage Mini-league points"     ,"see how you are did in the mini-leagues, at the group stage"),
    add_row("Entry_summary.html"               , "Entry Summary"                      ,"see who has entered, where they have come from, most popular choices, and the mini-leagues"),
    add_row("points_earned"                    , "Points Earned"                      ,"see how you earn points in the competition"),             
    add_header("World Cup Matches and tables"),
    add_row("Knockout_stage.html"              , "Knock-out stage Summary"            ,"see the results from the knockout stage in the world cup."),
    add_row("Group_stage.html"                 , "Group stage Summary"                ,"see the results from the group stages and the current standings in the world cup."),
    add_row("Stats_Overall.html"               , "Overall statistics"                 ,"see who was the best overall team, most pts, best attach, best defence, least cards."),
    add_row("Stats_group_stage.html"           , "Group stage statistics"             ,"see who was the best team after the group stage, most pts, best attach, best defence, least cards."),
    add_row("Third_place_qualifiers.html"      , "Third Place Qualifiers"             ,"see which of the 12 coutries in 3 place are currently qualifying for the next round.")
  ))
})
