// callback draw.add_score( match_no, result, cards)
// in result f=full_time_score, e=extra_time_score, p=penalties score
// in cards, y = yellow, yy=indirect red card(i.e. 2 yellows), r = direct red card, yr= yellow+direct red card

// Helper functions
function has_value(result,id)
{
  if (!result) return false
   if (!result.hasOwnProperty(id)) return false
   if (!Array.isArray(result[id])) return false
   return (result[id].length == 2)
}
function get_result(result,id)
{
  let r = {ok:false, t1:0, t2:0}
  if (has_value(result,id)) r = {  ok:true, t1:result[id][0], t2:result[id][1] }
//  console.log("get_result",id," << ", result," >> ", r)
  return r
}

function get_full(      result) { return get_result(result,"f");  }
function get_extra(     result) { return get_result(result,"e");  }
function get_penalties( result) { return get_result(result,"p");  }
function get_y(          cards) { return get_result(cards, "y");  }
function get_yy(         cards) { return get_result(cards, "yy"); }
function get_r(          cards) { return get_result(cards, "r");  }
function get_yr(         cards) { return get_result(cards, "yr"); }


function add_scores(draw)
{
  //                 
  draw.add_score(  1, {f:[2,0],e:[   ],p:[   ]},{y:[1,2],yy:[   ],r:[1,2],yr:[   ]}) // "Group A"              "Mexico", "South Africa"  );
  draw.add_score(  2, {f:[2,1],e:[   ],p:[   ]},{y:[1,0],yy:[   ],r:[   ],yr:[   ]}) // "Group A"        Korea Republic", "Czech Republic" );
  draw.add_score( 25, {f:[1,1],e:[   ],p:[   ]},{y:[1,2],yy:[   ],r:[   ],yr:[   ]}) // "Group A"        Czech Republic", "South Africa"  );
  draw.add_score( 28, {f:[1,0],e:[   ],p:[   ]},{y:[0,2],yy:[   ],r:[   ],yr:[   ]}) // "Group A"              "Mexico", "Korea Republic" );
  draw.add_score( 53, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group A"        Czech Republic", "Mexico"        );
  draw.add_score( 54, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group A"        "South Africa", "Korea Republic" );
  draw.add_score(  3, {f:[1,1],e:[   ],p:[   ]},{y:[2,3],yy:[   ],r:[   ],yr:[   ]}) // "Group B"              "Canada", "Bosnia-Herzegovina" );
  draw.add_score(  8, {f:[1,2],e:[   ],p:[   ]},{y:[2,1],yy:[   ],r:[   ],yr:[   ]}) // "Group B"               "Qatar", "Switzerland"   );
  draw.add_score( 26, {f:[4,1],e:[   ],p:[   ]},{y:[1,2],yy:[   ],r:[0,1],yr:[   ]}) // "Group B"         "Switzerland", "Bosnia-Herzegovina" );
  draw.add_score( 27, {f:[6,0],e:[   ],p:[   ]},{y:[1,1],yy:[   ],r:[0,2],yr:[   ]}) // "Group B"              "Canada", "Qatar"         );
  draw.add_score( 51, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group B"         "Switzerland", "Canada"        );
  draw.add_score( 52, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group B"        Bosnia-Herzegovina", "Qatar"         );
  draw.add_score(  7, {f:[1,1],e:[   ],p:[   ]},{y:[2,0],yy:[   ],r:[   ],yr:[   ]}) // "Group C"              "Brazil", "Morocco"       );
  draw.add_score(  5, {f:[0,1],e:[   ],p:[   ]},{y:[1,3],yy:[   ],r:[   ],yr:[   ]}) // "Group C"               "Haiti", "Scotland"      );
  draw.add_score( 30, {f:[0,1],e:[   ],p:[   ]},{y:[1,1],yy:[   ],r:[   ],yr:[   ]}) // "Group C"            "Scotland", "Morocco"       );
  draw.add_score( 29, {f:[3,0],e:[   ],p:[   ]},{y:[1,3],yy:[   ],r:[   ],yr:[   ]}) // "Group C"              "Brazil", "Haiti"         );
  draw.add_score( 49, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group C"            "Scotland", "Brazil"        );
  draw.add_score( 50, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group C"             "Morocco", "Haiti"         );
  draw.add_score(  4, {f:[4,1],e:[   ],p:[   ]},{y:[1,5],yy:[   ],r:[   ],yr:[   ]}) // "Group D"        United States", "Paraguay"      );
  draw.add_score(  6, {f:[2,0],e:[   ],p:[   ]},{y:[0,1],yy:[   ],r:[   ],yr:[   ]}) // "Group D"           "Australia", "Turkey"        );
  draw.add_score( 32, {f:[2,0],e:[   ],p:[   ]},{y:[3,4],yy:[   ],r:[   ],yr:[   ]}) // "Group D"        United States", "Australia"     );
  draw.add_score( 31, {f:[0,1],e:[   ],p:[   ]},{y:[2,1],yy:[   ],r:[0,1],yr:[   ]}) // "Group D"              "Turkey", "Paraguay"      );
  draw.add_score( 59, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group D"              "Turkey", "United States" );
  draw.add_score( 60, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group D"            "Paraguay", "Australia"     );
  draw.add_score( 10, {f:[7,1],e:[   ],p:[   ]},{y:[0,0],yy:[   ],r:[   ],yr:[   ]}) // "Group E"             "Germany", "Curacao"       );
  draw.add_score(  9, {f:[1,0],e:[   ],p:[   ]},{y:[3,1],yy:[   ],r:[   ],yr:[   ]}) // "Group E"         "Ivory Coast", "Ecuador"       );
  draw.add_score( 33, {f:[2,1],e:[   ],p:[   ]},{y:[0,0],yy:[   ],r:[   ],yr:[   ]}) // "Group E"             "Germany", "Ivory Coast"   );
  draw.add_score( 34, {f:[0,0],e:[   ],p:[   ]},{y:[1,5],yy:[   ],r:[   ],yr:[   ]}) // "Group E"             "Ecuador", "Curacao"       );
  draw.add_score( 55, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group E"             "Curacao", "Ivory Coast"   );
  draw.add_score( 56, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group E"             "Ecuador", "Germany"       );
  draw.add_score( 11, {f:[2,2],e:[   ],p:[   ]},{y:[3,0],yy:[   ],r:[   ],yr:[   ]}) // "Group F"         "Netherlands", "Japan"         );
  draw.add_score( 12, {f:[5,1],e:[   ],p:[   ]},{y:[0,1],yy:[   ],r:[   ],yr:[   ]}) // "Group F"              "Sweden", "Tunisia"       );
  draw.add_score( 35, {f:[5,1],e:[   ],p:[   ]},{y:[0,3],yy:[   ],r:[   ],yr:[   ]}) // "Group F"         "Netherlands", "Sweden"        );
  draw.add_score( 36, {f:[0,4],e:[   ],p:[   ]},{y:[0,0],yy:[   ],r:[   ],yr:[   ]}) // "Group F"             "Tunisia", "Japan"         );
  draw.add_score( 57, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group F"               "Japan", "Sweden"        );
  draw.add_score( 58, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group F"             "Tunisia", "Netherlands"   );
  draw.add_score( 16, {f:[1,1],e:[   ],p:[   ]},{y:[2,2],yy:[   ],r:[   ],yr:[   ]}) // "Group G"             "Belgium", "Egypt"         );
  draw.add_score( 15, {f:[2,2],e:[   ],p:[   ]},{y:[1,0],yy:[   ],r:[   ],yr:[   ]}) // "Group G"                "Iran", "New Zealand"   );
  draw.add_score( 39, {f:[0,0],e:[   ],p:[   ]},{y:[1,1],yy:[   ],r:[1,0],yr:[   ]}) // "Group G"             "Belgium", "Iran"          );
  draw.add_score( 40, {f:[1,3],e:[   ],p:[   ]},{y:[2,1],yy:[   ],r:[   ],yr:[   ]}) // "Group G"         "New Zealand", "Egypt"         );
  draw.add_score( 63, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group G"               "Egypt", "Iran"          );
  draw.add_score( 64, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group G"         "New Zealand", "Belgium"       );
  draw.add_score( 14, {f:[0,0],e:[   ],p:[   ]},{y:[1,1],yy:[   ],r:[   ],yr:[   ]}) // "Group H"               "Spain", "Cape Verde"    );
  draw.add_score( 13, {f:[1,1],e:[   ],p:[   ]},{y:[1,0],yy:[   ],r:[   ],yr:[   ]}) // "Group H"        "Saudi Arabia", "Uruguay"       );
  draw.add_score( 38, {f:[4,0],e:[   ],p:[   ]},{y:[0,2],yy:[   ],r:[   ],yr:[   ]}) // "Group H"               "Spain", "Saudi Arabia"  );
  draw.add_score( 37, {f:[2,2],e:[   ],p:[   ]},{y:[2,2],yy:[   ],r:[   ],yr:[   ]}) // "Group H"             "Uruguay", "Cape Verde"    );
  draw.add_score( 65, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group H"          "Cape Verde", "Saudi Arabia"  );
  draw.add_score( 66, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group H"             "Uruguay", "Spain"         );
  draw.add_score( 17, {f:[3,1],e:[   ],p:[   ]},{y:[0,0],yy:[   ],r:[   ],yr:[   ]}) // "Group I"              "France", "Senegal"       );
  draw.add_score( 18, {f:[1,4],e:[   ],p:[   ]},{y:[1,0],yy:[   ],r:[   ],yr:[   ]}) // "Group I"                "Iraq", "Norway"        );
  draw.add_score( 42, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group I"              "France", "Iraq"          );
  draw.add_score( 41, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group I"              "Norway", "Senegal"       );
  draw.add_score( 61, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group I"              "Norway", "France"        );
  draw.add_score( 62, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group I"             "Senegal", "Iraq"          );
  draw.add_score( 19, {f:[3,0],e:[   ],p:[   ]},{y:[0,0],yy:[   ],r:[   ],yr:[   ]}) // "Group J"           "Argentina", "Algeria"       );
  draw.add_score( 20, {f:[3,1],e:[   ],p:[   ]},{y:[1,0],yy:[   ],r:[   ],yr:[   ]}) // "Group J"             "Austria", "Jordan"        );
  draw.add_score( 43, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group J"           "Argentina", "Austria"       );
  draw.add_score( 44, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group J"              "Jordan", "Algeria"       );
  draw.add_score( 69, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group J"             "Algeria", "Austria"       );
  draw.add_score( 70, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group J"              "Jordan", "Argentina"     );
  draw.add_score( 23, {f:[1,1],e:[   ],p:[   ]},{y:[3,1],yy:[   ],r:[   ],yr:[   ]}) // "Group K"            "Portugal", "Congo DR"      );
  draw.add_score( 24, {f:[1,3],e:[   ],p:[   ]},{y:[1,1],yy:[   ],r:[   ],yr:[   ]}) // "Group K"          "Uzbekistan", "Colombia"      );
  draw.add_score( 47, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group K"            "Portugal", "Uzbekistan"    );
  draw.add_score( 48, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group K"            "Colombia", "Congo DR"      );
  draw.add_score( 71, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group K"            "Colombia", "Portugal"      );
  draw.add_score( 72, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group K"            "Congo DR", "Uzbekistan"    );
  draw.add_score( 22, {f:[4,2],e:[   ],p:[   ]},{y:[0,0],yy:[   ],r:[   ],yr:[   ]}) // "Group L"             "England", "Croatia"       );
  draw.add_score( 21, {f:[1,0],e:[   ],p:[   ]},{y:[1,2],yy:[   ],r:[   ],yr:[   ]}) // "Group L"               "Ghana", "Panama"        );
  draw.add_score( 45, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group L"             "England", "Ghana"         );
  draw.add_score( 46, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group L"              "Panama", "Croatia"       );
  draw.add_score( 67, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group L"              "Panama", "England"       );
  draw.add_score( 68, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Group L"             "Croatia", "Ghana"         );
  draw.add_score( 73, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "2A", "2B"            );
  draw.add_score( 76, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1C", "2F"            );
  draw.add_score( 74, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1E", "3 A/B/C/D/F"   );
  draw.add_score( 75, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1F", "2C"            );
  draw.add_score( 78, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "2E", "2I"            );
  draw.add_score( 77, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1I", "3 C/D/F/G/H"   );
  draw.add_score( 79, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1A", "3 C/E/F/H/I"   );
  draw.add_score( 80, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1L", "3 E/H/I/J/K"   );
  draw.add_score( 82, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1G", "3 A/E/H/I/J"   );
  draw.add_score( 81, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1D", "3 B/E/F/I/J"   );
  draw.add_score( 84, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1H", "2J"            );
  draw.add_score( 83, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "2K", "2L"            );
  draw.add_score( 85, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1B", "3 E/F/G/I/J"   );
  draw.add_score( 88, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "2D", "2G"            );
  draw.add_score( 86, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1J", "2H"            );
  draw.add_score( 87, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 32"              "1K", "3 D/E/I/J/L"   );
  draw.add_score( 90, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 73", "W 75"          );
  draw.add_score( 89, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 74", "W 77"          );
  draw.add_score( 91, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 76", "W 78"          );
  draw.add_score( 92, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 79", "W 80"          );
  draw.add_score( 93, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 83", "W 84"          );
  draw.add_score( 94, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 81", "W 82"          );
  draw.add_score( 95, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 86", "W 88"          );
  draw.add_score( 96, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Round of 16"            "W 85", "W 87"          );
  draw.add_score( 97, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Quarterfinals"          "W 89", "W 90"          );
  draw.add_score( 98, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Quarterfinals"          "W 93", "W 94"          );
  draw.add_score( 99, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Quarterfinals"          "W 91", "W 92"          );
  draw.add_score(100, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Quarterfinals"          "W 95", "W 96"          );
  draw.add_score(101, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Semifinals"             "W 97", "W 98"          );
  draw.add_score(102, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Semifinals"             "W 99", "W 100"         );
  draw.add_score(103, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Match for third              "L 101", "L 102"         );
  draw.add_score(104, {f:[   ],e:[   ],p:[   ]},{y:[   ],yy:[   ],r:[   ],yr:[   ]}) // "Final"                 "W 101", "W 102"         );
}
