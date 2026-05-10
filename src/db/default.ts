import type { UserData } from '@/db/schema.ts';

export const defaultUserData: UserData = {
  completion: {},
} as const;
