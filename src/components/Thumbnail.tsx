import type { CompendiumEntry } from '@/data/types.ts';

export interface ThumbnailProps {
  entry: CompendiumEntry;
}

export function Thumbnail({ entry }: ThumbnailProps) {
  return (
    <a className="compendium-thumbnail" href={`/${entry.id}`} title={entry.name}>
      <div className="compendium-thumbnail-image"></div>
      {<h3>{entry.name}</h3>}
    </a>
  );
}
