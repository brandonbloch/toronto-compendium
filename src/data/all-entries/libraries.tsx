import type { CompendiumEntry } from '@/data/entries.ts';
import type { ReactNode } from 'react';

interface MinimalLibraryEntry {
  id: string;
  name?: string; // if not just `${shortName} Library`
  shortName: string;
  jsxShortName?: ReactNode;
}

const minimalLibraryEntries: readonly MinimalLibraryEntry[] = [
  {
    id: 'agincourt-library',
    shortName: 'Agincourt',
  },
  {
    id: 'albert-campbell-library',
    shortName: 'Albert Campbell',
  },
  {
    id: 'albion-library',
    shortName: 'Albion',
  },
  {
    id: 'alderwood-library',
    shortName: 'Alderwood',
  },
  {
    id: 'amesbury-park-library',
    shortName: 'Amesbury Park',
  },
  {
    id: 'annette-street-library',
    shortName: 'Annette Street',
  },
  {
    id: 'armour-heights-library',
    shortName: 'Armour Heights',
  },
  {
    id: 'barbara-frum-library',
    shortName: 'Barbara Frum',
  },
  {
    id: 'beaches-library',
    shortName: 'Beaches',
  },
  {
    id: 'bendale-library',
    shortName: 'Bendale',
  },
  {
    id: 'black-creek-library',
    shortName: 'Black Creek',
  },
  {
    id: 'bloor-gladstone-library',
    shortName: 'Bloor/Gladstone',
    jsxShortName: <>Bloor/<wbr />Gladstone</>,
  },
  {
    id: 'brentwood-library',
    shortName: 'Brentwood',
  },
  {
    id: 'bridlewood-library',
    shortName: 'Bridlewood',
  },
  {
    id: 'brookbanks-library',
    shortName: 'Brookbanks',
  },
  {
    id: 'burrows-hall-library',
    shortName: 'Burrows Hall',
  },
  {
    id: 'cedarbrae-library',
    shortName: 'Cedarbrae',
  },
  {
    id: 'centennial-library',
    shortName: 'Centennial',
  },
  {
    id: 'city-hall-library',
    shortName: 'City Hall',
  },
  {
    id: 'cliffcrest-library',
    shortName: 'Cliffcrest',
  },
  {
    id: 'college-shaw-library',
    shortName: 'College/Shaw',
    jsxShortName: <>College/<wbr />Shaw</>,
  },
  {
    id: 'danforth-coxwell-library',
    shortName: 'Danforth/Coxwell',
    jsxShortName: <>Danforth/<wbr />Coxwell</>,
  },
  {
    id: 'daniel-g-hill-library',
    shortName: 'Daniel G. Hill',
  },
  {
    id: 'davenport-library',
    shortName: 'Davenport',
  },
  {
    id: 'dawes-road-library',
    shortName: 'Dawes Road',
  },
  {
    id: 'deer-park-library',
    shortName: 'Deer Park',
  },
  {
    id: 'don-mills-library',
    shortName: 'Don Mills',
  },
  {
    id: 'downsview-library',
    shortName: 'Downsview',
  },
  {
    id: 'dufferin-st-clair-library',
    shortName: 'Dufferin/St. Clair',
    jsxShortName: <>Dufferin/<wbr />St. Clair</>,
  },
  {
    id: 'eatonville-library',
    shortName: 'Eatonville',
  },
  {
    id: 'eglinton-square-library',
    shortName: 'Eglinton Square',
  },
  {
    id: 'elmbrook-park-library',
    shortName: 'Elmbrook Park',
  },
  {
    id: 'ethennonnhawahstihnen-library',
    shortName: "Ethennonnhawahstihnen'",
    jsxShortName: <>Ethennonnha&shy;wahstihnen'</>,
  },
  {
    id: 'evelyn-gregory-library',
    shortName: 'Evelyn Gregory',
  },
  {
    id: 'fairview-library',
    shortName: 'Fairview',
  },
  {
    id: 'flemingdon-park-library',
    shortName: 'Flemingdon Park',
  },
  {
    id: 'forest-hill-library',
    shortName: 'Forest Hill',
  },
  {
    id: 'fort-york-library',
    shortName: 'Fort York',
  },
  {
    id: 'gerrard-ashdale-library',
    shortName: 'Gerrard/Ashdale',
    jsxShortName: <>Gerrard/<wbr />Ashdale</>,
  },
  {
    id: 'goldhawk-park-library',
    shortName: 'Goldhawk Park',
  },
  {
    id: 'guildwood-library',
    shortName: 'Guildwood',
  },
  {
    id: 'high-park-library',
    shortName: 'High Park',
  },
  {
    id: 'highland-creek-library',
    shortName: 'Highland Creek',
  },
  {
    id: 'hillcrest-library',
    shortName: 'Hillcrest',
  },
  {
    id: 'humber-bay-library',
    shortName: 'Humber Bay',
  },
  {
    id: 'humber-summit-library',
    shortName: 'Humber Summit',
  },
  {
    id: 'humberwood-library',
    shortName: 'Humberwood',
  },
  {
    id: 'jane-sheppard-library',
    shortName: 'Jane/Sheppard',
    jsxShortName: <>Jane/<wbr />Sheppard</>,
  },
  {
    id: 'jones-library',
    shortName: 'Jones',
  },
  {
    id: 'junction-triangle-library',
    shortName: 'Junction Triangle',
  },
  {
    id: 'kennedy-eglinton-library',
    shortName: 'Kennedy/Eglinton',
    jsxShortName: <>Kennedy/<wbr />Eglinton</>,
  },
  {
    id: 'leaside-library',
    shortName: 'Leaside',
  },
  {
    id: 'lillian-h-smith-library',
    shortName: 'Lillian H. Smith',
  },
  {
    id: 'locke-library',
    shortName: 'Locke',
  },
  {
    id: 'long-branch-library',
    shortName: 'Long Branch',
  },
  {
    id: 'main-street-library',
    shortName: 'Main Street',
  },
  {
    id: 'malvern-library',
    shortName: 'Malvern',
  },
  {
    id: 'maria-a-shchuka-library',
    shortName: 'Maria A. Shchuka',
  },
  {
    id: 'maryvale-library',
    shortName: 'Maryvale',
  },
  {
    id: 'mcgregor-park-library',
    shortName: 'McGregor Park',
  },
  {
    id: 'mimico-centennial-library',
    shortName: 'Mimico Centennial',
  },
  {
    id: 'morningside-library',
    shortName: 'Morningside',
  },
  {
    id: 'mount-dennis-library',
    shortName: 'Mount Dennis',
  },
  {
    id: 'mount-pleasant-library',
    shortName: 'Mount Pleasant',
  },
  {
    id: 'new-toronto-library',
    shortName: 'New Toronto',
  },
  {
    id: 'north-york-central-library',
    shortName: 'North York Central',
  },
  {
    id: 'northern-district-library',
    shortName: 'Northern District',
  },
  {
    id: 'northern-elms-library',
    shortName: 'Northern Elms',
  },
  {
    id: 'oakwood-village-library',
    shortName: 'Oakwood Village',
    name: 'Oakwood Village Library and Arts Centre',
  },
  {
    id: 'palmerston-library',
    shortName: 'Palmerston',
  },
  {
    id: 'pape-danforth-library',
    shortName: 'Pape/Danforth',
    jsxShortName: <>Pape/<wbr />Danforth</>,
  },
  {
    id: 'parkdale-library',
    shortName: 'Parkdale',
  },
  {
    id: 'parliament-street-library',
    shortName: 'Parliament Street',
  },
  {
    id: 'pleasant-view-library',
    shortName: 'Pleasant View',
  },
  {
    id: 'port-union-library',
    shortName: 'Port Union',
  },
  {
    id: 'queen-saulter-library',
    shortName: 'Queen/Saulter',
    jsxShortName: <>Queen/<wbr />Saulter</>,
  },
  {
    id: 'rexdale-library',
    shortName: 'Rexdale',
  },
  {
    id: 'richview-library',
    shortName: 'Richview',
  },
  {
    id: 'riverdale-library',
    shortName: 'Riverdale',
  },
  {
    id: 'runnymede-library',
    shortName: 'Runnymede',
  },
  {
    id: 's-walter-stewart-library',
    shortName: 'S. Walter Stewart',
  },
  {
    id: 'sanderson-library',
    shortName: 'Sanderson',
  },
  {
    id: 'scarborough-civic-centre-library',
    shortName: 'Scarborough Civic Centre',
  },
  {
    id: 'spadina-road-library',
    shortName: 'Spadina Road',
  },
  {
    id: 'st-clair-silverthorn',
    shortName: 'St. Clair/Silverthorn',
    jsxShortName: <>St. Clair/<wbr />Silverthorn</>,
  },
  {
    id: 'st-james-town-library',
    shortName: 'St. James Town',
  },
  {
    id: 'st-lawrence-library',
    shortName: 'St. Lawrence',
  },
  {
    id: 'steeles-library',
    shortName: 'Steeles',
  },
  {
    id: 'swansea-memorial-library',
    shortName: 'Swansea Memorial',
  },
  {
    id: 'taylor-memorial-library',
    shortName: 'Taylor Memorial',
  },
  {
    id: 'thorncliffe-library',
    shortName: 'Thorncliffe',
  },
  {
    id: 'todmorden-room-library',
    shortName: 'Todmorden Room',
  },
  {
    id: 'toronto-reference-library',
    shortName: 'Reference Library',
    name: 'Toronto Reference Library',
  },
  {
    id: 'victoria-village-library',
    shortName: 'Victoria Village',
  },
  {
    id: 'weston-library',
    shortName: 'Weston',
  },
  {
    id: 'woodside-square-library',
    shortName: 'Woodside Square',
  },
  {
    id: 'woodview-park-library',
    shortName: 'Woodview Park',
  },
  {
    id: 'wychwood-library',
    shortName: 'Wychwood',
  },
  {
    id: 'york-woods-library',
    shortName: 'York Woods',
  },
  {
    id: 'yorkville-library',
    shortName: 'Yorkville',
  },
] as const;

export const libraryEntries: readonly CompendiumEntry[] = minimalLibraryEntries.map((entry) => ({
  id: entry.id,
  name: entry.name ?? `${entry.shortName} Library`,
  shortName: entry.shortName,
  jsxShortName: entry.jsxShortName,
  category: 'libraries',
}));
