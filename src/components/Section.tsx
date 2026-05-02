import { Thumbnail } from '@/components/Thumbnail.tsx';
import { compendiumData } from '@/data';
import { categoryLabels, type CompendiumCategory } from '@/data/categories.ts';
import { useMemo } from 'react';

export interface SectionProps {
  category: CompendiumCategory;
}

export function Section({ category }: SectionProps) {
  const categoryLabel = categoryLabels[category];
  const categoryEntries = useMemo(() => compendiumData.filter(
    (entry) => entry.category === category
  ), [category]);

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
