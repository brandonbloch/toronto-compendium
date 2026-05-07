import type { CompendiumEntry } from '@/data/entries.ts';

interface MinimalFireStationEntry {
  station: number;
  address: string;
}

const minimalFireStationEntries: readonly MinimalFireStationEntry[] = [
  {
    station: 432,
    address: '155 The East Mall',
  },
  {
    station: 445,
    address: '280 Burnhamthorpe Rd',
  },
  {
    station: 431,
    address: '308 Prince Edward Dr S',
  },
  {
    station: 444,
    address: '666 Renforth Dr',
  },
  {
    station: 443,
    address: '1724 Islington Ave',
  },
  {
    station: 433,
    address: '615 Royal York Rd',
  },
  {
    station: 434,
    address: '3 Lunness Rd',
  },
  {
    station: 422,
    address: '590 Jane St',
  },
  {
    station: 425,
    address: '83 Deforest Rd',
  },
  {
    station: 435,
    address: '130 Eighth St',
  },
  {
    station: 441,
    address: '947 Martin Grove Rd',
  },
  {
    station: 421,
    address: '6 Lambton Ave',
  },
  {
    station: 442,
    address: '2015 Lawrence Ave W',
  },
  {
    station: 423,
    address: '358 Keele St',
  },
  {
    station: 415,
    address: '2120 Kipling Ave',
  },
  {
    station: 426,
    address: '140 Lansdowne Ave',
  },
  {
    station: 133,
    address: '1505 Lawrence Ave W',
  },
  {
    station: 342,
    address: '106 Ascot Ave',
  },
  {
    station: 345,
    address: '1285 Dufferin St',
  },
  {
    station: 146,
    address: '2220 Jane St',
  },
  {
    station: 343,
    address: '65 Hendrick Ave',
  },
  {
    station: 341,
    address: '555 Oakwood Ave',
  },
  {
    station: 346,
    address: '90 Quebec St',
  },
  {
    station: 331,
    address: '33 Claremont St',
  },
  {
    station: 344,
    address: '240 Howland Ave',
  },
  {
    station: 413,
    address: '1549 Albion Rd',
  },
  {
    station: 144,
    address: '2945 Keele St',
  },
  {
    station: 315,
    address: '132 Bellevue Ave',
  },
  {
    station: 142,
    address: '2753 Jane St',
  },
  {
    station: 412,
    address: '267 Humberline Dr',
  },
  {
    station: 135,
    address: '325 Chaplin Cres',
  },
  {
    station: 145,
    address: '20 Beffort Rd',
  },
  {
    station: 411,
    address: '75 Toryork Dr',
  },
  {
    station: 332,
    address: '260 Adelaide St W',
  },
  {
    station: 132,
    address: '476 Lawrence Ave W',
  },
  {
    station: 334,
    address: '339 Queens Quay W',
  },
  {
    station: 312,
    address: '34 Yorkville Ave',
  },
  {
    station: 311,
    address: '20 Balmoral Ave',
  },
  {
    station: 314,
    address: '12 Grosvenor St',
  },
  {
    station: 143,
    address: '1009 Sheppard Ave W',
  },
  {
    station: 134,
    address: '16 Montgomery Ave',
  },
  {
    station: 313,
    address: '441 Bloor St E',
  },
  {
    station: 141,
    address: '4100 Keele St',
  },
  {
    station: 333,
    address: '207 Front St E',
  },
  {
    station: 325,
    address: '475 Dundas St E',
  },
  {
    station: 131,
    address: '3135 Yonge St',
  },
  {
    station: 335,
    address: '235 Cibola Ave',
  },
  {
    station: 121,
    address: '10 William Carson Cres',
  },
  {
    station: 321,
    address: '231 McRae Dr',
  },
  {
    station: 324,
    address: '840 Gerrard St E',
  },
  {
    station: 112,
    address: '5700 Bathurst St',
  },
  {
    station: 322,
    address: '256 Cosburn Ave',
  },
  {
    station: 323,
    address: '153 Chatham Ave',
  },
  {
    station: 122,
    address: '2545 Bayview Ave',
  },
  {
    station: 114,
    address: '12 Canterbury Pl',
  },
  {
    station: 326,
    address: '30 Knox Ave',
  },
  {
    station: 125,
    address: '1109 Leslie St',
  },
  {
    station: 224,
    address: '1313 Woodbine Ave',
  },
  {
    station: 227,
    address: '1904 Queen St E',
  },
  {
    station: 123,
    address: '143 Bond Ave',
  },
  {
    station: 116,
    address: '255 Esther Shiner Blvd',
  },
  {
    station: 226,
    address: '87 Main St',
  },
  {
    station: 111,
    address: '3300 Bayview Ave',
  },
  {
    station: 235,
    address: '200 Bermondsey Rd',
  },
  {
    station: 233,
    address: '59 Curlew Dr',
  },
  {
    station: 115,
    address: '115 Parkway Forest Dr',
  },
  {
    station: 222,
    address: '755 Warden Ave',
  },
  {
    station: 113,
    address: '700 Seneca Hill Dr',
  },
  {
    station: 225,
    address: '3600 Danforth Ave',
  },
  {
    station: 245,
    address: '1600 Birchmount Rd',
  },
  {
    station: 244,
    address: '2340 Birchmount Rd',
  },
  {
    station: 221,
    address: '2575 Eglinton Ave E',
  },
  {
    station: 232,
    address: '1550 Midland Ave',
  },
  {
    station: 241,
    address: '3325 Warden Ave',
  },
  {
    station: 223,
    address: '116 Dorset Rd',
  },
  {
    station: 243,
    address: '4560 Sheppard Ave E',
  },
  {
    station: 242,
    address: '2733 Brimley Rd',
  },
  {
    station: 231,
    address: '740 Markham Rd',
  },
  {
    station: 213,
    address: '7 Lapsley Rd',
  },
  {
    station: 234,
    address: '40 Coronation Dr',
  },
  {
    station: 211,
    address: '900 Tapscott Rd',
  },
  {
    station: 212,
    address: '8500 Sheppard Ave E',
  },
  {
    station: 214,
    address: '745 Meadowvale Rd',
  },
  {
    station: 215,
    address: '5318 Lawrence Ave E',
  },
].sort((a, b) => a.station - b.station);

export const fireStationEntries: readonly CompendiumEntry[] = minimalFireStationEntries.map((entry) => ({
  id: `fire-station-${entry.station}`,
  name: `Fire Station ${entry.station}`,
  shortName: `Station ${entry.station}`,
  category: 'fire-stations',
  // TODO: include address somehow
}));
