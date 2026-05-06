import type { CompendiumEntry } from '@/data/entries.ts';

export interface SnapshotProps {
  entry: CompendiumEntry;
}

export function Snapshot({ entry }: SnapshotProps) {
  return (
    <>
      <div className="compendium-entry-snapshot-background" style={{
        backgroundImage: `url('/api/image/${entry.id}')`,
      }}></div>
      <div className="compendium-entry-snapshot">{/* TODO */}</div>
    </>
  );
}
