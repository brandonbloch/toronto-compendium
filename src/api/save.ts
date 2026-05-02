import type { BunRequest } from 'bun';

export async function saveUserData(request: BunRequest): Promise<Response> {
  // TODO
  console.log(request.body);
  return Response.json({});
}
