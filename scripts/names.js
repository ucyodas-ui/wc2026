// Only set this true when you get to the final game
//===================================================================
const add_name = true;
// TODO - auto detect this
//===================================================================


let name_search
function find_full_name(name)
{
  if (!name_search)
  {
    name_search = {}
    names.forEach(obj =>{ name_search[obj.name] = obj.full_name})
  }
  if (!name_search.hasOwnProperty(name)) return "???"
  return name_search[name]
}
function full_name_span(name)
{
  if (!add_name) return ""
  return ` <span class=full_name>(${find_full_name(name)})</span>`
}

const names =
[
  {
    "name": "Matt R",
    "full_name": "Matt Reeves"
  },
  {
    "name": "Jonny",
    "full_name": "Jonny Langley"
  },
  {
    "name": "Oregon",
    "full_name": "Cheri Riley"
  },
  {
    "name": "WhatGameAreWePlaying?",
    "full_name": "Steph"
  },
  {
    "name": "Covefe",
    "full_name": "Ryan Cardoza"
  },
  {
    "name": "SpiderPig",
    "full_name": "Andy Riley"
  },
  {
    "name": "Adam",
    "full_name": "Adam Chambers"
  },
  {
    "name": "Cranbrook Canuck",
    "full_name": "George Freitag"
  },
  {
    "name": "Magical Messi",
    "full_name": "Paul Freitag"
  },
  {
    "name": "Jeff",
    "full_name": "jeffrey james"
  },
  {
    "name": "mootri",
    "full_name": "Richard Moot"
  },
  {
    "name": "Fox in the box",
    "full_name": "Paul O'Loughlin"
  },
  {
    "name": "Haze",
    "full_name": "dave hazelwood"
  },
  {
    "name": "MAD LFC FAN",
    "full_name": "Paul Kidd"
  },
  {
    "name": "Weird Fish",
    "full_name": "Feng"
  },
  {
    "name": "Qui-Gon Jinn",
    "full_name": "David Alabaster"
  },
  {
    "name": "Chewie",
    "full_name": "JOHN Glass"
  },
  {
    "name": "Sergeant Ben HOWES",
    "full_name": "Rob SMITH"
  },
  {
    "name": "Pepe the King Prawn",
    "full_name": "Scott Matheson"
  },
  {
    "name": "ChatGPT's Herald",
    "full_name": "daniel cal"
  },
  {
    "name": "Enchanted Woods",
    "full_name": "Ben Howes"
  },
  {
    "name": "Vanny J",
    "full_name": "Vanessa Jarman"
  },
  {
    "name": "Debi",
    "full_name": "Debi James"
  },
  {
    "name": "JJForReal",
    "full_name": "jeffrey james"
  },
  {
    "name": "becbec",
    "full_name": "Becky Collett"
  },
  {
    "name": "Eddie",
    "full_name": "Eddie C"
  },
  {
    "name": "Kevy",
    "full_name": "Kevin Kerkhofs"
  },
  {
    "name": "DARCE XI",
    "full_name": "James D'Arcy"
  },
  {
    "name": "No Left Foot",
    "full_name": "Michael McQuarrie"
  },
  {
    "name": "#nickscottout",
    "full_name": "Nick scott"
  },
  {
    "name": "Flagging it",
    "full_name": "Taylor hall"
  },
  {
    "name": "Ally's Army",
    "full_name": "Donald MacRae"
  },
  {
    "name": "Emily is cool",
    "full_name": "Emily"
  },
  {
    "name": "Brazilian pineaple",
    "full_name": "Guil"
  },
  {
    "name": "Syb",
    "full_name": "Sybille"
  },
  {
    "name": "Kiwi Red",
    "full_name": "Stuart"
  },
  {
    "name": "Vavavoom",
    "full_name": "Vincent Berhault"
  },
  {
    "name": "Mike",
    "full_name": "Mike Bargh"
  },
  {
    "name": "Jimmy's Angels",
    "full_name": "James Blake"
  },
  {
    "name": "Saka Potatoes",
    "full_name": "Jeremy Blake"
  },
  {
    "name": "Colombian Soul",
    "full_name": "Ricardo"
  },
  {
    "name": "Alexis Sanchez",
    "full_name": "Alvaro Gonzalez"
  },
  {
    "name": "Unusual Suspects",
    "full_name": "Geoff Facer"
  },
  {
    "name": "Jack",
    "full_name": "Jack Reeves"
  },
  {
    "name": "Giving it a Nudge",
    "full_name": "Sam Glassey"
  },
  {
    "name": "Dark Lord of the Sith",
    "full_name": "Nick Williams"
  },
  {
    "name": "Little JB",
    "full_name": "Jackson B"
  },
  {
    "name": "Jang",
    "full_name": "Jangyoung Lim"
  },
  {
    "name": "One Tonne Chelsea Bun",
    "full_name": "Graham MALEY"
  },
  {
    "name": "Glenn W",
    "full_name": "Glenn Williams"
  },
  {
    "name": "DavidW",
    "full_name": "David Walls"
  },
  {
    "name": "Tu-chel for school",
    "full_name": "Dave Hanson"
  },
  {
    "name": "Salt n Pepe",
    "full_name": "Matt Hodgett"
  },
  {
    "name": "I Predict Therefore I Am",
    "full_name": "Kev Guttmann"
  },
  {
    "name": "Crouch Potato",
    "full_name": "Will Bargh"
  },
  {
    "name": "Spurstragic",
    "full_name": "Andy Moore"
  },
  {
    "name": "Lara",
    "full_name": "Lara (your daughter)"
  },
  {
    "name": "Why,FIFA, Why?",
    "full_name": "Peter Drake"
  },
  {
    "name": "MogAnna",
    "full_name": "Mark Hanna"
  },
  {
    "name": "BarbW",
    "full_name": "Barbara Williams"
  },
  {
    "name": "The Phantom Menace",
    "full_name": "Iain Scott"
  },
  {
    "name": "Bradshaw",
    "full_name": "Jason Bradshaw"
  },
  {
    "name": "Seb K",
    "full_name": "Seb"
  },
  {
    "name": "Gagner, Nous Ferons",
    "full_name": "Gav"
  },
  {
    "name": "TedLasso",
    "full_name": "Paul Orlandea"
  },
  {
    "name": "Alex",
    "full_name": "Alex Reeves"
  },
  {
    "name": "Gareth",
    "full_name": "Burgundybeavers"
  },
  {
    "name": "Concrete FC",
    "full_name": "Ivan Navarrete"
  },
  {
    "name": "Sean M",
    "full_name": "Sean Malone"
  },
  {
    "name": "Brownie United",
    "full_name": "Jayden Brown"
  },
  {
    "name": "Donny",
    "full_name": "Luke"
  },
  {
    "name": "Tio Paolo",
    "full_name": "Damian Gonzslez"
  },
  {
    "name": "Hello234",
    "full_name": "Matilde"
  },
  {
    "name": "Ronaldinha",
    "full_name": "Alicia GONZALEZ"
  }
]