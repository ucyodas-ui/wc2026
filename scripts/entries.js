let entries
function setup_entries()
{
  entries = [...real_entries, ...dummy_entries]
}
const real_entries =
[
  {
    "name": "Matt R",
    "league": [
      "Cobras",
      "Yodas",
      "Matt's Mates",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "MAR",
        "BRA",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "AUS",
        "QAT",
        "ECU",
        "CZE",
        "SWE",
        "EGY",
        "NOR",
        "AUT"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "BRA",
          "winner": "NED",
          "loser": "BRA"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "QAT",
          "winner": "USA",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "JPN",
          "winner": "MAR",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "ECU",
          "winner": "ECU",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "AUT",
          "winner": "ENG",
          "loser": "AUT"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "NZL",
          "winner": "TUR",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "NOR",
          "winner": "POR",
          "loser": "NOR"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "NED",
          "winner": "NED",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "MAR",
          "team2": "SEN",
          "winner": "MAR",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "ECU",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "ECU"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "MAR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MAR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ENG",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group D": "AUS",
      "Group B": "QAT",
      "Group E": "ECU",
      "Group A": "CZE",
      "Group F": "SWE",
      "Group G": "EGY",
      "Group I": "NOR",
      "Group J": "AUT"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Jonny",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "KOR",
        "CZE",
        "MEX",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "TUR",
        "PAR",
        "USA",
        "AUS"
      ],
      "E": [
        "CIV",
        "GER",
        "ECU",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "NZL",
        "ECU",
        "NOR",
        "CRO",
        "MEX",
        "UZB",
        "SWE",
        "MAR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "CIV",
          "team2": "MAR",
          "winner": "CIV",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "CAN",
          "winner": "CZE",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "SCO",
          "winner": "JPN",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "NOR",
          "winner": "TUR",
          "loser": "NOR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "MEX",
          "winner": "BEL",
          "loser": "MEX"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "GER",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "GER"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "ECU",
          "winner": "KOR",
          "loser": "ECU"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "CIV",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "CIV"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "SEN",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "JPN",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ENG",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "JPN",
        "team2": "ARG",
        "winner": "JPN",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group G": "NZL",
      "Group E": "ECU",
      "Group I": "NOR",
      "Group L": "CRO",
      "Group A": "MEX",
      "Group K": "UZB",
      "Group F": "SWE",
      "Group C": "MAR"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Oregon",
    "league": [
      "Matt's Mates",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "EGY",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "UZB",
        "SCO",
        "CIV",
        "SWE",
        "CZE",
        "ALG",
        "NOR",
        "AUS"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "CIV",
          "winner": "USA",
          "loser": "CIV"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "IRN",
          "winner": "IRN",
          "loser": "TUR"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "ALG",
          "winner": "CAN",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "NOR",
          "winner": "POR",
          "loser": "NOR"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "SUI",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "SUI"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "IRN",
          "winner": "ARG",
          "loser": "IRN"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "FRA",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "FRA",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group K": "UZB",
      "Group C": "SCO",
      "Group E": "CIV",
      "Group F": "SWE",
      "Group A": "CZE",
      "Group J": "ALG",
      "Group I": "NOR",
      "Group D": "AUS"
    },
    "most_goals": "GER",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "WhatGameAreWePlaying?",
    "league": [
      "Matt's Mates",
      "Matt's Mates (does he actually have any??!)",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "TUR",
        "AUS",
        "USA",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "SWE",
        "NED",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "NOR",
        "FRA",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "UZB",
        "COL",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "JPN",
        "USA",
        "KOR",
        "PAN",
        "COL",
        "IRN",
        "CUW",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "JPN",
          "winner": "NOR",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "CZE"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "MAR",
          "winner": "SWE",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "UZB",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "UZB"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "ALG",
          "winner": "TUR",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CUW",
          "winner": "MEX",
          "loser": "CUW"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COL",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "AUS",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "IRN",
          "winner": "CAN",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NOR",
          "winner": "GER",
          "loser": "NOR"
        },
        {
          "id": 2,
          "team1": "SUI",
          "team2": "SWE",
          "winner": "SUI",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "FRA",
          "winner": "BRA",
          "loser": "FRA"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SUI",
          "winner": "GER",
          "loser": "SUI"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "GER",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "GER"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group F": "JPN",
      "Group D": "USA",
      "Group A": "KOR",
      "Group L": "PAN",
      "Group K": "COL",
      "Group G": "IRN",
      "Group E": "CUW",
      "Group J": "ALG"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Nu Zeelind"
  },
  {
    "name": "Covefe",
    "league": [
      "Yodas",
      "UCAFC"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "MAR",
        "BRA",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "AUS",
        "USA",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "EGY",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "IRQ",
        "SEN"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "SWE",
        "ALG",
        "GHA",
        "CZE",
        "EGY",
        "USA",
        "IRQ",
        "KSA"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "BIH",
          "winner": "KOR",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "BRA",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "ALG",
          "winner": "TUR",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "JPN",
          "winner": "MAR",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "KSA",
          "winner": "MEX",
          "loser": "KSA"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "IRQ",
          "winner": "CRO",
          "loser": "IRQ"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "IRN",
          "winner": "IRN",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "BRA",
          "winner": "BRA",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "MAR",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "MAR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "CRO",
          "winner": "MEX",
          "loser": "CRO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "IRN",
          "winner": "ARG",
          "loser": "IRN"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "BRA",
          "winner": "BRA",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "MEX",
          "winner": "NOR",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "BRA",
          "team2": "ESP",
          "winner": "BRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "POR",
          "winner": "POR",
          "loser": "NOR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "NOR",
        "winner": "ESP",
        "loser": "NOR"
      },
      "F": {
        "id": 1,
        "team1": "BRA",
        "team2": "POR",
        "winner": "POR",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group F": "SWE",
      "Group J": "ALG",
      "Group L": "GHA",
      "Group A": "CZE",
      "Group G": "EGY",
      "Group D": "USA",
      "Group I": "IRQ",
      "Group H": "KSA"
    },
    "most_goals": "NOR",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "0",
        "0"
      ],
      "e": [
        "1",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "SpiderPig",
    "league": [
      "Matt's Mates",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "PAR",
        "TUR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "NZL",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "NZL",
        "KOR",
        "TUR",
        "JPN",
        "SCO",
        "CAN",
        "CIV",
        "SEN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "BIH",
          "winner": "CZE",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "CAN",
          "winner": "USA",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "IRN",
          "winner": "PAR",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CIV",
          "winner": "POR",
          "loser": "CIV"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "NED",
          "winner": "NED",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "FRA",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "ESP",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group G": "NZL",
      "Group A": "KOR",
      "Group D": "TUR",
      "Group F": "JPN",
      "Group C": "SCO",
      "Group B": "CAN",
      "Group E": "CIV",
      "Group I": "SEN"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "0",
        "0"
      ],
      "e": [
        "3",
        "2"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Adam",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "QAT",
        "BIH",
        "CAN"
      ],
      "C": [
        "BRA",
        "HAI",
        "SCO",
        "MAR"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "SWE",
        "JPN",
        "NED",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "NED",
        "PAR",
        "SEN",
        "SCO",
        "ALG",
        "CPV",
        "BIH",
        "KOR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SCO",
          "winner": "GER",
          "loser": "SCO"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "QAT",
          "winner": "CZE",
          "loser": "QAT"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "HAI",
          "winner": "SWE",
          "loser": "HAI"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "BIH",
          "winner": "USA",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CPV",
          "winner": "MEX",
          "loser": "CPV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAR",
          "winner": "POR",
          "loser": "PAR"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SWE",
          "winner": "GER",
          "loser": "SWE"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "POR",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "GER",
        "team2": "BRA",
        "winner": "TBD",
        "loser": "GER"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group F": "NED",
      "Group D": "PAR",
      "Group I": "SEN",
      "Group C": "SCO",
      "Group J": "ALG",
      "Group H": "CPV",
      "Group B": "BIH",
      "Group A": "KOR"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Cranbrook Canuck",
    "league": [
      "Matt's Mates",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "HAI",
        "MAR",
        "SCO"
      ],
      "D": [
        "TUR",
        "PAR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "EGY",
        "BEL",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ALG",
        "ARG",
        "AUT",
        "JOR"
      ],
      "K": [
        "COD",
        "COL",
        "POR",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "POR",
        "KOR",
        "AUT",
        "BIH",
        "SWE",
        "SEN",
        "GHA",
        "CIV"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "KOR",
          "winner": "GER",
          "loser": "KOR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "CAN",
          "winner": "CZE",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "HAI",
          "winner": "JPN",
          "loser": "HAI"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ARG",
          "winner": "ESP",
          "loser": "ARG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "BIH",
          "winner": "BIH",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "EGY",
          "team2": "SEN",
          "winner": "EGY",
          "loser": "SEN"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "ECU",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CIV",
          "winner": "MEX",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        },
        {
          "id": 13,
          "team1": "ALG",
          "team2": "URU",
          "winner": "URU",
          "loser": "ALG"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "AUT",
          "winner": "SUI",
          "loser": "AUT"
        },
        {
          "id": 16,
          "team1": "COD",
          "team2": "GHA",
          "winner": "COD",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "BIH",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "BIH"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "MEX",
          "loser": "ENG"
        },
        {
          "id": 7,
          "team1": "URU",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "URU"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "COD",
          "winner": "SUI",
          "loser": "COD"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "JPN",
          "winner": "GER",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "EGY",
          "winner": "ESP",
          "loser": "EGY"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "MEX",
          "winner": "BRA",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "BEL",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "BEL"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "GER",
        "team2": "BRA",
        "winner": "GER",
        "loser": "BRA"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "SUI",
        "winner": "ESP",
        "loser": "SUI"
      }
    },
    "third_place": {
      "Group K": "POR",
      "Group A": "KOR",
      "Group J": "AUT",
      "Group B": "BIH",
      "Group F": "SWE",
      "Group I": "SEN",
      "Group L": "GHA",
      "Group E": "CIV"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Canada"
  },
  {
    "name": "Magical Messi",
    "league": [
      "Matt's Mates"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "PAR",
        "AUS",
        "USA",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SEN",
        "HAI",
        "KOR",
        "TUN",
        "GHA",
        "NZL",
        "ALG",
        "UZB"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "HAI",
          "winner": "GER",
          "loser": "HAI"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUN",
          "winner": "FRA",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "CAN",
          "winner": "CZE",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "POR"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "ALG",
          "winner": "PAR",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "ECU",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SEN",
          "winner": "MEX",
          "loser": "SEN"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "NED",
          "winner": "CZE",
          "loser": "NED"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "MEX",
          "loser": "ENG"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "COL",
          "winner": "COL",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "CZE",
          "winner": "GER",
          "loser": "CZE"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "ESP"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "MEX",
          "winner": "BRA",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "COL",
          "winner": "ARG",
          "loser": "COL"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "BEL",
          "winner": "GER",
          "loser": "BEL"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "BEL",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "BEL"
      },
      "F": {
        "id": 1,
        "team1": "GER",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "GER"
      }
    },
    "third_place": {
      "Group I": "SEN",
      "Group C": "HAI",
      "Group A": "KOR",
      "Group F": "TUN",
      "Group L": "GHA",
      "Group G": "NZL",
      "Group J": "ALG",
      "Group K": "UZB"
    },
    "most_goals": "ARG",
    "score": {
      "h": [
        "2",
        "0"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Canada"
  },
  {
    "name": "Jeff",
    "league": [
      "JJDJSCBC",
      "Taities",
      "donuts"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "SWE",
        "JPN",
        "NED",
        "TUN"
      ],
      "G": [
        "NZL",
        "EGY",
        "BEL",
        "IRN"
      ],
      "H": [
        "ESP",
        "CPV",
        "URU",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "JOR",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "BEL",
        "NOR",
        "CZE",
        "NED",
        "MAR",
        "CIV",
        "UZB",
        "CRO"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "MAR",
          "winner": "GER",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "NED",
          "winner": "NED",
          "loser": "FRA"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "SCO",
          "winner": "SWE",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "NOR",
          "winner": "USA",
          "loser": "NOR"
        },
        {
          "id": 8,
          "team1": "NZL",
          "team2": "CZE",
          "winner": "NZL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "BRA"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "CIV",
          "winner": "KOR",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "CPV",
          "winner": "ARG",
          "loser": "CPV"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "NED",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "GHA",
          "team2": "ESP",
          "winner": "GHA",
          "loser": "ESP"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "NZL",
          "winner": "USA",
          "loser": "NZL"
        },
        {
          "id": 5,
          "team1": "JPN",
          "team2": "ECU",
          "winner": "JPN",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "KOR",
          "loser": "ENG"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "POR",
          "winner": "BEL",
          "loser": "POR"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "GHA",
          "team2": "USA",
          "winner": "USA",
          "loser": "GHA"
        },
        {
          "id": 3,
          "team1": "JPN",
          "team2": "KOR",
          "winner": "KOR",
          "loser": "JPN"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "SWE",
          "team2": "USA",
          "winner": "USA",
          "loser": "SWE"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "BEL",
          "winner": "KOR",
          "loser": "BEL"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "SWE",
        "team2": "BEL",
        "winner": "BEL",
        "loser": "SWE"
      },
      "F": {
        "id": 1,
        "team1": "USA",
        "team2": "KOR",
        "winner": "USA",
        "loser": "KOR"
      }
    },
    "third_place": {
      "Group G": "BEL",
      "Group I": "NOR",
      "Group A": "CZE",
      "Group F": "NED",
      "Group C": "MAR",
      "Group E": "CIV",
      "Group K": "UZB",
      "Group L": "CRO"
    },
    "most_goals": "USA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "1",
        "1"
      ],
      "p": [
        "1",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "mootri",
    "league": [
      "Taities"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "PAR",
        "TUR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "USA",
        "SCO",
        "SEN",
        "SWE",
        "CZE",
        "CIV",
        "PAN",
        "BIH"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "BIH",
          "winner": "PAR",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "TUR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "CIV",
          "winner": "SUI",
          "loser": "CIV"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "NED",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "NED",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "NED",
        "team2": "ARG",
        "winner": "NED",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group D": "USA",
      "Group C": "SCO",
      "Group I": "SEN",
      "Group F": "SWE",
      "Group A": "CZE",
      "Group E": "CIV",
      "Group L": "PAN",
      "Group B": "BIH"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "0",
        "1"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "1"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Fox in the box",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "IRN",
        "NZL",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "UZB",
        "COL",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "NZL",
        "COL",
        "SEN",
        "PAR",
        "CIV",
        "CZE",
        "QAT",
        "AUT"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "NZL",
          "winner": "FRA",
          "loser": "NZL"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "UZB",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "UZB"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "QAT",
          "winner": "TUR",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CIV",
          "winner": "MEX",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COL",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "IRN",
          "winner": "USA",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "AUT",
          "winner": "SUI",
          "loser": "AUT"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "SEN",
          "winner": "POR",
          "loser": "SEN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "MAR",
          "winner": "CAN",
          "loser": "MAR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "TUR",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "CAN",
          "winner": "FRA",
          "loser": "CAN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "TUR",
          "winner": "ESP",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "FRA",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group G": "NZL",
      "Group K": "COL",
      "Group I": "SEN",
      "Group D": "PAR",
      "Group E": "CIV",
      "Group A": "CZE",
      "Group B": "QAT",
      "Group J": "AUT"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "1"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "A Kiwi living in Norway!"
  },
  {
    "name": "Haze",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "KOR",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "USA",
        "AUS",
        "TUR",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "KOR",
        "SWE",
        "CIV",
        "GHA",
        "ALG",
        "NOR",
        "TUR",
        "NZL"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "SUI",
          "winner": "MEX",
          "loser": "SUI"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "ALG",
          "winner": "USA",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "CIV",
          "winner": "CIV",
          "loser": "CZE"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "NZL",
          "winner": "CAN",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "CIV",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CIV"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "CAN",
          "loser": "POR"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "FRA",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "CAN",
          "winner": "ARG",
          "loser": "CAN"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ENG",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "TBD",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group A": "KOR",
      "Group F": "SWE",
      "Group E": "CIV",
      "Group L": "GHA",
      "Group J": "ALG",
      "Group I": "NOR",
      "Group D": "TUR",
      "Group G": "NZL"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "MAD LFC FAN",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "BIH",
        "SUI",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "PAR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "NOR",
        "JPN",
        "USA",
        "CAN",
        "CZE",
        "GHA",
        "SCO",
        "NZL"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "SUI",
          "winner": "KOR",
          "loser": "SUI"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CAN",
          "winner": "TUR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "BIH",
          "team2": "NZL",
          "winner": "BIH",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "TUR",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "BIH",
          "team2": "POR",
          "winner": "POR",
          "loser": "BIH"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "TUR",
          "winner": "ESP",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ESP",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "FRA",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group I": "NOR",
      "Group F": "JPN",
      "Group D": "USA",
      "Group B": "CAN",
      "Group A": "CZE",
      "Group L": "GHA",
      "Group C": "SCO",
      "Group G": "NZL"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "3",
        "2"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Weird Fish",
    "league": [
      "Taities"
    ],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "QAT",
        "CAN"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "PAR",
        "AUS",
        "TUR",
        "USA"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "IRQ",
        "SEN"
      ],
      "J": [
        "ARG",
        "JOR",
        "AUT",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "KOR",
        "TUR",
        "GHA",
        "CIV",
        "MAR",
        "EGY",
        "UZB",
        "QAT"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "MAR",
          "winner": "GER",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUR",
          "winner": "FRA",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "BIH",
          "winner": "MEX",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "JOR",
          "winner": "ESP",
          "loser": "JOR"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "QAT",
          "winner": "PAR",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "ECU",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "CIV",
          "winner": "CZE",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "AUS",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "CZE",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CZE"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "NED",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "NED",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "TBD",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "NED",
        "team2": "ARG",
        "winner": "NED",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group A": "KOR",
      "Group D": "TUR",
      "Group L": "GHA",
      "Group E": "CIV",
      "Group C": "MAR",
      "Group G": "EGY",
      "Group K": "UZB",
      "Group B": "QAT"
    },
    "most_goals": "NED",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Mars"
  },
  {
    "name": "Qui-Gon Jinn",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "PAR",
        "USA",
        "TUR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "NED",
        "JPN",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "SCO",
        "TUR",
        "PAN",
        "NZL",
        "CZE",
        "UZB",
        "AUT",
        "TUN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUN",
          "winner": "FRA",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "AUT",
          "winner": "PAR",
          "loser": "AUT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "CZE",
          "loser": "BEL"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "EGY",
          "winner": "USA",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "CZE",
          "winner": "PAR",
          "loser": "CZE"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "NED",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "PAR",
          "winner": "ESP",
          "loser": "PAR"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "NED",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "BRA",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "NED",
        "team2": "BRA",
        "winner": "NED",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group C": "SCO",
      "Group D": "TUR",
      "Group L": "PAN",
      "Group G": "NZL",
      "Group A": "CZE",
      "Group K": "UZB",
      "Group J": "AUT",
      "Group F": "TUN"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Chewie",
    "league": [
      "Yodas",
      "UCAFC"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "CZE",
        "NOR",
        "SWE",
        "CIV",
        "GHA",
        "PAR",
        "UZB",
        "MAR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "NOR",
          "winner": "USA",
          "loser": "NOR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "MAR",
          "winner": "MEX",
          "loser": "MAR"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "CIV",
          "winner": "SUI",
          "loser": "CIV"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "SUI",
          "loser": "POR"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "SUI",
          "winner": "ARG",
          "loser": "SUI"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group I": "NOR",
      "Group F": "SWE",
      "Group E": "CIV",
      "Group L": "GHA",
      "Group D": "PAR",
      "Group K": "UZB",
      "Group C": "MAR"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Sergeant Ben HOWES",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "KOR",
        "CZE",
        "MEX",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "PAR",
        "TUR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "SWE",
        "NED",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "JOR",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "MEX",
        "QAT",
        "USA",
        "JPN",
        "JOR",
        "EGY",
        "SEN",
        "MAR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "CAN",
          "winner": "CZE",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "SCO",
          "winner": "SWE",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "QAT",
          "winner": "PAR",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "MEX",
          "winner": "BEL",
          "loser": "MEX"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "MAR",
          "winner": "KOR",
          "loser": "MAR"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "JOR",
          "winner": "ENG",
          "loser": "JOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "NZL",
          "winner": "TUR",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "SEN",
          "winner": "POR",
          "loser": "SEN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ENG",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group A": "MEX",
      "Group B": "QAT",
      "Group D": "USA",
      "Group F": "JPN",
      "Group J": "JOR",
      "Group G": "EGY",
      "Group I": "SEN",
      "Group C": "MAR"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "2",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Pepe the King Prawn",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "CZE",
        "SCO",
        "SEN",
        "PAR",
        "SWE",
        "IRN",
        "BIH",
        "CIV"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "BIH",
          "winner": "USA",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "SCO",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "TUR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "IRN",
          "winner": "SUI",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CIV",
          "winner": "POR",
          "loser": "CIV"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "SCO",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "SCO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "MAR",
          "winner": "GER",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "GER",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "GER"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group C": "SCO",
      "Group I": "SEN",
      "Group D": "PAR",
      "Group F": "SWE",
      "Group G": "IRN",
      "Group B": "BIH",
      "Group E": "CIV"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "ChatGPT's Herald",
    "league": [
      "Taities"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SCO",
        "PAR",
        "CIV",
        "SWE",
        "IRN",
        "SEN",
        "ALG",
        "GHA"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CIV",
          "winner": "TUR",
          "loser": "CIV"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "ALG",
          "winner": "BEL",
          "loser": "ALG"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "SCO",
          "winner": "KOR",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "EGY",
          "winner": "USA",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "IRN",
          "winner": "SUI",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group C": "SCO",
      "Group D": "PAR",
      "Group E": "CIV",
      "Group F": "SWE",
      "Group G": "IRN",
      "Group I": "SEN",
      "Group J": "ALG",
      "Group L": "GHA"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Enchanted Woods",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "QAT",
        "CAN"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "EGY",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SCO",
        "QAT",
        "AUS",
        "COD",
        "JPN",
        "GHA",
        "EGY",
        "SEN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "BIH",
          "winner": "MEX",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "QAT",
          "winner": "TUR",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "SEN",
          "winner": "BEL",
          "loser": "SEN"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "SCO",
          "winner": "SCO",
          "loser": "KOR"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COD",
          "winner": "ENG",
          "loser": "COD"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "IRN",
          "winner": "USA",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "SCO",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "SCO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "POR",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group C": "SCO",
      "Group B": "QAT",
      "Group D": "AUS",
      "Group K": "COD",
      "Group F": "JPN",
      "Group L": "GHA",
      "Group G": "EGY",
      "Group I": "SEN"
    },
    "most_goals": "ENG",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "0",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "1",
        "0"
      ]
    },
    "Country": "England"
  },
  {
    "name": "Vanny J",
    "league": [
      "Matt's Mates",
      "donuts"
    ],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "HAI",
        "SCO",
        "MAR"
      ],
      "D": [
        "PAR",
        "AUS",
        "TUR",
        "USA"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "NZL",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "KOR",
        "SCO",
        "NZL",
        "GHA",
        "AUT",
        "JPN",
        "TUR",
        "NOR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "HAI",
          "winner": "NED",
          "loser": "HAI"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "AUT",
          "winner": "AUT",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "SCO",
          "winner": "SCO",
          "loser": "CZE"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "IRN",
          "winner": "AUS",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "AUT",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "AUT"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "SCO",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "SCO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "NED",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NED",
        "team2": "ENG",
        "winner": "NED",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group A": "KOR",
      "Group C": "SCO",
      "Group G": "NZL",
      "Group L": "GHA",
      "Group J": "AUT",
      "Group F": "JPN",
      "Group D": "TUR",
      "Group I": "NOR"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Debi",
    "league": [
      "JJDJSCBC",
      "donuts"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "RSA",
        "CZE"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "SCO",
        "BRA",
        "MAR",
        "HAI"
      ],
      "D": [
        "PAR",
        "USA",
        "AUS",
        "TUR"
      ],
      "E": [
        "GER",
        "CUW",
        "ECU",
        "CIV"
      ],
      "F": [
        "SWE",
        "JPN",
        "NED",
        "TUN"
      ],
      "G": [
        "EGY",
        "IRN",
        "BEL",
        "NZL"
      ],
      "H": [
        "URU",
        "ESP",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "UZB",
        "COD",
        "COL"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "RSA",
        "NED",
        "ECU",
        "GHA",
        "NOR",
        "AUS",
        "KSA",
        "MAR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "MAR",
          "winner": "GER",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "AUS",
          "winner": "FRA",
          "loser": "AUS"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "BRA",
          "winner": "SWE",
          "loser": "BRA"
        },
        {
          "id": 5,
          "team1": "UZB",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 6,
          "team1": "URU",
          "team2": "AUT",
          "winner": "URU",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "NED",
          "winner": "NED",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "EGY",
          "team2": "RSA",
          "winner": "RSA",
          "loser": "EGY"
        },
        {
          "id": 9,
          "team1": "SCO",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "SCO"
        },
        {
          "id": 10,
          "team1": "CUW",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CUW"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "KSA",
          "winner": "KOR",
          "loser": "KSA"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "CRO"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "ESP",
          "winner": "ARG",
          "loser": "ESP"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "IRN",
          "winner": "USA",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ECU",
          "winner": "ECU",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "POR"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "URU",
          "winner": "ENG",
          "loser": "URU"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "RSA",
          "winner": "NED",
          "loser": "RSA"
        },
        {
          "id": 5,
          "team1": "JPN",
          "team2": "SEN",
          "winner": "JPN",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "NOR",
          "winner": "KOR",
          "loser": "NOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "ECU",
          "team2": "GHA",
          "winner": "ECU",
          "loser": "GHA"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "NED",
          "winner": "ENG",
          "loser": "NED"
        },
        {
          "id": 3,
          "team1": "JPN",
          "team2": "KOR",
          "winner": "JPN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "ECU",
          "winner": "ARG",
          "loser": "ECU"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "SWE",
          "team2": "ENG",
          "winner": "SWE",
          "loser": "ENG"
        },
        {
          "id": 2,
          "team1": "JPN",
          "team2": "ARG",
          "winner": "JPN",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ENG",
        "team2": "ARG",
        "winner": "ENG",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "SWE",
        "team2": "JPN",
        "winner": "JPN",
        "loser": "SWE"
      }
    },
    "third_place": {
      "Group A": "RSA",
      "Group F": "NED",
      "Group E": "ECU",
      "Group L": "GHA",
      "Group I": "NOR",
      "Group D": "AUS",
      "Group H": "KSA",
      "Group C": "MAR"
    },
    "most_goals": "ARG",
    "score": {
      "h": [
        "2",
        "0"
      ],
      "f": [
        "3",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "JJForReal",
    "league": [
      "JJDJSCBC",
      "Taities",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "TUR",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "JPN",
        "GHA",
        "MAR",
        "CZE",
        "IRN",
        "ALG",
        "NOR",
        "UZB"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "MAR",
          "winner": "GER",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "ALG",
          "winner": "USA",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "BRA"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "NOR",
          "winner": "MEX",
          "loser": "NOR"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "IRN",
          "winner": "CAN",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "SUI",
          "team2": "NED",
          "winner": "NED",
          "loser": "SUI"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "SWE",
          "team2": "SEN",
          "winner": "SWE",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "NED",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "USA",
          "loser": "ESP"
        },
        {
          "id": 3,
          "team1": "SWE",
          "team2": "ENG",
          "winner": "SWE",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "USA",
          "winner": "USA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "SWE",
          "team2": "POR",
          "winner": "SWE",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NED",
        "team2": "POR",
        "winner": "NED",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "USA",
        "team2": "SWE",
        "winner": "USA",
        "loser": "SWE"
      }
    },
    "third_place": {
      "Group F": "JPN",
      "Group L": "GHA",
      "Group C": "MAR",
      "Group A": "CZE",
      "Group G": "IRN",
      "Group J": "ALG",
      "Group I": "NOR",
      "Group K": "UZB"
    },
    "most_goals": "USA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "becbec",
    "league": [
      "JJDJSCBC"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "AUS",
        "PAR",
        "USA",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "NZL",
        "BEL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "JOR",
        "ALG"
      ],
      "K": [
        "COL",
        "POR",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "NOR",
        "GHA",
        "SCO",
        "JPN",
        "EGY",
        "CZE",
        "KSA",
        "CUW"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SCO",
          "winner": "GER",
          "loser": "SCO"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "AUS",
          "team2": "CUW",
          "winner": "AUS",
          "loser": "CUW"
        },
        {
          "id": 8,
          "team1": "NZL",
          "team2": "CZE",
          "winner": "NZL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "KSA",
          "winner": "MEX",
          "loser": "KSA"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ENG"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "NED",
          "winner": "NED",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "POR",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "POR"
        },
        {
          "id": 4,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "AUS"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "NOR",
          "winner": "MEX",
          "loser": "NOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "BEL",
          "winner": "ARG",
          "loser": "BEL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "COL",
          "winner": "COL",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "NZL",
          "winner": "ESP",
          "loser": "NZL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "MEX",
          "winner": "BRA",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "COL",
          "winner": "COL",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "COL",
          "winner": "BRA",
          "loser": "COL"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "COL",
        "winner": "COL",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group I": "NOR",
      "Group L": "GHA",
      "Group C": "SCO",
      "Group F": "JPN",
      "Group G": "EGY",
      "Group A": "CZE",
      "Group H": "KSA",
      "Group E": "CUW"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Eddie",
    "league": [
      "JJDJSCBC",
      "kids"
    ],
    "groups": {
      "A": [
        "MEX",
        "RSA",
        "KOR",
        "CZE"
      ],
      "B": [
        "CAN",
        "QAT",
        "SUI",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "HAI",
        "MAR"
      ],
      "D": [
        "USA",
        "PAR",
        "TUR",
        "AUS"
      ],
      "E": [
        "GER",
        "CUW",
        "ECU",
        "CIV"
      ],
      "F": [
        "SWE",
        "JPN",
        "NED",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "CPV",
        "URU",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "NOR",
        "HAI",
        "IRN",
        "SUI",
        "TUR",
        "URU",
        "PAN",
        "UZB"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "HAI",
          "winner": "GER",
          "loser": "HAI"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUR",
          "winner": "FRA",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "RSA",
          "team2": "QAT",
          "winner": "RSA",
          "loser": "QAT"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "SCO",
          "winner": "SWE",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "POR"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "NOR",
          "winner": "BEL",
          "loser": "NOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CUW",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CUW"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "URU",
          "winner": "MEX",
          "loser": "URU"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "CPV",
          "winner": "CPV",
          "loser": "ARG"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "IRN",
          "winner": "CAN",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "PAN",
          "winner": "COL",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "RSA",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "RSA"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "SUI",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "SUI"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "CPV",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "CPV"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "COL",
          "winner": "CAN",
          "loser": "COL"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SWE",
          "winner": "GER",
          "loser": "SWE"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "EGY",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "EGY"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "CAN",
          "winner": "ENG",
          "loser": "CAN"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "GER",
        "team2": "CAN",
        "winner": "GER",
        "loser": "CAN"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ESP",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group I": "NOR",
      "Group C": "HAI",
      "Group G": "IRN",
      "Group B": "SUI",
      "Group D": "TUR",
      "Group H": "URU",
      "Group L": "PAN",
      "Group K": "UZB"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "2",
        "1"
      ],
      "f": [
        "3",
        "2"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Kevy",
    "league": [
      "Canaries"
    ],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "RSA",
        "KOR"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "TUR",
        "AUS",
        "USA",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "URU",
        "ESP",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "IRQ",
        "SEN"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "ECU",
        "USA",
        "IRQ",
        "JPN",
        "RSA",
        "MAR",
        "GHA",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "URU",
          "team2": "AUT",
          "winner": "URU",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "ECU",
          "winner": "TUR",
          "loser": "ECU"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "RSA",
          "winner": "BEL",
          "loser": "RSA"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "NOR",
          "winner": "CIV",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "MAR",
          "winner": "CZE",
          "loser": "MAR"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "IRQ",
          "winner": "CRO",
          "loser": "IRQ"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ARG"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "URU",
          "winner": "ENG",
          "loser": "URU"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "TUR",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "CIV",
          "winner": "BRA",
          "loser": "CIV"
        },
        {
          "id": 6,
          "team1": "CZE",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "CZE"
        },
        {
          "id": 7,
          "team1": "ESP",
          "team2": "AUS",
          "winner": "ESP",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "GER",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "TUR",
          "winner": "ENG",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ESP",
          "team2": "POR",
          "winner": "ESP",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ENG",
          "winner": "GER",
          "loser": "ENG"
        },
        {
          "id": 2,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ENG",
        "team2": "CRO",
        "winner": "ENG",
        "loser": "CRO"
      },
      "F": {
        "id": 1,
        "team1": "GER",
        "team2": "ESP",
        "winner": "GER",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group E": "ECU",
      "Group D": "USA",
      "Group I": "IRQ",
      "Group F": "JPN",
      "Group A": "RSA",
      "Group C": "MAR",
      "Group L": "GHA",
      "Group J": "ALG"
    },
    "most_goals": "GER",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "1"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "DARCE XI",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "QAT",
        "CAN"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "PAR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "EGY",
        "BEL",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "COD",
        "UZB"
      ],
      "L": [
        "GHA",
        "ENG",
        "CRO",
        "PAN"
      ],
      "third": [
        "SCO",
        "USA",
        "CIV",
        "SWE",
        "CRO",
        "NOR",
        "ALG",
        "KSA"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "BIH",
          "winner": "CZE",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "ENG",
          "winner": "POR",
          "loser": "ENG"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CIV",
          "winner": "CIV",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "EGY",
          "team2": "KSA",
          "winner": "EGY",
          "loser": "KSA"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "GHA",
          "team2": "NOR",
          "winner": "GHA",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "ALG",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "NED",
          "winner": "NED",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "POR",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "POR"
        },
        {
          "id": 4,
          "team1": "CIV",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "CIV"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "BEL",
          "winner": "ARG",
          "loser": "BEL"
        },
        {
          "id": 8,
          "team1": "ALG",
          "team2": "COL",
          "winner": "COL",
          "loser": "ALG"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "NED",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "EGY",
          "winner": "ESP",
          "loser": "EGY"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "GHA",
          "winner": "BRA",
          "loser": "GHA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "COL",
          "winner": "ARG",
          "loser": "COL"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NED",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "NED"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group C": "SCO",
      "Group D": "USA",
      "Group E": "CIV",
      "Group F": "SWE",
      "Group L": "CRO",
      "Group I": "NOR",
      "Group J": "ALG",
      "Group H": "KSA"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ/UK"
  },
  {
    "name": "No Left Foot",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "QAT",
        "CAN",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "PAR",
        "AUS",
        "USA"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "IRN",
        "EGY",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "PAN",
        "GHA"
      ],
      "third": [
        "AUS",
        "NOR",
        "CZE",
        "PAN",
        "CAN",
        "EGY",
        "ALG",
        "TUN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "EGY",
          "winner": "FRA",
          "loser": "EGY"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "QAT",
          "winner": "QAT",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CAN",
          "winner": "TUR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "TUN",
          "winner": "MEX",
          "loser": "TUN"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "NOR",
          "winner": "CRO",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "IRN",
          "winner": "PAR",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "QAT",
          "team2": "NED",
          "winner": "NED",
          "loser": "QAT"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "CRO",
          "winner": "MEX",
          "loser": "CRO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "MEX",
          "winner": "BRA",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "FRA",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group D": "AUS",
      "Group I": "NOR",
      "Group A": "CZE",
      "Group L": "PAN",
      "Group B": "CAN",
      "Group G": "EGY",
      "Group J": "ALG",
      "Group F": "TUN"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "#nickscottout",
    "league": [],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "TUR",
        "PAR",
        "AUS",
        "USA"
      ],
      "E": [
        "GER",
        "CIV",
        "CUW",
        "ECU"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "MAR",
        "GHA",
        "SWE",
        "KOR",
        "NOR",
        "AUS",
        "NZL",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "ALG",
          "winner": "ALG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "KOR",
          "loser": "BEL"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "CZE"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "NOR",
          "winner": "CRO",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "EGY",
          "winner": "PAR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ENG",
          "loser": "ESP"
        },
        {
          "id": 4,
          "team1": "ALG",
          "team2": "KOR",
          "winner": "ALG",
          "loser": "KOR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MAR",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "MAR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "NZL",
          "team2": "POR",
          "winner": "POR",
          "loser": "NZL"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "NED",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ALG",
          "winner": "ENG",
          "loser": "ALG"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "CRO",
          "winner": "BRA",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ENG",
          "winner": "NED",
          "loser": "ENG"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ENG",
        "team2": "BRA",
        "winner": "ENG",
        "loser": "BRA"
      },
      "F": {
        "id": 1,
        "team1": "NED",
        "team2": "ARG",
        "winner": "NED",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group C": "MAR",
      "Group L": "GHA",
      "Group F": "SWE",
      "Group A": "KOR",
      "Group I": "NOR",
      "Group D": "AUS",
      "Group G": "NZL",
      "Group J": "ALG"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "3",
        "2"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Flagging it",
    "league": [
      "Matt's Mates",
      "donuts"
    ],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "RSA",
        "KOR"
      ],
      "B": [
        "SUI",
        "BIH",
        "QAT",
        "CAN"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "TUR",
        "PAR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "CPV",
        "KSA",
        "URU"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "JOR",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "USA",
        "RSA",
        "JPN",
        "SEN",
        "QAT",
        "CUW",
        "KSA",
        "JOR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "BIH",
          "winner": "MEX",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "QAT",
          "winner": "QAT",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "RSA",
          "winner": "BEL",
          "loser": "RSA"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "KSA",
          "winner": "CZE",
          "loser": "KSA"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "CPV",
          "winner": "ARG",
          "loser": "CPV"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "JOR",
          "winner": "SUI",
          "loser": "JOR"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CUW",
          "winner": "POR",
          "loser": "CUW"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "QAT",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "QAT"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "CZE",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CZE"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group D": "USA",
      "Group A": "RSA",
      "Group F": "JPN",
      "Group I": "SEN",
      "Group B": "QAT",
      "Group E": "CUW",
      "Group H": "KSA",
      "Group J": "JOR"
    },
    "most_goals": "ENG",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "3",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Ally's Army",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "RSA",
        "KOR"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "PAR",
        "TUR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "MAR",
        "USA",
        "CAN",
        "SEN",
        "COD",
        "GHA",
        "AUT",
        "ECU"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "MAR",
          "winner": "GER",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "USA",
          "winner": "FRA",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "BIH",
          "winner": "CZE",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "POR"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "CAN",
          "winner": "PAR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "BEL"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "ECU",
          "winner": "MEX",
          "loser": "ECU"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "COD",
          "winner": "CRO",
          "loser": "COD"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "TUR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "AUT",
          "winner": "AUT",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "NED",
          "winner": "NED",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "PAR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "CRO",
          "winner": "MEX",
          "loser": "CRO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "AUT",
          "team2": "COL",
          "winner": "COL",
          "loser": "AUT"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "SEN",
          "winner": "ESP",
          "loser": "SEN"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "MEX",
          "winner": "NOR",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "COL",
          "winner": "ARG",
          "loser": "COL"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "NOR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "NOR",
        "winner": "FRA",
        "loser": "NOR"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group C": "MAR",
      "Group D": "USA",
      "Group B": "CAN",
      "Group I": "SEN",
      "Group K": "COD",
      "Group L": "GHA",
      "Group J": "AUT",
      "Group E": "ECU"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Emily is cool",
    "league": [
      "JJDJSCBC",
      "kids"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "RSA",
        "CZE"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "AUS",
        "PAR",
        "TUR",
        "USA"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "SWE",
        "NED",
        "JPN",
        "TUN"
      ],
      "G": [
        "NZL",
        "BEL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "IRQ",
        "SEN",
        "NOR"
      ],
      "J": [
        "ARG",
        "AUT",
        "JOR",
        "ALG"
      ],
      "K": [
        "COL",
        "POR",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "GHA",
        "PAN",
        "CRO"
      ],
      "third": [
        "TUR",
        "QAT",
        "JPN",
        "MAR",
        "CPV",
        "COD",
        "CUW",
        "PAN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "SCO",
          "winner": "SWE",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "AUS",
          "team2": "QAT",
          "winner": "AUS",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "NZL",
          "team2": "CPV",
          "winner": "NZL",
          "loser": "CPV"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "IRQ",
          "winner": "ECU",
          "loser": "IRQ"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "MAR",
          "winner": "MEX",
          "loser": "MAR"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COD",
          "winner": "ENG",
          "loser": "COD"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "PAR",
          "loser": "BEL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "CUW",
          "winner": "SUI",
          "loser": "CUW"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "PAN",
          "winner": "COL",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "SWE",
          "winner": "KOR",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "POR",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "POR"
        },
        {
          "id": 4,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "AUS"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "COL",
          "winner": "SUI",
          "loser": "COL"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "KOR",
          "winner": "KOR",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "NZL",
          "winner": "ESP",
          "loser": "NZL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "SUI",
          "winner": "ARG",
          "loser": "SUI"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "KOR",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "KOR"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ENG",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "KOR",
        "team2": "ARG",
        "winner": "KOR",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ESP",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group D": "TUR",
      "Group B": "QAT",
      "Group F": "JPN",
      "Group C": "MAR",
      "Group H": "CPV",
      "Group K": "COD",
      "Group E": "CUW",
      "Group L": "PAN"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "5",
        "3"
      ],
      "f": [
        "10",
        "4"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Brazilian pineaple",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "CZE",
        "KOR",
        "MEX",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "TUR",
        "PAR",
        "USA",
        "AUS"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "TUN",
        "JPN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "NOR",
        "FRA",
        "SEN",
        "IRQ"
      ],
      "J": [
        "AUT",
        "ARG",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "GHA",
        "ENG",
        "CRO",
        "PAN"
      ],
      "third": [
        "CRO",
        "SEN",
        "MEX",
        "TUN",
        "MAR",
        "EGY",
        "USA",
        "ECU"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "USA",
          "winner": "GER",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "TUN",
          "winner": "NOR",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "BIH",
          "winner": "KOR",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ARG",
          "winner": "ESP",
          "loser": "ARG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "ECU",
          "winner": "ECU",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "MEX",
          "winner": "BEL",
          "loser": "MEX"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "MAR",
          "winner": "CZE",
          "loser": "MAR"
        },
        {
          "id": 12,
          "team1": "GHA",
          "team2": "SEN",
          "winner": "GHA",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "AUT",
          "team2": "URU",
          "winner": "URU",
          "loser": "AUT"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ECU",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "ECU"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "FRA",
          "winner": "BRA",
          "loser": "FRA"
        },
        {
          "id": 6,
          "team1": "CZE",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "CZE"
        },
        {
          "id": 7,
          "team1": "URU",
          "team2": "NZL",
          "winner": "URU",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "NOR",
          "team2": "NED",
          "winner": "NOR",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "GHA",
          "winner": "BRA",
          "loser": "GHA"
        },
        {
          "id": 4,
          "team1": "URU",
          "team2": "POR",
          "winner": "URU",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NOR",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "NOR"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "URU",
          "winner": "BRA",
          "loser": "URU"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NOR",
        "team2": "URU",
        "winner": "NOR",
        "loser": "URU"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group L": "CRO",
      "Group I": "SEN",
      "Group A": "MEX",
      "Group F": "TUN",
      "Group C": "MAR",
      "Group G": "EGY",
      "Group D": "USA",
      "Group E": "ECU"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "0",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Have a guess!"
  },
  {
    "name": "Syb",
    "league": [
      "Matt's Mates"
    ],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "RSA",
        "KOR"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "PAR",
        "TUR",
        "AUS"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "TUN",
        "JPN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "NOR",
        "SCO",
        "NZL",
        "ECU",
        "TUR",
        "TUN",
        "ALG",
        "BIH"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUN",
          "winner": "FRA",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "BIH",
          "winner": "BIH",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "ALG",
          "winner": "BEL",
          "loser": "ALG"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "CIV",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "SCO",
          "winner": "CZE",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "ECU",
          "winner": "POR",
          "loser": "ECU"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "BIH",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "BIH"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "CIV",
          "winner": "BRA",
          "loser": "CIV"
        },
        {
          "id": 6,
          "team1": "CZE",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CZE"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "FRA",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "POR",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group I": "NOR",
      "Group C": "SCO",
      "Group G": "NZL",
      "Group E": "ECU",
      "Group D": "TUR",
      "Group F": "TUN",
      "Group J": "ALG",
      "Group B": "BIH"
    },
    "most_goals": "GER",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "France"
  },
  {
    "name": "Kiwi Red",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "SWE",
        "AUS",
        "NZL",
        "SCO",
        "CZE",
        "CIV",
        "NOR",
        "PAN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "BIH",
          "winner": "KOR",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "CIV",
          "winner": "USA",
          "loser": "CIV"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "TUR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "BRA",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "POR",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "BRA",
        "winner": "FRA",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group F": "SWE",
      "Group D": "AUS",
      "Group G": "NZL",
      "Group C": "SCO",
      "Group A": "CZE",
      "Group E": "CIV",
      "Group I": "NOR",
      "Group L": "PAN"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "1",
        "1"
      ],
      "p": [
        "4",
        "2"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Vavavoom",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "CZE",
        "KOR",
        "MEX",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "MEX",
        "ECU",
        "NOR",
        "JPN",
        "AUS",
        "SCO",
        "GHA",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "ECU",
          "winner": "ECU",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "MEX",
          "winner": "BEL",
          "loser": "MEX"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "SCO",
          "winner": "CZE",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "NZL",
          "winner": "USA",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "ECU",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "ECU"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "CZE",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CZE"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "FRA",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "TBD",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group A": "MEX",
      "Group E": "ECU",
      "Group I": "NOR",
      "Group F": "JPN",
      "Group D": "AUS",
      "Group C": "SCO",
      "Group L": "GHA",
      "Group J": "ALG"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "2",
        "0"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "France"
  },
  {
    "name": "Mike",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "CZE",
        "MAR",
        "AUS",
        "ECU",
        "SWE",
        "AUT",
        "BIH",
        "NOR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "BIH",
          "winner": "TUR",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "USA"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "AUT",
          "winner": "SUI",
          "loser": "AUT"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "ECU",
          "winner": "POR",
          "loser": "ECU"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MAR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MAR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "POR",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "BRA",
        "winner": "FRA",
        "loser": "BRA"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group C": "MAR",
      "Group D": "AUS",
      "Group E": "ECU",
      "Group F": "SWE",
      "Group J": "AUT",
      "Group B": "BIH",
      "Group I": "NOR"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Jimmy's Angels",
    "league": [
      "The Blakes"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "CRO",
        "ENG",
        "PAN",
        "GHA"
      ],
      "third": [
        "KOR",
        "CAN",
        "SCO",
        "AUS",
        "ECU",
        "SWE",
        "EGY",
        "SEN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "BIH",
          "winner": "BIH",
          "loser": "CZE"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CAN",
          "winner": "TUR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "NOR",
          "winner": "CIV",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "SCO",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "SEN",
          "winner": "CRO",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "USA"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "ECU",
          "winner": "POR",
          "loser": "ECU"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "BIH",
          "team2": "NED",
          "winner": "NED",
          "loser": "BIH"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "TUR",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "CIV",
          "winner": "BRA",
          "loser": "CIV"
        },
        {
          "id": 6,
          "team1": "SCO",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "SCO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "NED",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "TUR",
          "winner": "ESP",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "CRO",
          "winner": "BRA",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "BRA",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NED",
        "team2": "POR",
        "winner": "TBD",
        "loser": "NED"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "ESP",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group A": "KOR",
      "Group B": "CAN",
      "Group C": "SCO",
      "Group D": "AUS",
      "Group E": "ECU",
      "Group F": "SWE",
      "Group G": "EGY",
      "Group I": "SEN"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "2",
        "1"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Saka Potatoes",
    "league": [
      "Yodas",
      "The Blakes",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "MAR",
        "BRA",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "CZE",
        "SCO",
        "PAR",
        "SEN",
        "SWE",
        "CIV",
        "UZB",
        "QAT"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "BRA",
          "winner": "JPN",
          "loser": "BRA"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "POR"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "QAT",
          "winner": "USA",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "NED",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "NZL",
          "winner": "TUR",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "CIV",
          "winner": "SUI",
          "loser": "CIV"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "SEN",
          "winner": "COL",
          "loser": "SEN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "JPN",
          "winner": "CAN",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "NED",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "NED"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "COL",
          "winner": "COL",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "CAN",
          "winner": "FRA",
          "loser": "CAN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "ENG",
          "winner": "NOR",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "COL",
          "winner": "ARG",
          "loser": "COL"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "NOR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "NOR",
        "winner": "FRA",
        "loser": "NOR"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group C": "SCO",
      "Group D": "PAR",
      "Group I": "SEN",
      "Group F": "SWE",
      "Group E": "CIV",
      "Group K": "UZB",
      "Group B": "QAT"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Colombian Soul",
    "league": [
      "Yodas",
      "Taities",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "RSA",
        "CZE"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "MAR",
        "BRA",
        "SCO",
        "HAI"
      ],
      "D": [
        "PAR",
        "USA",
        "AUS",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "JOR",
        "ALG",
        "AUT"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SWE",
        "AUS",
        "RSA",
        "GHA",
        "NOR",
        "EGY",
        "CIV",
        "SCO"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "BRA",
          "winner": "NED",
          "loser": "BRA"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "JOR",
          "winner": "ESP",
          "loser": "JOR"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "CIV",
          "winner": "PAR",
          "loser": "CIV"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "RSA",
          "winner": "BEL",
          "loser": "RSA"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "MAR"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "USA"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "COL",
          "loser": "ESP"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 5,
          "team1": "JPN",
          "team2": "ECU",
          "winner": "ECU",
          "loser": "JPN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "NED",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "COL",
          "team2": "BEL",
          "winner": "COL",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "ECU",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "ECU"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "COL",
          "winner": "COL",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NED",
        "team2": "ENG",
        "winner": "NED",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "COL",
        "team2": "POR",
        "winner": "COL",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group F": "SWE",
      "Group D": "AUS",
      "Group A": "RSA",
      "Group L": "GHA",
      "Group I": "NOR",
      "Group G": "EGY",
      "Group E": "CIV",
      "Group C": "SCO"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "2"
      ],
      "p": [
        "6",
        "5"
      ]
    },
    "Country": "Colombia"
  },
  {
    "name": "Alexis Sanchez",
    "league": [
      "CAPTIF"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "QAT",
        "BIH"
      ],
      "C": [
        "MAR",
        "BRA",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "PAR",
        "AUS",
        "TUR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "AUS",
        "ECU",
        "CRO",
        "SCO",
        "CZE",
        "SWE",
        "KSA",
        "QAT"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SCO",
          "winner": "GER",
          "loser": "SCO"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "AUS",
          "winner": "FRA",
          "loser": "AUS"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "SUI",
          "winner": "MEX",
          "loser": "SUI"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "BRA",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "QAT",
          "winner": "USA",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "JPN",
          "winner": "MAR",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "KSA",
          "winner": "KOR",
          "loser": "KSA"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "ECU",
          "winner": "ENG",
          "loser": "ECU"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "NZL",
          "winner": "PAR",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "SWE",
          "winner": "CAN",
          "loser": "SWE"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "BRA",
          "winner": "BRA",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "MAR",
          "team2": "SEN",
          "winner": "MAR",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "BRA",
          "winner": "FRA",
          "loser": "BRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "MAR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MAR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "FRA",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group D": "AUS",
      "Group E": "ECU",
      "Group L": "CRO",
      "Group C": "SCO",
      "Group A": "CZE",
      "Group F": "SWE",
      "Group H": "KSA",
      "Group B": "QAT"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Chile"
  },
  {
    "name": "Unusual Suspects",
    "league": [
      "Yodas"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "BIH",
        "QAT"
      ],
      "C": [
        "MAR",
        "BRA",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "TUR",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "SCO",
        "NZL",
        "CIV",
        "CRO",
        "TUR",
        "NOR",
        "TUN",
        "AUT"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUN",
          "winner": "FRA",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "SUI",
          "winner": "KOR",
          "loser": "SUI"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "BRA",
          "winner": "NED",
          "loser": "BRA"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "CIV",
          "winner": "USA",
          "loser": "CIV"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "AUT",
          "winner": "BEL",
          "loser": "AUT"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "JPN",
          "winner": "MAR",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "SCO",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "NZL",
          "winner": "CAN",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "GHA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GHA"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "MAR",
          "team2": "ECU",
          "winner": "MAR",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "SCO",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "SCO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "MAR",
          "team2": "ENG",
          "winner": "MAR",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "MAR",
          "team2": "ARG",
          "winner": "MAR",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "TBD",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "MAR",
        "winner": "FRA",
        "loser": "MAR"
      }
    },
    "third_place": {
      "Group C": "SCO",
      "Group G": "NZL",
      "Group E": "CIV",
      "Group L": "CRO",
      "Group D": "TUR",
      "Group I": "NOR",
      "Group F": "TUN",
      "Group J": "AUT"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "0",
        "0"
      ],
      "e": [
        "1",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Jack",
    "league": [
      "Matt's Mates",
      "UCAFC",
      "UCAFC"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "QAT",
        "CAN",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "AUS",
        "PAR",
        "USA"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "NZL",
        "CAN",
        "CZE",
        "PAN",
        "PAR",
        "SCO",
        "NOR",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "NZL",
          "winner": "FRA",
          "loser": "NZL"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "QAT",
          "winner": "KOR",
          "loser": "QAT"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CAN",
          "winner": "TUR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "CRO",
          "loser": "ESP"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "CRO",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "CRO"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "MAR",
          "team2": "BEL",
          "winner": "MAR",
          "loser": "BEL"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "BEL",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "BEL"
      },
      "F": {
        "id": 1,
        "team1": "MAR",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "MAR"
      }
    },
    "third_place": {
      "Group G": "NZL",
      "Group B": "CAN",
      "Group A": "CZE",
      "Group L": "PAN",
      "Group D": "PAR",
      "Group C": "SCO",
      "Group I": "NOR",
      "Group J": "ALG"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Giving it a Nudge",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "QAT",
        "BIH",
        "SUI",
        "CAN"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "PAR",
        "TUR",
        "AUS",
        "USA"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "TUN",
        "JPN",
        "SWE"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "NZL",
        "AUS",
        "SUI",
        "JPN",
        "AUT",
        "HAI",
        "SEN",
        "KOR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "BIH",
          "winner": "CZE",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "TUN",
          "winner": "BRA",
          "loser": "TUN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "HAI",
          "winner": "MEX",
          "loser": "HAI"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "AUT",
          "winner": "CRO",
          "loser": "AUT"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "TUR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "QAT",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "QAT"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "SEN",
          "winner": "POR",
          "loser": "SEN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "NED",
          "winner": "NED",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ENG",
          "loser": "ESP"
        },
        {
          "id": 4,
          "team1": "SUI",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "SUI"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "NZL",
          "team2": "POR",
          "winner": "POR",
          "loser": "NZL"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "GER",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "BEL",
          "winner": "ENG",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "NOR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CRO",
          "team2": "POR",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "GER",
        "team2": "CRO",
        "winner": "GER",
        "loser": "CRO"
      },
      "F": {
        "id": 1,
        "team1": "ENG",
        "team2": "POR",
        "winner": "POR",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group G": "NZL",
      "Group D": "AUS",
      "Group B": "SUI",
      "Group F": "JPN",
      "Group J": "AUT",
      "Group C": "HAI",
      "Group I": "SEN",
      "Group A": "KOR"
    },
    "most_goals": "NOR",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "0",
        "0"
      ],
      "e": [
        "1",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Dark Lord of the Sith",
    "league": [
      "Yodas",
      "Emperors",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "CZE",
        "MEX",
        "RSA",
        "KOR"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "TUR",
        "AUS",
        "PAR",
        "USA"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "TUN",
        "SWE",
        "JPN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "MAR",
        "CAN",
        "PAR",
        "SWE",
        "CIV",
        "ALG",
        "GHA",
        "SEN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "PAR",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "FRA"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "BIH",
          "winner": "BIH",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "ENG",
          "winner": "POR",
          "loser": "ENG"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CAN",
          "winner": "TUR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CIV",
          "winner": "BEL",
          "loser": "CIV"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "TUN",
          "winner": "BRA",
          "loser": "TUN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "ECU",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "CZE"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CRO"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "ALG",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "PAR",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "BIH",
          "team2": "NED",
          "winner": "NED",
          "loser": "BIH"
        },
        {
          "id": 3,
          "team1": "POR",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "POR"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MAR",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "MAR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "ALG",
          "team2": "COL",
          "winner": "COL",
          "loser": "ALG"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "SWE",
          "team2": "NED",
          "winner": "NED",
          "loser": "SWE"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "ESP"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "COL",
          "winner": "ARG",
          "loser": "COL"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NED",
        "team2": "ARG",
        "winner": "NED",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "BEL",
        "team2": "BRA",
        "winner": "BEL",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group C": "MAR",
      "Group B": "CAN",
      "Group D": "PAR",
      "Group F": "SWE",
      "Group E": "CIV",
      "Group J": "ALG",
      "Group L": "GHA",
      "Group I": "SEN"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "1"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Little JB",
    "league": [
      "The Blakes"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "NZL",
        "AUS",
        "CIV",
        "SWE",
        "NOR",
        "CAN",
        "AUT",
        "CZE"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "BIH",
          "winner": "KOR",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "CAN",
          "winner": "USA",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CIV",
          "winner": "MEX",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "AUT",
          "winner": "CRO",
          "loser": "AUT"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "TUR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "NOR",
          "winner": "POR",
          "loser": "NOR"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "NZL",
          "team2": "POR",
          "winner": "POR",
          "loser": "NZL"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "FRA",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "CRO",
          "winner": "BRA",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "BRA",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "FRA",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group G": "NZL",
      "Group D": "AUS",
      "Group E": "CIV",
      "Group F": "SWE",
      "Group I": "NOR",
      "Group B": "CAN",
      "Group J": "AUT",
      "Group A": "CZE"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "2",
        "1"
      ],
      "f": [
        "4",
        "2"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Jang",
    "league": [
      "Taities",
      "kids"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "CZE",
        "AUS",
        "SWE",
        "EGY",
        "GHA",
        "COD",
        "SEN",
        "CIV"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "SEN",
          "winner": "USA",
          "loser": "SEN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "ECU",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "CIV",
          "winner": "KOR",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COD",
          "winner": "ENG",
          "loser": "COD"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "TUR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "MEX",
          "loser": "NED"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MEX",
          "winner": "FRA",
          "loser": "MEX"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "FRA"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group D": "AUS",
      "Group F": "SWE",
      "Group G": "EGY",
      "Group L": "GHA",
      "Group K": "COD",
      "Group I": "SEN",
      "Group E": "CIV"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "One Tonne Chelsea Bun",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COD",
        "COL",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SWE",
        "SEN",
        "MAR",
        "CIV",
        "AUS",
        "GHA",
        "CZE",
        "COL"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "SCO",
          "winner": "JPN",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COD",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COD"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "SEN",
          "winner": "TUR",
          "loser": "SEN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COL",
          "winner": "ENG",
          "loser": "COL"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "EGY",
          "winner": "USA",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "CIV",
          "winner": "SUI",
          "loser": "CIV"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "TUR",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MAR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MAR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "TUR",
          "winner": "ESP",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "POR",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group F": "SWE",
      "Group I": "SEN",
      "Group C": "MAR",
      "Group E": "CIV",
      "Group D": "AUS",
      "Group L": "GHA",
      "Group A": "CZE",
      "Group K": "COL"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Glenn W",
    "league": [
      "Emperors"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "PAR",
        "AUS",
        "USA"
      ],
      "E": [
        "ECU",
        "GER",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "NZL",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "CZE",
        "AUS",
        "SWE",
        "SEN",
        "ALG",
        "CIV",
        "SCO",
        "GHA"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "AUS",
          "winner": "ECU",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "MAR",
          "winner": "JPN",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "COL",
          "loser": "ENG"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CIV",
          "winner": "TUR",
          "loser": "CIV"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "GER",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "GER"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "SCO",
          "winner": "KOR",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "SEN",
          "winner": "CRO",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "IRN",
          "winner": "PAR",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "ECU"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "SUI",
          "loser": "POR"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "ESP"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "CRO",
          "winner": "BRA",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "SUI",
          "winner": "ARG",
          "loser": "SUI"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "BEL",
          "winner": "FRA",
          "loser": "BEL"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "BEL",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "BEL"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group D": "AUS",
      "Group F": "SWE",
      "Group I": "SEN",
      "Group J": "ALG",
      "Group E": "CIV",
      "Group C": "SCO",
      "Group L": "GHA"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "United States"
  },
  {
    "name": "DavidW",
    "league": [
      "Yodas",
      "UCAFC"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "CZE",
        "SWE",
        "AUS",
        "EGY",
        "SEN",
        "SCO",
        "PAN",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "ALG",
          "winner": "USA",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "NZL",
          "winner": "TUR",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "FRA"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "ESP",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group F": "SWE",
      "Group D": "AUS",
      "Group G": "EGY",
      "Group I": "SEN",
      "Group C": "SCO",
      "Group L": "PAN",
      "Group J": "ALG"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Tu-chel for school",
    "league": [
      "Yodas",
      "UCAFC",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "RSA",
        "CZE"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "PAR",
        "AUS"
      ],
      "E": [
        "ECU",
        "GER",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "SCO",
        "CRO",
        "COD",
        "RSA",
        "SEN",
        "PAR",
        "TUN",
        "CAN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "PAR",
          "winner": "ECU",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUN",
          "winner": "FRA",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "BIH",
          "winner": "KOR",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CAN",
          "winner": "TUR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "RSA",
          "winner": "BEL",
          "loser": "RSA"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "GER",
          "team2": "NOR",
          "winner": "GER",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COD",
          "winner": "ENG",
          "loser": "COD"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "USA"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "SEN",
          "winner": "SUI",
          "loser": "SEN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "ECU"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "GER",
          "winner": "BRA",
          "loser": "GER"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "FRA",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group C": "SCO",
      "Group L": "CRO",
      "Group K": "COD",
      "Group A": "RSA",
      "Group I": "SEN",
      "Group D": "PAR",
      "Group F": "TUN",
      "Group B": "CAN"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "2",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Salt n Pepe",
    "league": [
      "Yodas",
      "UCAFC",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "RSA",
        "CZE"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "CIV",
        "GER",
        "ECU",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "NOR",
        "EGY",
        "AUT",
        "SWE",
        "ECU",
        "PAR",
        "QAT",
        "SCO"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "CIV",
          "team2": "PAR",
          "winner": "CIV",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "MAR",
          "winner": "JPN",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "QAT",
          "winner": "USA",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "AUT",
          "winner": "BEL",
          "loser": "AUT"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "GER",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "GER"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "ECU",
          "winner": "POR",
          "loser": "ECU"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "CIV",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "CIV"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "EGY",
          "team2": "POR",
          "winner": "POR",
          "loser": "EGY"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "BRA",
        "winner": "FRA",
        "loser": "BRA"
      }
    },
    "third_place": {
      "Group I": "NOR",
      "Group G": "EGY",
      "Group J": "AUT",
      "Group F": "SWE",
      "Group E": "ECU",
      "Group D": "PAR",
      "Group B": "QAT",
      "Group C": "SCO"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "I Predict Therefore I Am",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "RSA",
        "KOR"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "TUR",
        "PAR",
        "USA",
        "AUS"
      ],
      "E": [
        "ECU",
        "GER",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "HAI",
        "CAN",
        "CIV",
        "NOR",
        "IRN",
        "SWE",
        "AUT",
        "CRO"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "HAI",
          "winner": "ECU",
          "loser": "HAI"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "BIH",
          "winner": "BIH",
          "loser": "CZE"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "JPN"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "CAN",
          "winner": "TUR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "AUT",
          "winner": "AUT",
          "loser": "BEL"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "GER",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "GER"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CIV",
          "winner": "CIV",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "EGY",
          "winner": "PAR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "IRN",
          "winner": "SUI",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "ECU"
        },
        {
          "id": 2,
          "team1": "BIH",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "BIH"
        },
        {
          "id": 3,
          "team1": "GHA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GHA"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "AUT",
          "winner": "AUT",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "CIV",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CIV"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "MAR",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "MAR",
        "team2": "BRA",
        "winner": "MAR",
        "loser": "BRA"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ESP",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group C": "HAI",
      "Group B": "CAN",
      "Group E": "CIV",
      "Group I": "NOR",
      "Group G": "IRN",
      "Group F": "SWE",
      "Group J": "AUT",
      "Group L": "CRO"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "0",
        "1"
      ],
      "f": [
        "2",
        "2"
      ],
      "e": [
        "3",
        "2"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Austria"
  },
  {
    "name": "Crouch Potato",
    "league": [
      "Yodas"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "MAR",
        "BRA",
        "HAI",
        "SCO"
      ],
      "D": [
        "TUR",
        "USA",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "IRN",
        "EGY",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "CZE",
        "BIH",
        "EGY",
        "CIV",
        "SEN",
        "AUT",
        "GHA",
        "KSA"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "CZE",
          "winner": "GER",
          "loser": "CZE"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "EGY",
          "winner": "FRA",
          "loser": "EGY"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "BRA",
          "winner": "JPN",
          "loser": "BRA"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "BIH",
          "winner": "TUR",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KSA",
          "winner": "BEL",
          "loser": "KSA"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "NED",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CIV",
          "winner": "CIV",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "IRN",
          "winner": "USA",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "AUT",
          "winner": "SUI",
          "loser": "AUT"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "MAR",
          "team2": "NOR",
          "winner": "MAR",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "CIV",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CIV"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "MAR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MAR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ESP",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "FRA",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group B": "BIH",
      "Group G": "EGY",
      "Group E": "CIV",
      "Group I": "SEN",
      "Group J": "AUT",
      "Group L": "GHA",
      "Group H": "KSA"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Spurstragic",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "EGY",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SEN",
        "GHA",
        "PAR",
        "CIV",
        "SWE",
        "CZE",
        "ALG",
        "COD"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "MAR",
          "winner": "JPN",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "ECU",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "CIV",
          "winner": "KOR",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "COD",
          "winner": "ENG",
          "loser": "COD"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "IRN",
          "winner": "IRN",
          "loser": "USA"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "SEN",
          "team2": "BEL",
          "winner": "SEN",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "IRN",
          "winner": "ARG",
          "loser": "IRN"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "SEN",
          "winner": "ESP",
          "loser": "SEN"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "POR",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "BRA",
        "winner": "FRA",
        "loser": "BRA"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group I": "SEN",
      "Group L": "GHA",
      "Group D": "PAR",
      "Group E": "CIV",
      "Group F": "SWE",
      "Group A": "CZE",
      "Group J": "ALG",
      "Group K": "COD"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "3",
        "2"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Lara",
    "league": [
      "Scotties"
    ],
    "groups": {
      "A": [
        "CZE",
        "RSA",
        "MEX",
        "KOR"
      ],
      "B": [
        "QAT",
        "CAN",
        "SUI",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "CUW",
        "ECU",
        "CIV"
      ],
      "F": [
        "JPN",
        "SWE",
        "TUN",
        "NED"
      ],
      "G": [
        "NZL",
        "BEL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "IRQ",
        "SEN"
      ],
      "J": [
        "ARG",
        "JOR",
        "AUT",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "SUI",
        "MEX",
        "ECU",
        "IRQ",
        "TUN",
        "PAR",
        "PAN",
        "CPV"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUN",
          "winner": "FRA",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "RSA",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "RSA"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "SCO",
          "winner": "JPN",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "JOR",
          "winner": "ESP",
          "loser": "JOR"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "SUI",
          "winner": "USA",
          "loser": "SUI"
        },
        {
          "id": 8,
          "team1": "NZL",
          "team2": "MEX",
          "winner": "NZL",
          "loser": "MEX"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CUW",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "CUW"
        },
        {
          "id": 11,
          "team1": "CZE",
          "team2": "CPV",
          "winner": "CPV",
          "loser": "CZE"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "IRQ",
          "winner": "ENG",
          "loser": "IRQ"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "BEL",
          "winner": "AUS",
          "loser": "BEL"
        },
        {
          "id": 15,
          "team1": "QAT",
          "team2": "ECU",
          "winner": "ECU",
          "loser": "QAT"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "NZL",
          "winner": "USA",
          "loser": "NZL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "CPV",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "CPV"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "ECU",
          "team2": "POR",
          "winner": "POR",
          "loser": "ECU"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "USA",
          "loser": "ESP"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "JPN",
          "team2": "USA",
          "winner": "JPN",
          "loser": "USA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "USA",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "USA"
      },
      "F": {
        "id": 1,
        "team1": "JPN",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "JPN"
      }
    },
    "third_place": {
      "Group B": "SUI",
      "Group A": "MEX",
      "Group E": "ECU",
      "Group I": "IRQ",
      "Group F": "TUN",
      "Group D": "PAR",
      "Group L": "PAN",
      "Group H": "CPV"
    },
    "most_goals": "ARG",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "0",
        "0"
      ],
      "e": [
        "1",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Why,FIFA, Why?",
    "league": [
      "Taities"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "BIH",
        "CAN",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "PAR",
        "TUR",
        "AUS",
        "USA"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "TUN",
        "JPN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "NOR",
        "SEN",
        "FRA",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "CRO",
        "GHA",
        "ENG",
        "PAN"
      ],
      "third": [
        "ENG",
        "FRA",
        "AUS",
        "CAN",
        "KOR",
        "ECU",
        "ALG",
        "TUN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "TUN",
          "winner": "NOR",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "BIH",
          "winner": "CZE",
          "loser": "BIH"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "PAR",
          "team2": "CAN",
          "winner": "PAR",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "CIV",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "ECU",
          "winner": "MEX",
          "loser": "ECU"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "CRO"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "TUR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "ALG",
          "winner": "SUI",
          "loser": "ALG"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "ENG",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NOR",
          "winner": "GER",
          "loser": "NOR"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "NED",
          "winner": "NED",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "PAR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "CIV",
          "winner": "BRA",
          "loser": "CIV"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "GER",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "FRA",
          "winner": "BRA",
          "loser": "FRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "GER",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "BRA",
          "loser": "ARG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "GER",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "GER"
      }
    },
    "third_place": {
      "Group L": "ENG",
      "Group I": "FRA",
      "Group D": "AUS",
      "Group B": "CAN",
      "Group A": "KOR",
      "Group E": "ECU",
      "Group J": "ALG",
      "Group F": "TUN"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "MogAnna",
    "league": [
      "Yodas",
      "UCAFC",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "QAT",
        "BIH",
        "CAN"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "NOR",
        "SCO",
        "CZE",
        "SWE",
        "AUS",
        "ECU",
        "AUT",
        "GHA"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "QAT",
          "winner": "KOR",
          "loser": "QAT"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "ECU",
          "winner": "USA",
          "loser": "ECU"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ENG"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "TUR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "AUT",
          "winner": "SUI",
          "loser": "AUT"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "ESP",
        "loser": "BRA"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "FRA",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group I": "NOR",
      "Group C": "SCO",
      "Group A": "CZE",
      "Group F": "SWE",
      "Group D": "AUS",
      "Group E": "ECU",
      "Group J": "AUT",
      "Group L": "GHA"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "BarbW",
    "league": [
      "Yodas",
      "Emperors",
      "donuts"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "SCO",
        "HAI",
        "MAR"
      ],
      "D": [
        "USA",
        "PAR",
        "AUS",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "AUS",
        "CZE",
        "JPN",
        "PAN",
        "UZB",
        "EGY",
        "HAI",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "SUI",
          "winner": "MEX",
          "loser": "SUI"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "ALG",
          "winner": "USA",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "BRA"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "HAI",
          "winner": "KOR",
          "loser": "HAI"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "PAR"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "EGY",
          "winner": "CAN",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "SWE",
          "team2": "NOR",
          "winner": "SWE",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "NED",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "SWE",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "SWE"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "NED",
        "team2": "ENG",
        "winner": "NED",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group D": "AUS",
      "Group A": "CZE",
      "Group F": "JPN",
      "Group L": "PAN",
      "Group K": "UZB",
      "Group G": "EGY",
      "Group C": "HAI",
      "Group J": "ALG"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "The Phantom Menace",
    "league": [
      "Yodas",
      "Scotties",
      "Taities",
      "UCAFC"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "TUR",
        "USA",
        "AUS",
        "PAR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "AUT",
        "ARG",
        "ALG",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "UZB",
        "COD"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "AUS",
        "GHA",
        "SEN",
        "NZL",
        "SCO",
        "JPN",
        "CZE",
        "ECU"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "ENG",
          "winner": "POR",
          "loser": "ENG"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ARG",
          "winner": "ESP",
          "loser": "ARG"
        },
        {
          "id": 7,
          "team1": "TUR",
          "team2": "ECU",
          "winner": "TUR",
          "loser": "ECU"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "SCO",
          "loser": "MEX"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "CRO"
        },
        {
          "id": 13,
          "team1": "AUT",
          "team2": "URU",
          "winner": "URU",
          "loser": "AUT"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "EGY",
          "winner": "USA",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "COL"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "POR",
          "team2": "ESP",
          "winner": "POR",
          "loser": "ESP"
        },
        {
          "id": 4,
          "team1": "TUR",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "TUR"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "SCO",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "SCO"
        },
        {
          "id": 7,
          "team1": "URU",
          "team2": "USA",
          "winner": "URU",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "GHA",
          "winner": "SUI",
          "loser": "GHA"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "GER",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "POR",
          "team2": "BEL",
          "winner": "POR",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "SEN",
          "winner": "BRA",
          "loser": "SEN"
        },
        {
          "id": 4,
          "team1": "URU",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "URU"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "POR",
          "winner": "GER",
          "loser": "POR"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "SUI",
          "winner": "BRA",
          "loser": "SUI"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "POR",
        "team2": "SUI",
        "winner": "SUI",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "GER",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "GER"
      }
    },
    "third_place": {
      "Group D": "AUS",
      "Group L": "GHA",
      "Group I": "SEN",
      "Group G": "NZL",
      "Group C": "SCO",
      "Group F": "JPN",
      "Group A": "CZE",
      "Group E": "ECU"
    },
    "most_goals": "BRA",
    "score": {
      "h": [
        "0",
        "1"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "2"
      ],
      "p": [
        "5",
        "4"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Bradshaw",
    "league": [
      "Canaries",
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "ECU",
        "GER",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "JOR",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "CRO",
        "CZE",
        "SCO",
        "PAR",
        "SWE",
        "NZL",
        "CIV",
        "BIH"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "PAR",
          "winner": "ECU",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "BIH",
          "winner": "USA",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "GER",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "GER"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "CIV",
          "winner": "ENG",
          "loser": "CIV"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "NZL",
          "winner": "SUI",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "ECU",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "ECU"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "KOR",
          "loser": "NED"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "KOR",
          "winner": "FRA",
          "loser": "KOR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ESP",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "POR",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group L": "CRO",
      "Group A": "CZE",
      "Group C": "SCO",
      "Group D": "PAR",
      "Group F": "SWE",
      "Group G": "NZL",
      "Group E": "CIV",
      "Group B": "BIH"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "1"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Seb K",
    "league": [
      "donuts"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "KOR",
        "RSA"
      ],
      "B": [
        "SUI",
        "QAT",
        "CAN",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "USA",
        "PAR",
        "AUS",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "JOR",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "AUS",
        "KOR",
        "CAN",
        "NZL",
        "SWE",
        "PAN",
        "SEN",
        "JOR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "AUS",
          "winner": "GER",
          "loser": "AUS"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "NZL",
          "winner": "FRA",
          "loser": "NZL"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "QAT",
          "winner": "QAT",
          "loser": "CZE"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "CAN",
          "winner": "USA",
          "loser": "CAN"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SWE",
          "winner": "MEX",
          "loser": "SWE"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "EGY",
          "winner": "PAR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "JOR",
          "winner": "SUI",
          "loser": "JOR"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "QAT",
          "team2": "NED",
          "winner": "NED",
          "loser": "QAT"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "PAR",
          "loser": "ARG"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NED",
          "winner": "GER",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "PAR",
          "team2": "POR",
          "winner": "POR",
          "loser": "PAR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "GER",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "POR",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "TBD",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "GER",
        "team2": "POR",
        "winner": "GER",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group D": "AUS",
      "Group A": "KOR",
      "Group B": "CAN",
      "Group G": "NZL",
      "Group F": "SWE",
      "Group L": "PAN",
      "Group I": "SEN",
      "Group J": "JOR"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "1",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Gagner, Nous Ferons",
    "league": [
      "Yodas",
      "UCAFC"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "BIH",
        "QAT"
      ],
      "C": [
        "MAR",
        "BRA",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "TUR",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "IRN",
        "EGY",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "COL",
        "POR",
        "UZB",
        "COD"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "SWE",
        "CZE",
        "TUR",
        "GHA",
        "AUT",
        "SCO",
        "EGY",
        "CIV"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "SUI",
          "winner": "MEX",
          "loser": "SUI"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "BRA",
          "winner": "NED",
          "loser": "BRA"
        },
        {
          "id": 5,
          "team1": "POR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "POR"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "AUT",
          "winner": "USA",
          "loser": "AUT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "MAR",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "MAR"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "SCO",
          "winner": "KOR",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "CIV",
          "winner": "CRO",
          "loser": "CIV"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "IRN",
          "winner": "AUS",
          "loser": "IRN"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "CAN"
        },
        {
          "id": 16,
          "team1": "COL",
          "team2": "GHA",
          "winner": "COL",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "ENG",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "JPN",
          "team2": "NOR",
          "winner": "JPN",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "CRO",
          "winner": "KOR",
          "loser": "CRO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "EGY",
          "team2": "COL",
          "winner": "COL",
          "loser": "EGY"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "JPN",
          "team2": "KOR",
          "winner": "KOR",
          "loser": "JPN"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "COL",
          "winner": "ARG",
          "loser": "COL"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "KOR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "KOR",
        "winner": "ESP",
        "loser": "KOR"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "FRA",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group F": "SWE",
      "Group A": "CZE",
      "Group D": "TUR",
      "Group L": "GHA",
      "Group J": "AUT",
      "Group C": "SCO",
      "Group G": "EGY",
      "Group E": "CIV"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "0",
        "1"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "1"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "TedLasso",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "AUS",
        "USA",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "CIV",
        "ECU",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "EGY",
        "NZL",
        "BEL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SWE",
        "BEL",
        "SEN",
        "ECU",
        "PAR",
        "CZE",
        "KSA",
        "MAR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "MAR",
          "winner": "GER",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "COL",
          "loser": "CRO"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "AUS",
          "team2": "ECU",
          "winner": "AUS",
          "loser": "ECU"
        },
        {
          "id": 8,
          "team1": "EGY",
          "team2": "CZE",
          "winner": "EGY",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "CIV",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "CIV"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "KSA",
          "winner": "MEX",
          "loser": "KSA"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "NZL",
          "winner": "USA",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "BEL",
          "winner": "CAN",
          "loser": "BEL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAR",
          "winner": "POR",
          "loser": "PAR"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "SUI",
          "team2": "NED",
          "winner": "NED",
          "loser": "SUI"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "USA",
          "winner": "ARG",
          "loser": "USA"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "AUS",
          "winner": "ESP",
          "loser": "AUS"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ENG",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "ARG",
        "winner": "FRA",
        "loser": "ARG"
      }
    },
    "third_place": {
      "Group F": "SWE",
      "Group G": "BEL",
      "Group I": "SEN",
      "Group E": "ECU",
      "Group D": "PAR",
      "Group A": "CZE",
      "Group H": "KSA",
      "Group C": "MAR"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "3",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Romania"
  },
  {
    "name": "Alex",
    "league": [
      "Matt's Mates"
    ],
    "groups": {
      "A": [
        "MEX",
        "CZE",
        "RSA",
        "KOR"
      ],
      "B": [
        "QAT",
        "CAN",
        "SUI",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "SWE",
        "NED",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "NOR",
        "FRA",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "JOR",
        "AUT",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SCO",
        "SUI",
        "NZL",
        "PAR",
        "AUT",
        "RSA",
        "CIV",
        "SEN"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SCO",
          "winner": "GER",
          "loser": "SCO"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "PAR",
          "winner": "NOR",
          "loser": "PAR"
        },
        {
          "id": 3,
          "team1": "CZE",
          "team2": "CAN",
          "winner": "CZE",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "SWE",
          "team2": "MAR",
          "winner": "SWE",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "JOR",
          "winner": "ESP",
          "loser": "JOR"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "SUI",
          "winner": "USA",
          "loser": "SUI"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "RSA",
          "winner": "BEL",
          "loser": "RSA"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "FRA",
          "winner": "ECU",
          "loser": "FRA"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CIV",
          "winner": "MEX",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "AUT",
          "winner": "ENG",
          "loser": "AUT"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "AUS",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "QAT",
          "team2": "NZL",
          "winner": "QAT",
          "loser": "NZL"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "SEN",
          "winner": "POR",
          "loser": "SEN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "NOR",
          "winner": "GER",
          "loser": "NOR"
        },
        {
          "id": 2,
          "team1": "CZE",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "CZE"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "QAT",
          "team2": "POR",
          "winner": "POR",
          "loser": "QAT"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SWE",
          "winner": "GER",
          "loser": "SWE"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "ESP"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "BEL",
          "winner": "GER",
          "loser": "BEL"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "ENG",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "BEL",
        "team2": "POR",
        "winner": "BEL",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "GER",
        "team2": "ENG",
        "winner": "GER",
        "loser": "ENG"
      }
    },
    "third_place": {
      "Group C": "SCO",
      "Group B": "SUI",
      "Group G": "NZL",
      "Group D": "PAR",
      "Group J": "AUT",
      "Group A": "RSA",
      "Group E": "CIV",
      "Group I": "SEN"
    },
    "most_goals": "GER",
    "score": {
      "h": [
        "0",
        "1"
      ],
      "f": [
        "1",
        "1"
      ],
      "e": [
        "2",
        "1"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "NZ"
  },
  {
    "name": "Gareth",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "TUR",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "NZL",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "ALG",
        "AUT",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "CZE",
        "SCO",
        "SWE",
        "TUR",
        "AUT",
        "SEN",
        "GHA",
        "CIV"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "COL",
          "loser": "ENG"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "CIV",
          "winner": "USA",
          "loser": "CIV"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "SEN",
          "winner": "CRO",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "AUS"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "AUT",
          "winner": "SUI",
          "loser": "AUT"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "NED",
          "winner": "NED",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "CRO",
          "winner": "MEX",
          "loser": "CRO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "MEX",
          "winner": "NOR",
          "loser": "MEX"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "NOR",
          "team2": "POR",
          "winner": "NOR",
          "loser": "POR"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "FRA",
        "loser": "POR"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "NOR",
        "winner": "ESP",
        "loser": "NOR"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group C": "SCO",
      "Group F": "SWE",
      "Group D": "TUR",
      "Group J": "AUT",
      "Group I": "SEN",
      "Group L": "GHA",
      "Group E": "CIV"
    },
    "most_goals": "NOR",
    "score": {
      "h": [
        "0",
        "1"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Concrete FC",
    "league": [
      "Na"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "CAN",
        "SUI",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "PAR",
        "TUR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "GHA",
        "CRO",
        "PAN"
      ],
      "third": [
        "CZE",
        "TUR",
        "CIV",
        "QAT",
        "SCO",
        "CRO",
        "SEN",
        "SWE"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "SUI",
          "winner": "SUI",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "GHA",
          "winner": "GHA",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "QAT",
          "winner": "USA",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "BRA"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "SEN",
          "winner": "ENG",
          "loser": "SEN"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "PAR",
          "team2": "NZL",
          "winner": "PAR",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "CIV",
          "winner": "CIV",
          "loser": "CAN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "CRO",
          "winner": "POR",
          "loser": "CRO"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "SUI",
          "team2": "NED",
          "winner": "NED",
          "loser": "SUI"
        },
        {
          "id": 3,
          "team1": "GHA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "GHA"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "JPN",
          "team2": "NOR",
          "winner": "JPN",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "PAR",
          "winner": "ARG",
          "loser": "PAR"
        },
        {
          "id": 8,
          "team1": "CIV",
          "team2": "POR",
          "winner": "POR",
          "loser": "CIV"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "JPN",
          "team2": "ENG",
          "winner": "JPN",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "JPN",
          "team2": "POR",
          "winner": "POR",
          "loser": "JPN"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "JPN",
        "winner": "ESP",
        "loser": "JPN"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "FRA",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group A": "CZE",
      "Group D": "TUR",
      "Group E": "CIV",
      "Group B": "QAT",
      "Group C": "SCO",
      "Group L": "CRO",
      "Group I": "SEN",
      "Group F": "SWE"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "0",
        "0"
      ],
      "f": [
        "0",
        "0"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "5",
        "4"
      ]
    },
    "Country": "Chile"
  },
  {
    "name": "Sean M",
    "league": [
      "Matt's Mates"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "SWE",
        "SCO",
        "IRN",
        "GHA",
        "ALG",
        "BIH",
        "CZE",
        "PAR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "CAN",
          "loser": "KOR"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "BIH",
          "winner": "USA",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "ALG",
          "winner": "ENG",
          "loser": "ALG"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "TUR",
          "loser": "EGY"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "IRN",
          "winner": "SUI",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "CAN",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "CAN"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "TUR",
          "winner": "ARG",
          "loser": "TUR"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "FRA",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "ENG",
        "winner": "FRA",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "ESP",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group F": "SWE",
      "Group C": "SCO",
      "Group G": "IRN",
      "Group L": "GHA",
      "Group J": "ALG",
      "Group B": "BIH",
      "Group A": "CZE",
      "Group D": "PAR"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "3",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Brownie United",
    "league": [],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "QAT",
        "BIH"
      ],
      "C": [
        "BRA",
        "SCO",
        "MAR",
        "HAI"
      ],
      "D": [
        "AUS",
        "USA",
        "TUR",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "SWE",
        "JPN",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "JPN",
        "TUR",
        "QAT",
        "CZE",
        "EGY",
        "UZB",
        "CIV",
        "GHA"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "TUR",
          "winner": "GER",
          "loser": "TUR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "SCO",
          "winner": "NED",
          "loser": "SCO"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "AUS",
          "team2": "QAT",
          "winner": "AUS",
          "loser": "QAT"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "SWE",
          "winner": "BRA",
          "loser": "SWE"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "CIV",
          "winner": "MEX",
          "loser": "CIV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "UZB",
          "winner": "ENG",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "USA",
          "team2": "NZL",
          "winner": "NZL",
          "loser": "USA"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "EGY",
          "winner": "SUI",
          "loser": "EGY"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "NED",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "AUS",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "AUS"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "BRA"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "NZL",
          "winner": "ARG",
          "loser": "NZL"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "NED",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "NOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "NED",
          "team2": "ESP",
          "winner": "NED",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ESP",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "NED",
        "team2": "POR",
        "winner": "NED",
        "loser": "POR"
      }
    },
    "third_place": {
      "Group F": "JPN",
      "Group D": "TUR",
      "Group B": "QAT",
      "Group A": "CZE",
      "Group G": "EGY",
      "Group K": "UZB",
      "Group E": "CIV",
      "Group L": "GHA"
    },
    "most_goals": "NED",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Donny",
    "league": [
      "Scotties"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "TUR",
        "PAR",
        "AUS"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "EGY",
        "IRN",
        "NZL"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "NOR",
        "SEN",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "GHA",
        "PAN"
      ],
      "third": [
        "CIV",
        "SCO",
        "CZE",
        "IRN",
        "GHA",
        "SWE",
        "PAR",
        "ALG"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "SWE",
          "winner": "FRA",
          "loser": "SWE"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "CAN",
          "winner": "KOR",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "ALG",
          "winner": "USA",
          "loser": "ALG"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "NOR",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SCO",
          "winner": "MEX",
          "loser": "SCO"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "CIV",
          "winner": "ENG",
          "loser": "CIV"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "TUR",
          "team2": "EGY",
          "winner": "EGY",
          "loser": "TUR"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "IRN",
          "winner": "SUI",
          "loser": "IRN"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "GER",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "NED",
          "winner": "KOR",
          "loser": "NED"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "USA",
          "loser": "BEL"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "NOR",
          "winner": "BRA",
          "loser": "NOR"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "EGY",
          "winner": "ARG",
          "loser": "EGY"
        },
        {
          "id": 8,
          "team1": "SUI",
          "team2": "POR",
          "winner": "POR",
          "loser": "SUI"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "KOR",
          "winner": "GER",
          "loser": "KOR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "USA",
          "winner": "ESP",
          "loser": "USA"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "ARG",
          "loser": "POR"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "ESP",
          "winner": "GER",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "ARG",
          "winner": "ARG",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "BRA",
        "winner": "TBD",
        "loser": "ESP"
      },
      "F": {
        "id": 1,
        "team1": "GER",
        "team2": "ARG",
        "winner": "ARG",
        "loser": "GER"
      }
    },
    "third_place": {
      "Group E": "CIV",
      "Group C": "SCO",
      "Group A": "CZE",
      "Group G": "IRN",
      "Group L": "GHA",
      "Group F": "SWE",
      "Group D": "PAR",
      "Group J": "ALG"
    },
    "most_goals": "GER",
    "score": {
      "h": [
        "1",
        "1"
      ],
      "f": [
        "3",
        "2"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "New Zealand"
  },
  {
    "name": "Tio Paolo",
    "league": [
      "UCAFC"
    ],
    "groups": {
      "A": [
        "KOR",
        "MEX",
        "CZE",
        "RSA"
      ],
      "B": [
        "SUI",
        "CAN",
        "BIH",
        "QAT"
      ],
      "C": [
        "BRA",
        "MAR",
        "SCO",
        "HAI"
      ],
      "D": [
        "USA",
        "AUS",
        "TUR",
        "PAR"
      ],
      "E": [
        "GER",
        "ECU",
        "CUW",
        "CIV"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "EGY",
        "IRN"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "AUT",
        "ALG",
        "JOR"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "NOR",
        "TUR",
        "PAN",
        "CZE",
        "SCO",
        "CPV",
        "BIH",
        "SWE"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "SCO",
          "winner": "GER",
          "loser": "SCO"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUR",
          "winner": "FRA",
          "loser": "TUR"
        },
        {
          "id": 3,
          "team1": "MEX",
          "team2": "CAN",
          "winner": "MEX",
          "loser": "CAN"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "NED",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "AUT",
          "winner": "ESP",
          "loser": "AUT"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "BIH",
          "winner": "USA",
          "loser": "BIH"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "CZE",
          "winner": "BEL",
          "loser": "CZE"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "BRA"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "SEN",
          "loser": "ECU"
        },
        {
          "id": 11,
          "team1": "KOR",
          "team2": "CPV",
          "winner": "KOR",
          "loser": "CPV"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "NOR",
          "winner": "ENG",
          "loser": "NOR"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "AUS",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "SUI",
          "team2": "SWE",
          "winner": "SWE",
          "loser": "SUI"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "NED",
          "winner": "NED",
          "loser": "MEX"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "JPN",
          "team2": "SEN",
          "winner": "JPN",
          "loser": "SEN"
        },
        {
          "id": 6,
          "team1": "KOR",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "KOR"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "SWE",
          "team2": "POR",
          "winner": "POR",
          "loser": "SWE"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "NED",
          "winner": "FRA",
          "loser": "NED"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "JPN",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "JPN"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "ENG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ENG"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "ENG",
        "winner": "ESP",
        "loser": "ENG"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "POR",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group I": "NOR",
      "Group D": "TUR",
      "Group L": "PAN",
      "Group A": "CZE",
      "Group C": "SCO",
      "Group H": "CPV",
      "Group B": "BIH",
      "Group F": "SWE"
    },
    "most_goals": "FRA",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Chile"
  },
  {
    "name": "Hello234",
    "league": [
      "English"
    ],
    "groups": {
      "A": [
        "MEX",
        "RSA",
        "KOR",
        "CZE"
      ],
      "B": [
        "CAN",
        "QAT",
        "SUI",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "NED",
        "JPN",
        "SWE",
        "TUN"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "CPV",
        "KSA"
      ],
      "I": [
        "FRA",
        "NOR",
        "IRQ",
        "SEN"
      ],
      "J": [
        "ARG",
        "ALG",
        "JOR",
        "AUT"
      ],
      "K": [
        "POR",
        "COL",
        "COD",
        "UZB"
      ],
      "L": [
        "ENG",
        "CRO",
        "PAN",
        "GHA"
      ],
      "third": [
        "KOR",
        "SUI",
        "PAN",
        "PAR",
        "IRN",
        "IRQ",
        "SWE",
        "JOR"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "IRN",
          "winner": "FRA",
          "loser": "IRN"
        },
        {
          "id": 3,
          "team1": "RSA",
          "team2": "QAT",
          "winner": "RSA",
          "loser": "QAT"
        },
        {
          "id": 4,
          "team1": "NED",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "NED"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "CRO",
          "winner": "CRO",
          "loser": "COL"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "ALG",
          "winner": "ESP",
          "loser": "ALG"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "SUI",
          "winner": "USA",
          "loser": "SUI"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "KOR",
          "winner": "BEL",
          "loser": "KOR"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "JPN",
          "winner": "BRA",
          "loser": "JPN"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "NOR",
          "winner": "ECU",
          "loser": "NOR"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "SWE",
          "winner": "MEX",
          "loser": "SWE"
        },
        {
          "id": 12,
          "team1": "ENG",
          "team2": "IRQ",
          "winner": "ENG",
          "loser": "IRQ"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "AUS",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "JOR",
          "winner": "CAN",
          "loser": "JOR"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "PAN",
          "winner": "POR",
          "loser": "PAN"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "RSA",
          "team2": "MAR",
          "winner": "MAR",
          "loser": "RSA"
        },
        {
          "id": 3,
          "team1": "CRO",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "CRO"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "ENG",
          "winner": "ENG",
          "loser": "MEX"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "MAR",
          "winner": "FRA",
          "loser": "MAR"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "ENG",
          "winner": "BRA",
          "loser": "ENG"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "FRA"
        },
        {
          "id": 2,
          "team1": "BRA",
          "team2": "POR",
          "winner": "POR",
          "loser": "BRA"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "FRA",
        "team2": "BRA",
        "winner": "BRA",
        "loser": "FRA"
      },
      "F": {
        "id": 1,
        "team1": "ESP",
        "team2": "POR",
        "winner": "POR",
        "loser": "ESP"
      }
    },
    "third_place": {
      "Group A": "KOR",
      "Group B": "SUI",
      "Group L": "PAN",
      "Group D": "PAR",
      "Group G": "IRN",
      "Group I": "IRQ",
      "Group F": "SWE",
      "Group J": "JOR"
    },
    "most_goals": "ESP",
    "score": {
      "h": [
        "1",
        "0"
      ],
      "f": [
        "2",
        "1"
      ],
      "e": [
        "0",
        "0"
      ],
      "p": [
        "0",
        "0"
      ]
    },
    "Country": "Chile"
  },
  {
    "name": "Ronaldinha",
    "league": [
      "kids"
    ],
    "groups": {
      "A": [
        "MEX",
        "KOR",
        "RSA",
        "CZE"
      ],
      "B": [
        "CAN",
        "QAT",
        "SUI",
        "BIH"
      ],
      "C": [
        "BRA",
        "MAR",
        "HAI",
        "SCO"
      ],
      "D": [
        "USA",
        "AUS",
        "PAR",
        "TUR"
      ],
      "E": [
        "GER",
        "ECU",
        "CIV",
        "CUW"
      ],
      "F": [
        "JPN",
        "NED",
        "TUN",
        "SWE"
      ],
      "G": [
        "BEL",
        "NZL",
        "IRN",
        "EGY"
      ],
      "H": [
        "ESP",
        "URU",
        "KSA",
        "CPV"
      ],
      "I": [
        "FRA",
        "SEN",
        "NOR",
        "IRQ"
      ],
      "J": [
        "ARG",
        "JOR",
        "AUT",
        "ALG"
      ],
      "K": [
        "POR",
        "COL",
        "UZB",
        "COD"
      ],
      "L": [
        "CRO",
        "ENG",
        "GHA",
        "PAN"
      ],
      "third": [
        "GHA",
        "RSA",
        "SUI",
        "PAR",
        "TUN",
        "CIV",
        "KSA",
        "UZB"
      ]
    },
    "knock_outs": {
      "R32": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "PAR",
          "winner": "GER",
          "loser": "PAR"
        },
        {
          "id": 2,
          "team1": "FRA",
          "team2": "TUN",
          "winner": "FRA",
          "loser": "TUN"
        },
        {
          "id": 3,
          "team1": "KOR",
          "team2": "QAT",
          "winner": "KOR",
          "loser": "QAT"
        },
        {
          "id": 4,
          "team1": "JPN",
          "team2": "MAR",
          "winner": "JPN",
          "loser": "MAR"
        },
        {
          "id": 5,
          "team1": "COL",
          "team2": "ENG",
          "winner": "COL",
          "loser": "ENG"
        },
        {
          "id": 6,
          "team1": "ESP",
          "team2": "JOR",
          "winner": "ESP",
          "loser": "JOR"
        },
        {
          "id": 7,
          "team1": "USA",
          "team2": "SUI",
          "winner": "USA",
          "loser": "SUI"
        },
        {
          "id": 8,
          "team1": "BEL",
          "team2": "RSA",
          "winner": "BEL",
          "loser": "RSA"
        },
        {
          "id": 9,
          "team1": "BRA",
          "team2": "NED",
          "winner": "BRA",
          "loser": "NED"
        },
        {
          "id": 10,
          "team1": "ECU",
          "team2": "SEN",
          "winner": "ECU",
          "loser": "SEN"
        },
        {
          "id": 11,
          "team1": "MEX",
          "team2": "KSA",
          "winner": "MEX",
          "loser": "KSA"
        },
        {
          "id": 12,
          "team1": "CRO",
          "team2": "UZB",
          "winner": "CRO",
          "loser": "UZB"
        },
        {
          "id": 13,
          "team1": "ARG",
          "team2": "URU",
          "winner": "ARG",
          "loser": "URU"
        },
        {
          "id": 14,
          "team1": "AUS",
          "team2": "NZL",
          "winner": "AUS",
          "loser": "NZL"
        },
        {
          "id": 15,
          "team1": "CAN",
          "team2": "CIV",
          "winner": "CAN",
          "loser": "CIV"
        },
        {
          "id": 16,
          "team1": "POR",
          "team2": "GHA",
          "winner": "POR",
          "loser": "GHA"
        }
      ],
      "R16": [
        {
          "id": 1,
          "team1": "GER",
          "team2": "FRA",
          "winner": "FRA",
          "loser": "GER"
        },
        {
          "id": 2,
          "team1": "KOR",
          "team2": "JPN",
          "winner": "JPN",
          "loser": "KOR"
        },
        {
          "id": 3,
          "team1": "COL",
          "team2": "ESP",
          "winner": "ESP",
          "loser": "COL"
        },
        {
          "id": 4,
          "team1": "USA",
          "team2": "BEL",
          "winner": "BEL",
          "loser": "USA"
        },
        {
          "id": 5,
          "team1": "BRA",
          "team2": "ECU",
          "winner": "BRA",
          "loser": "ECU"
        },
        {
          "id": 6,
          "team1": "MEX",
          "team2": "CRO",
          "winner": "MEX",
          "loser": "CRO"
        },
        {
          "id": 7,
          "team1": "ARG",
          "team2": "AUS",
          "winner": "ARG",
          "loser": "AUS"
        },
        {
          "id": 8,
          "team1": "CAN",
          "team2": "POR",
          "winner": "POR",
          "loser": "CAN"
        }
      ],
      "QF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "JPN",
          "winner": "FRA",
          "loser": "JPN"
        },
        {
          "id": 2,
          "team1": "ESP",
          "team2": "BEL",
          "winner": "ESP",
          "loser": "BEL"
        },
        {
          "id": 3,
          "team1": "BRA",
          "team2": "MEX",
          "winner": "MEX",
          "loser": "BRA"
        },
        {
          "id": 4,
          "team1": "ARG",
          "team2": "POR",
          "winner": "POR",
          "loser": "ARG"
        }
      ],
      "SF": [
        {
          "id": 1,
          "team1": "FRA",
          "team2": "ESP",
          "winner": "FRA",
          "loser": "ESP"
        },
        {
          "id": 2,
          "team1": "MEX",
          "team2": "POR",
          "winner": "POR",
          "loser": "MEX"
        }
      ],
      "F34": {
        "id": 1,
        "team1": "ESP",
        "team2": "MEX",
        "winner": "ESP",
        "loser": "MEX"
      },
      "F": {
        "id": 1,
        "team1": "FRA",
        "team2": "POR",
        "winner": "POR",
        "loser": "FRA"
      }
    },
    "third_place": {
      "Group L": "GHA",
      "Group A": "RSA",
      "Group B": "SUI",
      "Group D": "PAR",
      "Group F": "TUN",
      "Group E": "CIV",
      "Group H": "KSA",
      "Group K": "UZB"
    },
    "most_goals": "POR",
    "score": {
      "h": [
        "2",
        "1"
      ],
      "f": [
        "2",
        "2"
      ],
      "e": [
        "2",
        "2"
      ],
      "p": [
        "5",
        "4"
      ]
    },
    "Country": "Chile"
  }
]