import { userData } from '@/db';
import type { UserData } from '@/db/schema.ts';
import type { BunRequest } from 'bun';

export async function saveUserData(request: BunRequest): Promise<Response> {
  const body: UserData = await request.json();
  await userData.write(JSON.stringify(body, null, 2));
  return Response.json({});
}
