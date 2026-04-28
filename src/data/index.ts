import { CompendiumCategory, type CompendiumEntry } from './types';

export const compendiumData = [
  {
    id: "cn-tower",
    name: "CN Tower",
    category: CompendiumCategory.Buildings,
  },
  {
    id: "rogers-centre",
    name: "Rogers Centre",
    category: CompendiumCategory.Buildings,
  },
  {
    id: "manulife",
    name: "Manulife Building",
    category: CompendiumCategory.Buildings,
  },
  {
    id: "rom",
    name: "Royal Ontario Museum",
    category: CompendiumCategory.Museums,
  },
  {
    id: "ago",
    name: "Art Gallery of Ontario",
    category: CompendiumCategory.Museums,
  },
] as const satisfies readonly CompendiumEntry[];
