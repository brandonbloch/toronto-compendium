import { compendiumData } from '@/data';
import type { UserData } from '@/db/schema.ts';

export const defaultUserData: UserData = {
  completion: Object.fromEntries(
    compendiumData.map((entry) => [entry.id, false])
  )
} as const;
