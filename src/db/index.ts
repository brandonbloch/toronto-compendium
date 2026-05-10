import type { UserData } from '@/db/schema.ts';

export const userData = Bun.file('userdata.json', {
  type: 'application/json',
});

export async function loadUserData(): Promise<UserData> {
  return await userData.json();
}

export async function writeUserData(updatedUserData: UserData): Promise<void> {
  await userData.write(JSON.stringify(updatedUserData, null, 2));
}
