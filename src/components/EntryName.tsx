import type { CompendiumEntry } from '@/data/entries.ts';
import { useUserDataContext } from '@/data/UserDataContext.tsx';

export interface EntryNameProps {
  entry: CompendiumEntry;
}

export function EntryName({ entry }: EntryNameProps) {
  const userData = useUserDataContext();
  const completed = userData.completion[entry.id];

  return (
    <>
      {completed && <span className='compendium-completion-checkmark' title='Completed'>✓</span>}
      <h2>{entry.name}</h2>
    </>
  );
}
