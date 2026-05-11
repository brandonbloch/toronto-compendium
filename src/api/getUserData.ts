import { loadUserData, userDataExists, writeUserData } from '@/db';
import { defaultUserData } from '@/db/default.ts';

export async function getUserData(): Promise<Response> {
  try {
    const data = await loadUserData();
    return Response.json(data);
  } catch (err) {
    const exists = await userDataExists();
    if (!exists) {
      // initialize
      await writeUserData(defaultUserData);
      return Response.json(defaultUserData);
    }
    throw err;
  }
}
