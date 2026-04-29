import { CompendiumCategory, type CompendiumEntry } from './types';

export const compendiumData = [
  {
    id: "cn-tower",
    name: "CN Tower",
    category: CompendiumCategory.Buildings,
  },
  {
    id: "rogers-centre",
    name: "Rogers Centre",
    category: CompendiumCategory.Buildings,
  },
  {
    id: "manulife",
    name: "Manulife Building",
    category: CompendiumCategory.Buildings,
  },
  {
    id: "rom",
    name: "Royal Ontario Museum",
    shortName: "ROM",
    category: CompendiumCategory.Museums,
  },
  {
    id: "ago",
    name: "Art Gallery of Ontario",
    shortName: "AGO",
    category: CompendiumCategory.Museums,
  },
  {
    id: "raccoon",
    name: "Raccoon",
    category: CompendiumCategory.Wildlife,
  },
  {
    id: "finch-station",
    name: "Finch Station",
    shortName: "Finch",
    category: CompendiumCategory.Transit,
  },
  {
    id: "north-york-centre-station",
    name: "North York Centre Station",
    shortName: "North York Centre",
    category: CompendiumCategory.Transit,
  },
  {
    id: "sheppard-yonge-station",
    name: "Sheppard–Yonge Station",
    shortName: "Sheppard–Yonge",
    category: CompendiumCategory.Transit,
  },
  {
    id: "york-mills-station",
    name: "York Mills Station",
    shortName: "York Mills",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Lawrence Station",
    shortName: "Lawrence",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Eglinton Station",
    shortName: "Eglinton",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Davisville Station",
    shortName: "Davisville",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "St. Clair Station",
    shortName: "St. Clair",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Summerhill Station",
    shortName: "Summerhill",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Rosedale Station",
    shortName: "Rosedale",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Bloor–Yonge Station",
    shortName: "Bloor–Yonge",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Wellesley Station",
    shortName: "Wellesley",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "College Station",
    shortName: "College",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "TMU Station",
    shortName: "TMU",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Queen Station",
    shortName: "Queen",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "King Station",
    shortName: "King",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Union Station",
    shortName: "Union",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "St. Andrew Station",
    shortName: "St. Andrew",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Osgoode Station",
    shortName: "Osgoode",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "St. Patrick Station",
    shortName: "St. Patrick",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Queen's Park Station",
    shortName: "Queen's Park",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Museum Station",
    shortName: "Museum",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "St. George Station",
    shortName: "St. George",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Spadina Station",
    shortName: "Spadina",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Dupont Station",
    shortName: "Dupont",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "St. Clair West Station",
    shortName: "St. Clair West",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Cedarvale Station",
    shortName: "Cedarvale",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Glencairn Station",
    shortName: "Glencairn",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Lawrence West Station",
    shortName: "Lawrence West",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Yorkdale Station",
    shortName: "Yorkdale",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Wilson Station",
    shortName: "Wilson",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Sheppard West Station",
    shortName: "Sheppard West",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Downsview Park Station",
    shortName: "Downsview Park",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Finch West Station",
    shortName: "Finch West",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "York University Station",
    shortName: "York University",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Pioneer Village Station",
    shortName: "Pioneer Village",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Highway 407 Station",
    shortName: "Highway 407",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Vaughan Station",
    shortName: "Vaughan",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Kipling Station",
    shortName: "Kipling",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Islington Station",
    shortName: "Islington",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Royal York Station",
    shortName: "Royal York",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Old Mill Station",
    shortName: "Old Mill",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Jane Station",
    shortName: "Jane",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Runnymede Station",
    shortName: "Runnymede",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "High Park Station",
    shortName: "High Park",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Keele Station",
    shortName: "Keele",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Dundas West Station",
    shortName: "Dundas West",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Lansdowne Station",
    shortName: "Lansdowne",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Dufferin Station",
    shortName: "Dufferin",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Ossington Station",
    shortName: "Ossington",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Christie Station",
    shortName: "Christie",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Bathurst Station",
    shortName: "Bathurst",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Bay Station",
    shortName: "Bay",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Sherbourne Station",
    shortName: "Sherbourne",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Castle Frank Station",
    shortName: "Castle Frank",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Broadview Station",
    shortName: "Broadview",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Chester Station",
    shortName: "Chester",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Pape Station",
    shortName: "Pape",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Donlands Station",
    shortName: "Donlands",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Greenwood Station",
    shortName: "Greenwood",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Coxwell Station",
    shortName: "Coxwell",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Woodbine Station",
    shortName: "Woodbine",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Main Street Station",
    shortName: "Main Street",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Victoria Park Station",
    shortName: "Victoria Park",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Warden Station",
    shortName: "Warden",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Kennedy Station",
    shortName: "Kennedy",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Bayview Station",
    shortName: "Bayview",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Bessarion Station",
    shortName: "Bessarion",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Leslie Station",
    shortName: "Leslie",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Don Mills Station",
    shortName: "Don Mills",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Mount Dennis Station",
    shortName: "Mount Dennis",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Keelesdale Station",
    shortName: "Keelesdale",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Caledonia Station",
    shortName: "Caledonia",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Fairbank Station",
    shortName: "Fairbank",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Oakwood Station",
    shortName: "Oakwood",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Forest Hill Station",
    shortName: "Forest Hill",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Chaplin Station",
    shortName: "Chaplin",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Avenue Station",
    shortName: "Avenue",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Mount Pleasant Station",
    shortName: "Mount Pleasant",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Leaside Station",
    shortName: "Leaside",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Laird Station",
    shortName: "Laird",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Sunnybrook Park Station",
    shortName: "Sunnybrook Park",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Don Valley Station",
    shortName: "Don Valley",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Aga Khan Park & Museum Station",
    shortName: "Aga Khan",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Wynford Station",
    shortName: "Wynford",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Sloane Station",
    shortName: "Sloane",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "O'Connor Station",
    shortName: "O'Connor",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Pharmacy Station",
    shortName: "Pharmacy",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Hakimi Lebovic Station",
    shortName: "Hakimi Lebovic",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Golden Mile Station",
    shortName: "Golden Mile",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Birchmount Station",
    shortName: "Birchmount",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Ionview Station",
    shortName: "Ionview",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Humber College Station",
    shortName: "Humber College",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Westmore Station",
    shortName: "Westmore",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Martin Grove Station",
    shortName: "Martin Grove",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Albion Station",
    shortName: "Albion",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Stevenson Station",
    shortName: "Stevenson",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Mount Olive Station",
    shortName: "Mount Olive",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Rowntree Mills Station",
    shortName: "Rowntree Mills",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Pearldale Station",
    shortName: "Pearldale",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Duncanwoods Station",
    shortName: "Duncanwoods",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Milvan Rumike Station",
    shortName: "Milvan Rumike",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Emery Station",
    shortName: "Emery",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Signet Arrow Station",
    shortName: "Signet Arrow",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Norfinch Oakdale Station",
    shortName: "Norfinch Oakdale",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Jane and Finch Station",
    shortName: "Jane and Finch",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Driftwood Station",
    shortName: "Driftwood",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Tobermory Station",
    shortName: "Tobermory",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Sentinel Station",
    shortName: "Sentinel",
    category: CompendiumCategory.Transit,
  },
  {
    id: "", // TODO
    name: "Queens Quay Station",
    shortName: "Queens Quay",
    category: CompendiumCategory.Transit,
  },
] as const satisfies readonly CompendiumEntry[];
