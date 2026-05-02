export const categories = [
  'buildings',
  'monuments',
  'landmarks',
  'museums',
  'parks',
  'libraries',
  'transit',
  'neighbourhoods',
  'wildlife',
  'fire-stations',
] as const;

export type CompendiumCategory = typeof categories[number];

export const categoryLabels: Record<CompendiumCategory, string> = {
  buildings: 'Buildings & Architecture',
  monuments: 'Statues & Monuments',
  landmarks: 'Landmarks',
  museums: 'Museums & Galleries',
  parks: 'Parks',
  libraries: 'Libraries',
  transit: 'Transit Stations',
  neighbourhoods: 'Neighbourhoods',
  wildlife: 'Flora & Fauna',
  'fire-stations': 'Fire Stations',
} as const;
