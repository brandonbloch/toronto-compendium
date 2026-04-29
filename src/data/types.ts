export type CompendiumCategory =
  | 'Buildings'
  | 'Museums'
  | 'Parks'
  | 'Landmarks'
  | 'Schools' // post-secondary only
  | 'Libraries'
  | 'Transit'
  | 'Neighbourhoods'
  | 'Wildlife'
  | 'FireStations'
  | 'PoliceStations'
  ;

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
