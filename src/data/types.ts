export enum CompendiumCategory {
  Buildings = 'Buildings',
  Museums = 'Museums',
  Parks = 'Parks',
  Landmarks = 'Landmarks',
  Stations = 'Stations',
}

export interface CompendiumEntry {
  id: string;
  name: string;
  category: CompendiumCategory;
}
