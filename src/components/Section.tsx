import { Thumbnail } from '@/components/Thumbnail.tsx';
import { compendiumData } from '@/data';
import { categoryLabels, type CompendiumCategory } from '@/data/categories.ts';
import { useUserData } from '@/useUserData.ts';
import { useMemo } from 'react';

export interface SectionProps {
  category: CompendiumCategory;
}

export function Section({ category }: SectionProps) {
  const { userData } = useUserData();

  const categoryLabel = categoryLabels[category];
  const categoryEntries = useMemo(() => compendiumData.filter(
    (entry) => entry.category === category
  ), [category]);
  const totalEntries = categoryEntries.length;
  const completedCount = useMemo(() => categoryEntries.reduce((acc, entry) => {
    const completed = !!userData.completion[entry.id];
    return completed ? acc + 1 : acc;
  }, 0), [categoryEntries, userData.completion]);

  return (
    <section className="compendium-section">
      <div className="compendium-section-header">
        <h2>{categoryLabel}</h2>
        <h3>{completedCount}/{totalEntries}</h3>
      </div>
      <div className="compendium-section-grid">
        {categoryEntries.map((entry) => (
          <Thumbnail key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}
