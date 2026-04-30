export const _categories = [
  'Buildings',
  'Landmarks',
  'Museums',
  'Parks',
  'Schools', // post-secondary only
  'Libraries',
  'Transit',
  'Neighbourhoods',
  'Wildlife',
  'FireStations',
] as const;

export type CompendiumCategory = typeof _categories[number];

export interface CompendiumLocation {
  name?: string;
  address?: string;
  coords?: [number, number];
}

export interface CompendiumEntry {
  id: string;
  name: string;
  shortName?: string;
  category: CompendiumCategory;
  location?: CompendiumLocation | string;
  date?: string;
  description?: string;
}
