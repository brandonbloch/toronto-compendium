import { Section } from '@/components/Section.tsx';
import { categories } from '@/data/constants.ts';

export function CompendiumView() {
  return (
    <div className="compendium">
      <h1>Toronto Compendium</h1>
      {categories.map((category) => {
        return <Section key={category} category={category} />
      })}
    </div>
  );
}
