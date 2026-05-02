import { userData } from '@/db';
import { defaultUserData } from '@/db/default.ts';

export async function loadUserData(): Promise<Response> {
  const exists = await userData.exists();
  if (exists) {
    // respond with loaded file data
    const data = await userData.json();
    return Response.json(data);
  } else {
    // initialize file and respond with default state
    await userData.write(JSON.stringify(defaultUserData, null, 2));
    return Response.json(defaultUserData);
  }
}
