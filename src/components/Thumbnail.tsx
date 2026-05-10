import type { CompendiumEntry } from '@/data/entries.ts';
import { useUserData } from '@/useUserData.ts';

export interface ThumbnailProps {
  entry: CompendiumEntry;
}

export function Thumbnail({ entry }: ThumbnailProps) {
  const { userData } = useUserData();

  const completion = userData.completion[entry.id];
  const completed = !!completion;
  const thumbnail = completion ? `url(${completion.thumbhash})` : undefined;

  return (
    <a className="compendium-thumbnail"
       href={`/entries/${entry.id}`}
       title={entry.name}
       data-completed={completed}>
      <div className="compendium-thumbnail-image"
           role="presentation"
           data-category={entry.category}
           data-completed={completed}
           style={{
             // TODO: avoid inline styles, prefer data attributes if needed
             backgroundImage: thumbnail,
           }}
      ></div>
      {<h3>{entry.jsxShortName ?? entry.shortName ?? entry.name}</h3>}
    </a>
  );
}
