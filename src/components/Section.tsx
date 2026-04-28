import { Thumbnail } from '@/components/Thumbnail.tsx';
import { compendiumData } from '@/data';
import { categoryLabels } from '@/data/constants.ts';
import type { CompendiumCategory } from '@/data/types.ts';

export interface SectionProps {
  category: CompendiumCategory;
}

export function Section({ category }: SectionProps) {
  const categoryLabel = categoryLabels[category] ?? category;
  const categoryEntries = compendiumData[category];

  return (
    <section className="compendium-section">
      <h2>{categoryLabel}</h2>
      <div className="compendium-section-grid">
        {categoryEntries.map((entry) => (
          <Thumbnail key={entry} entry={entry} />
        ))}
      </div>
    </section>
  );
}
