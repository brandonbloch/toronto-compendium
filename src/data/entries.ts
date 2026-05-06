import type { CompendiumCategory } from '@/data/categories.ts';
import type { CompendiumLocation } from '@/data/locations.ts';
import type { ReactNode } from 'react';

export interface CompendiumEntry {
  id: string; // unique
  name: string;
  shortName?: string; // optional, if full name is too long for the grid
  jsxShortName?: ReactNode; // if things like <wbr /> or &shy; are needed
  category: CompendiumCategory;
  location?: CompendiumLocation;
  date?: string; // YYYY-MM-DD (UTC)
  description?: string;
}
