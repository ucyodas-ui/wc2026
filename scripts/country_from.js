function country_from(ct)
{
    let c = ""
    switch(ct)
    {
      case "NZ":                         return "NZL"; 
      case "New Zealand":                return "NZL"; 
      case "Nu Zeelind":                 return "NZL"; 
      case "Canada":                     return "CAN"; 
      case "A Kiwi living in Norway!":   return "NOR"; 
      case "England":                    return "ENG"; 
      case "Mars":                       return "MARS";
      case "France":                     return "FRA"; 
      case "Nz":                         return "NZL"; 
      case "NZ/UK":                      return "ENG"; 
      case "Have a guess!":              return "BRA"; 
      case "Colombia":                   return "COL"; 
      case "Chile":                      return "CHI"; 
      case "United States":              return "USA"; 
      case "Austria":                    return "AUT"; 
      case "Romania":                    return "ROU";
      case "Paracosm":                   return "DUM";      
      default:                           return "XXX"; 
    }
}