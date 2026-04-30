import { Section } from '@/components/Section.tsx';
import { categories } from '@/data/categories.ts';

export function CompendiumView() {
  return categories.map((category) => {
    return <Section key={category} category={category} />
  });
}
