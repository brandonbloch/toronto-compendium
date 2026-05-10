import { compendiumData } from '@/data';

export function validateEntryId(entryId: unknown): entryId is string {
  return !!entryId && compendiumData.some(
    (entry) => entry.id === entryId
  );
}
