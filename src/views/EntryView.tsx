import { compendiumData } from '@/data';
import { useMemo } from 'react';
import { useParams } from 'react-router';

export function EntryView() {
  const { entryId } = useParams();
  // TODO: remove non-null assertion, add error handling
  const entry = useMemo(() => compendiumData.find(
    (entry) => entry.id === entryId
  ), [])!;
  return <div className="compendium">{entry.name}</div>;
}
