import type { CompendiumEntry } from '@/data/entries.ts';
import { useUserDataContext } from '@/data/UserDataContext.tsx';

export interface ThumbnailProps {
  entry: CompendiumEntry;
}

export function Thumbnail({ entry }: ThumbnailProps) {
  const userData = useUserDataContext();
  return (
    <a className="compendium-thumbnail"
       href={`/entries/${entry.id}`}
       title={entry.name}
       data-completed={userData.completion[entry.id]}>
      <div className="compendium-thumbnail-image"
           role="presentation"
           data-category={entry.category}
      ></div>
      {<h3>{entry.shortName ?? entry.name}</h3>}
    </a>
  );
}
