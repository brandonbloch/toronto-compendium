import { Section } from '@/components/Section.tsx';
import { CompendiumCategory } from '@/data/types.ts';

export function CompendiumView() {
  return (
    <div className="compendium">
      <h1>Toronto Compendium</h1>
      {Object.values(CompendiumCategory).map((category) => {
        return <Section key={category} category={category} />
      })}
    </div>
  );
}
