import { EntryDescription } from '@/components/EntryDescription.tsx';
import { EntryLocation } from '@/components/EntryLocation.tsx';
import { EntryName } from '@/components/EntryName.tsx';
import { Snapshot } from '@/components/Snapshot.tsx';
import { compendiumData } from '@/data';
import { getEstablishedLabel } from '@/data/utils.ts';
import { NotFoundView } from '@/views/NotFoundView.tsx';
import { useMemo } from 'react';
import { useParams } from 'react-router';

const fillerDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function EntryView() {
  const { entryId } = useParams();
  const entry = useMemo(() => compendiumData.find(
    (entry) => entry.id === entryId
  ), [entryId]);

  if (!entry) {
    return (
      <NotFoundView />
    );
  }

  return (
    <div className="compendium-entry">
      <div className="compendium-entry-column compendium-entry-column-info">
        <div className="compendium-entry-name">
          <EntryName entry={entry} />
        </div>
        <Snapshot entry={entry} />
      </div>
      <div className="compendium-entry-column compendium-entry-column-details">
        <div className="compendium-entry-section">
          <h2>{getEstablishedLabel(entry.category)}</h2>
          <p>{entry.date ?? '???'}</p>
        </div>
        <div className="compendium-entry-section">
          <h2>Location</h2>
          <EntryLocation location={entry.location} />
        </div>
      </div>
      <div className="compendium-entry-column compendium-entry-column-description">
        <div className="compendium-entry-section">
          <h2>Description</h2>
          <EntryDescription description={entry.description ?? fillerDescription} />
        </div>
      </div>
    </div>
  );
}
