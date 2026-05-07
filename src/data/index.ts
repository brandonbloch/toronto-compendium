import { fireStationEntries } from '@/data/all-entries/fire-stations.ts';
import { libraryEntries } from '@/data/all-entries/libraries.tsx';
import { museumEntries } from '@/data/all-entries/museums.ts';
import { transitEntries } from '@/data/all-entries/transit.ts';
import type { CompendiumEntry } from '@/data/entries.ts';

export const compendiumData: readonly CompendiumEntry[] = [
  {
    id: 'cn-tower',
    name: 'CN Tower',
    category: 'buildings',
  },
  {
    id: 'rogers-centre',
    name: 'Rogers Centre',
    category: 'buildings',
  },
  {
    id: 'manulife',
    name: 'Manulife Building',
    category: 'buildings',
  },
  ...museumEntries,
  {
    id: 'raccoon',
    name: 'Raccoon',
    category: 'wildlife',
  },
  ...libraryEntries,
  ...transitEntries,
  {
    id: 'william-meany-maze',
    name: 'William Meany Maze',
    category: 'parks',
    location: 'islands',
  },
  ...fireStationEntries,
] as const;
