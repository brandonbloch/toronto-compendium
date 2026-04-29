import { CompendiumCategory } from '@/data/types.ts';

export const categoryLabels: Partial<Record<CompendiumCategory, string>> = {
  [CompendiumCategory.Museums]: "Museums & Galleries",
  [CompendiumCategory.Transit]: "Transit Stations",
  [CompendiumCategory.Wildlife]: "Flora & Fauna",
} as const;
