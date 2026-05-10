import { userData, writeUserData } from '@/db';
import { defaultUserData } from '@/db/default.ts';

// TODO: rename to getUserData (including file)
export async function loadUserData(): Promise<Response> {
  const exists = await userData.exists();
  if (exists) {
    // respond with loaded file data
    const data = await userData.json();
    return Response.json(data);
  } else {
    // initialize file and respond with default state
    await writeUserData(defaultUserData);
    return Response.json(defaultUserData);
  }
}
