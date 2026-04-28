import { CompendiumCategory, type CompendiumEntry } from './types';

export const compendiumData = {
  [CompendiumCategory.Buildings]: [
    "CN Tower",
    "Rogers Centre",
    "Manulife Building"
  ],
  [CompendiumCategory.Museums]: [
    "Royal Ontario Museum",
    "Art Gallery of Ontario",
  ],
  [CompendiumCategory.Parks]: [
    // TODO
  ],
  [CompendiumCategory.Landmarks]: [
    // TODO
  ],
  [CompendiumCategory.Stations]: [
    // TODO
  ],
  // TODO
} as const satisfies Record<CompendiumCategory, CompendiumEntry[]>;
