import type { CompendiumEntry } from '@/data/entries.ts';

interface MinimalMuseumEntry {
  id: string;
  name: string;
  shortName?: string; // if different from name
}

const minimalMuseumEntries: readonly MinimalMuseumEntry[] = [
  {
    id: 'rom',
    name: 'Royal Ontario Museum',
    shortName: 'ROM',
  },
  {
    id: 'ago',
    name: 'Art Gallery of Ontario',
    shortName: 'AGO',
  },
  {
    id: 'hockey-hall-of-fame',
    name: 'Hockey Hall of Fame',
  },
  {
    id: 'ontario-science-centre',
    name: 'Ontario Science Centre',
    shortName: 'Science Centre',
  },
  {
    id: 'aga-khan-museum',
    name: 'Aga Khan Museum',
  },
  {
    id: 'toronto-botanical-garden',
    name: 'Toronto Botanical Garden',
    shortName: 'Botanical Garden',
  },
  {
    id: 'toronto-zoo',
    name: 'Toronto Zoo',
  },
  {
    id: 'high-park-zoo',
    name: 'High Park Zoo',
  },
  {
    id: 'ripleys-aquarium',
    name: "Ripley's Aquarium of Canada",
    shortName: "Ripley's Aquarium",
  },
  {
    id: 'bata-shoe-museum',
    name: 'Bata Shoe Museum',
  },
  {
    id: 'little-canada',
    name: 'Little Canada',
  },
  {
    id: 'spadina-museum',
    name: 'Spadina Museum',
  },
  {
    id: 'allan-gardens-conservatory',
    name: 'Allan Gardens Conservatory',
    shortName: 'Allan Gardens',
  },
  {
    id: 'gardiner-museum',
    name: 'Gardiner Museum of Ceramic Art',
    shortName: 'Gardiner Museum',
  },
  {
    id: 'mackenzie-house',
    name: 'Mackenzie House',
  },
  {
    id: 'market-gallery',
    name: 'Market Gallery',
  },
  {
    id: 'moca',
    name: 'Museum of Contemporary Art',
    shortName: 'MOCA Toronto',
  },
  {
    id: 'museum-of-toronto',
    name: 'Museum of Toronto',
  },
  {
    id: 'mztv',
    name: 'MZTV Museum of Television',
    shortName: 'MZTV',
  },
  {
    id: 'ocad-galleries',
    name: 'OCAD University Galleries',
    shortName: 'OCAD Galleries',
  },
  {
    id: 'redpath-sugar-museum',
    name: 'Redpath Sugar Museum',
    shortName: 'Redpath Museum',
  },
  {
    id: 'riverdale-farm',
    name: 'Riverdale Farm',
  },
  {
    id: 'textile-museum-of-canada',
    name: 'Textile Museum of Canada',
    shortName: 'Textile Museum',
  },
  {
    id: 'todmorden-mills',
    name: 'Todmorden Mills',
  },
  {
    id: 'toronto-police-museum',
    name: 'Toronto Police Museum and Discovery Centre',
    shortName: 'Police Museum',
  },
  {
    id: 'toronto-railway-museum',
    name: 'Toronto Railway Museum',
    shortName: 'Railway Museum',
  },
  {
    id: 'colborne-lodge',
    name: 'Colborne Lodge',
  },
  {
    id: 'friars-music-museum',
    name: "Friar's Music Museum",
  },
  {
    id: 'museum-of-illusions',
    name: 'Museum of Illusions',
  },
  {
    id: 'gibson-house-museum',
    name: 'Gibson House Museum',
    shortName: 'Gibson House',
  },
  {
    id: 'fort-york',
    name: 'Fort York National Historic Site',
    shortName: 'Fort York',
  },
  {
    id: 'montgomerys-inn',
    name: "Montgomery's Inn",
  },
  {
    id: 'scarborough-museum',
    name: 'Scarborough Museum',
  },
  {
    id: 'village-at-black-creek',
    name: 'Village at Black Creek',
    shortName: 'Pioneer Village',
  },
  {
    id: 'campbell-house-museum',
    name: 'Campbell House Museum',
    shortName: 'Campbell House',
  },
] as const;

export const museumEntries: readonly CompendiumEntry[] = minimalMuseumEntries.map((entry) => ({
  id: entry.id,
  name: entry.name,
  shortName: entry.shortName,
  category: 'museums',
}));
