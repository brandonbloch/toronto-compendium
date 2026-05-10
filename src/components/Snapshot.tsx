import type { CompendiumEntry } from '@/data/entries.ts';
import { useUserData } from '@/useUserData.ts';

export interface SnapshotProps {
  entry: CompendiumEntry;
}

export function Snapshot({ entry }: SnapshotProps) {
  const { updateEntryCompletion } = useUserData();

  return (
    <>
      <div className="compendium-entry-snapshot-background" style={{
        // TODO: avoid inline styles, prefer data attributes if needed
        backgroundImage: `url('/images/${entry.id}')`,
      }}></div>
      <div className="compendium-entry-snapshot">
        <input className="compendium-entry-snapshot-uploader"
               type="file"
               accept="image/*"
               onInput={(e) => {
                 const target = e.target as HTMLInputElement;
                 if (target.files && target.files.length > 0) {
                   const file = target.files[0]!;
                   updateEntryCompletion(entry.id, true, file);
                 }
               }}
        />
      </div>
    </>
  );
}
