import type { CompendiumEntry } from '@/data/types.ts';

export interface ThumbnailProps {
  entry: CompendiumEntry;
}

export function Thumbnail({ entry }: ThumbnailProps) {
  return (
    <a className="compendium-thumbnail" href="#" onClick={(e) => e.preventDefault()}>
      <div className="compendium-thumbnail-image"></div>
      {<h3>{entry}</h3>}
    </a>
  );
}
