export enum CompendiumCategory {
  Buildings = 'Buildings',
  Museums = 'Museums',
  Parks = 'Parks',
  Landmarks = 'Landmarks',
  Stations = 'Stations',
}

export interface CompendiumLocation {
  name?: string;
  address?: string;
  coords?: [number, number];
}

export interface CompendiumEntry {
  id: string;
  name: string;
  category: CompendiumCategory;
  location?: CompendiumLocation | string;
  date?: string;
  description?: string;
}
