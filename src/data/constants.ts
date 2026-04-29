import type { CompendiumCategory } from '@/data/types.ts';

// used to ensure all members are present with no duplicates
const categoriesObj = {
  Buildings: 'Buildings',
  Museums: 'Museums',
  Parks: 'Parks',
  Landmarks: 'Landmarks',
  Schools: 'Schools',
  Libraries: 'Libraries',
  Transit: 'Transit',
  Neighbourhoods: 'Neighbourhoods',
  Wildlife: 'Wildlife',
  FireStations: 'FireStations',
  PoliceStations: 'PoliceStations',
} as const satisfies Record<CompendiumCategory, string>;

export const categories: readonly CompendiumCategory[] = Object.values(categoriesObj);

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
  PoliceStations: 'police-stations',
} as const satisfies Record<CompendiumCategory, string>;

export const categoryLabels: Partial<Record<CompendiumCategory, string>> = {
  Buildings: 'Buildings & Architecture',
  Museums: 'Museums & Galleries',
  Transit: 'Transit Stations',
  Wildlife: 'Flora & Fauna',
  FireStations: 'Fire Stations',
  PoliceStations: 'Police Stations',
} as const;
