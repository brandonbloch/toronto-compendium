import type { CompendiumEntry } from '@/data/entries.ts';
import type { ReactNode } from 'react';

interface MinimalTransitEntry {
  id: string;
  name?: string; // if not just `${shortName} Station`
  shortName: string;
  jsxShortName?: ReactNode;
}

const minimalTransitEntries: readonly MinimalTransitEntry[] = [
  {
    id: 'finch-station',
    shortName: 'Finch',
  },
  {
    id: 'north-york-centre-station',
    shortName: 'North York Centre',
  },
  {
    id: 'sheppard-yonge-station',
    shortName: 'Sheppard–Yonge',
  },
  {
    id: 'york-mills-station',
    shortName: 'York Mills',
  },
  {
    id: 'lawrence-station',
    shortName: 'Lawrence',
  },
  {
    id: 'eglinton-station',
    shortName: 'Eglinton',
  },
  {
    id: 'davisville-station',
    shortName: 'Davisville',
  },
  {
    id: 'st-clair-station',
    shortName: 'St. Clair',
  },
  {
    id: 'summerhill-station',
    shortName: 'Summerhill',
  },
  {
    id: 'rosedale-station',
    shortName: 'Rosedale',
  },
  {
    id: 'bloor-yonge-station',
    shortName: 'Bloor–Yonge',
  },
  {
    id: 'wellesley-station',
    shortName: 'Wellesley',
  },
  {
    id: 'college-station',
    shortName: 'College',
  },
  {
    id: 'tmu-station',
    shortName: 'TMU',
  },
  {
    id: 'queen-station',
    shortName: 'Queen',
  },
  {
    id: 'king-station',
    shortName: 'King',
  },
  {
    id: 'union-station',
    shortName: 'Union',
  },
  {
    id: 'st-andrew-station',
    shortName: 'St. Andrew',
  },
  {
    id: 'osgoode-station',
    shortName: 'Osgoode',
  },
  {
    id: 'st-patrick-station',
    shortName: 'St. Patrick',
  },
  {
    id: 'queens-park-station',
    shortName: "Queen's Park",
  },
  {
    id: 'museum-station',
    shortName: 'Museum',
  },
  {
    id: 'st-george-station',
    shortName: 'St. George',
  },
  {
    id: 'spadina-station',
    shortName: 'Spadina',
  },
  {
    id: 'dupont-station',
    shortName: 'Dupont',
  },
  {
    id: 'st-clair-west-station',
    shortName: 'St. Clair West',
  },
  {
    id: 'cedarvale-station',
    shortName: 'Cedarvale',
  },
  {
    id: 'glencairn-station',
    shortName: 'Glencairn',
  },
  {
    id: 'lawrence-west-station',
    shortName: 'Lawrence West',
  },
  {
    id: 'yorkdale-station',
    shortName: 'Yorkdale',
  },
  {
    id: 'wilson-station',
    shortName: 'Wilson',
  },
  {
    id: 'sheppard-west-station',
    shortName: 'Sheppard West',
  },
  {
    id: 'downsview-park-station',
    shortName: 'Downsview Park',
  },
  {
    id: 'finch-west-station',
    shortName: 'Finch West',
  },
  {
    id: 'york-university-station',
    shortName: 'York University',
  },
  {
    id: 'pioneer-village-station',
    shortName: 'Pioneer Village',
  },
  {
    id: 'kipling-station',
    shortName: 'Kipling',
  },
  {
    id: 'islington-station',
    shortName: 'Islington',
  },
  {
    id: 'royal-york-station',
    shortName: 'Royal York',
  },
  {
    id: 'old-mill-station',
    shortName: 'Old Mill',
  },
  {
    id: 'jane-station',
    shortName: 'Jane',
  },
  {
    id: 'runnymede-station',
    shortName: 'Runnymede',
  },
  {
    id: 'high-park-station',
    shortName: 'High Park',
  },
  {
    id: 'keele-station',
    shortName: 'Keele',
  },
  {
    id: 'dundas-west-station',
    shortName: 'Dundas West',
  },
  {
    id: 'lansdowne-station',
    shortName: 'Lansdowne',
  },
  {
    id: 'dufferin-station',
    shortName: 'Dufferin',
  },
  {
    id: 'ossington-station',
    shortName: 'Ossington',
  },
  {
    id: 'christie-station',
    shortName: 'Christie',
  },
  {
    id: 'bathurst-station',
    shortName: 'Bathurst',
  },
  {
    id: 'bay-station',
    shortName: 'Bay',
  },
  {
    id: 'sherbourne-station',
    shortName: 'Sherbourne',
  },
  {
    id: 'castle-frank-station',
    shortName: 'Castle Frank',
  },
  {
    id: 'broadview-station',
    shortName: 'Broadview',
  },
  {
    id: 'chester-station',
    shortName: 'Chester',
  },
  {
    id: 'pape-station',
    shortName: 'Pape',
  },
  {
    id: 'donlands-station',
    shortName: 'Donlands',
  },
  {
    id: 'greenwood-station',
    shortName: 'Greenwood',
  },
  {
    id: 'coxwell-station',
    shortName: 'Coxwell',
  },
  {
    id: 'woodbine-station',
    shortName: 'Woodbine',
  },
  {
    id: 'main-street-station',
    shortName: 'Main Street',
  },
  {
    id: 'victoria-park-station',
    shortName: 'Victoria Park',
  },
  {
    id: 'warden-station',
    shortName: 'Warden',
  },
  {
    id: 'kennedy-station',
    shortName: 'Kennedy',
  },
  {
    id: 'bayview-station',
    shortName: 'Bayview',
  },
  {
    id: 'bessarion-station',
    shortName: 'Bessarion',
  },
  {
    id: 'leslie-station',
    shortName: 'Leslie',
  },
  {
    id: 'don-mills-station',
    shortName: 'Don Mills',
  },
  {
    id: 'mount-dennis-station',
    shortName: 'Mount Dennis',
  },
  {
    id: 'keelesdale-station',
    shortName: 'Keelesdale',
  },
  {
    id: 'caledonia-station',
    shortName: 'Caledonia',
  },
  {
    id: 'fairbank-station',
    shortName: 'Fairbank',
  },
  {
    id: 'oakwood-station',
    shortName: 'Oakwood',
  },
  {
    id: 'forest-hill-station',
    shortName: 'Forest Hill',
  },
  {
    id: 'chaplin-station',
    shortName: 'Chaplin',
  },
  {
    id: 'avenue-station',
    shortName: 'Avenue',
  },
  {
    id: 'mount-pleasant-station',
    shortName: 'Mount Pleasant',
  },
  {
    id: 'leaside-station',
    shortName: 'Leaside',
  },
  {
    id: 'laird-station',
    shortName: 'Laird',
  },
  {
    id: 'sunnybrook-park-station',
    shortName: 'Sunnybrook Park',
  },
  {
    id: 'don-valley-station',
    shortName: 'Don Valley',
  },
  {
    id: 'aga-khan-station',
    name: 'Aga Khan Park & Museum Station',
    shortName: 'Aga Khan',
  },
  {
    id: 'wynford-station',
    shortName: 'Wynford',
  },
  {
    id: 'sloane-station',
    shortName: 'Sloane',
  },
  {
    id: 'oconnor-station',
    shortName: "O'Connor",
  },
  {
    id: 'pharmacy-station',
    shortName: 'Pharmacy',
  },
  {
    id: 'hamimi-lebovic-station',
    shortName: 'Hakimi Lebovic',
  },
  {
    id: 'golden-mile-station',
    shortName: 'Golden Mile',
  },
  {
    id: 'birchmount-station',
    shortName: 'Birchmount',
  },
  {
    id: 'ionview-station',
    shortName: 'Ionview',
  },
  {
    id: 'humber-college-station',
    shortName: 'Humber College',
  },
  {
    id: 'westmore-station',
    shortName: 'Westmore',
  },
  {
    id: 'martin-grove-station',
    shortName: 'Martin Grove',
  },
  {
    id: 'albion-station',
    shortName: 'Albion',
  },
  {
    id: 'stevenson-station',
    shortName: 'Stevenson',
  },
  {
    id: 'mount-olive-station',
    shortName: 'Mount Olive',
  },
  {
    id: 'rowntree-mills-station',
    shortName: 'Rowntree Mills',
  },
  {
    id: 'pearldale-station',
    shortName: 'Pearldale',
  },
  {
    id: 'duncanwoods-station',
    shortName: 'Duncanwoods',
  },
  {
    id: 'milvan-rumike-station',
    shortName: 'Milvan Rumike',
  },
  {
    id: 'emery-station',
    shortName: 'Emery',
  },
  {
    id: 'signet-arrow-station',
    shortName: 'Signet Arrow',
  },
  {
    id: 'norfinch-oakdale-station',
    shortName: 'Norfinch Oakdale',
  },
  {
    id: 'jane-and-finch-station',
    shortName: 'Jane and Finch',
  },
  {
    id: 'driftwood-station',
    shortName: 'Driftwood',
  },
  {
    id: 'tobermory-station',
    shortName: 'Tobermory',
  },
  {
    id: 'sentinel-station',
    shortName: 'Sentinel',
  },
  {
    id: 'queens-quay-station',
    shortName: 'Queens Quay',
  },
] as const;

export const transitEntries: readonly CompendiumEntry[] = minimalTransitEntries.map((entry) => ({
  id: entry.id,
  name: entry.name ?? `${entry.shortName} Station`,
  shortName: entry.shortName,
  jsxShortName: entry.jsxShortName,
  category: 'transit',
}));
