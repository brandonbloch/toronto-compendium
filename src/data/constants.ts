import { CompendiumCategory } from '@/data/types.ts';

export const categoryLabels: Partial<Record<CompendiumCategory, string>> = {
  [CompendiumCategory.Museums]: "Museums & Galleries",
} as const;
