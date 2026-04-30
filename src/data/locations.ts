export const locations = [
  'islands',
] as const;

export type CompendiumLocation = typeof locations[number];

export interface CompendiumLocationDetails {
  name: string;
  address?: string;
  coords?: [number, number]; // [degrees north, degrees east]
}

export const locationDetails: Record<CompendiumLocation, CompendiumLocationDetails> = {
  islands: {
    name: 'Toronto Islands',
  },
};
