import { Thumbnail } from '@/components/Thumbnail.tsx';
import { compendiumData } from '@/data';
import { categoryLabels } from '@/data/constants.ts';
import type { CompendiumCategory } from '@/data/types.ts';
import { useMemo } from 'react';

export interface SectionProps {
  category: CompendiumCategory;
}

export function Section({ category }: SectionProps) {
  const categoryLabel = categoryLabels[category] ?? category;
  const categoryEntries = useMemo(() => compendiumData.filter(
    (entry) => entry.category === category
  ), []);

  return (
    <section className="compendium-section">
      <h2>{categoryLabel}</h2>
      <div className="compendium-section-grid">
        {categoryEntries.map((entry) => (
          <Thumbnail key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
