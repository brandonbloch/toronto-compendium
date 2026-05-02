import type { CompendiumCategory } from '@/data/categories.ts';

export function getEstablishedLabel(category: CompendiumCategory): string {
  switch (category) {
    case 'buildings':
    case 'transit':
      return 'Constructed';
    case 'monuments':
      return 'Erected';
    default:
      return 'Established';
  }
}
