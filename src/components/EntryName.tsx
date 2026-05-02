import type { CompendiumEntry } from '@/data/entries.ts';
import { useUserData } from '@/useUserData.ts';

export interface EntryNameProps {
  entry: CompendiumEntry;
}

export function EntryName({ entry }: EntryNameProps) {
  const { userData, updateEntryCompletion } = useUserData();
  const completed = userData.completion[entry.id];

  return (
    <>
      <button className='compendium-completion-checkmark'
              data-completed={completed}
              title={`Mark as ${completed ? 'not completed' : 'completed'}`}
              onClick={() => updateEntryCompletion(entry.id, !completed)}
      >
        ✓
      </button>
      <h2>{entry.name}</h2>
    </>
  );
}
