import { _categories, type CompendiumCategory } from '@/data/types.ts';

export const categories = _categories;

export const categorySlugs = {
  Buildings: 'buildings',
  Museums: 'museums',
  Parks: 'parks',
  Landmarks: 'landmarks',
  Schools: 'schools',
  Libraries: 'libraries',
  Transit: 'transit',
  Neighbourhoods: 'neighbourhoods',
  Wildlife: 'wildlife',
  FireStations: 'fire-stations',
} as const satisfies Record<CompendiumCategory, string>;

export const categoryLabels: Partial<Record<CompendiumCategory, string>> = {
  Buildings: 'Buildings & Architecture',
  Museums: 'Museums & Galleries',
  Transit: 'Transit Stations',
  Wildlife: 'Flora & Fauna',
  FireStations: 'Fire Stations',
} as const;
