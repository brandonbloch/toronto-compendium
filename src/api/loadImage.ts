import { compendiumData } from '@/data';
import type { BunRequest } from 'bun';

export async function loadImage(request: BunRequest<'/api/image/:id'>): Promise<Response> {
  const { id } = request.params;
  if (!compendiumData.some((entry) => entry.id === id)) {
    return Response.json({
      error: 'Nonexistent entry ID',
    }, {
      status: 400,
    });
  }

  const file = Bun.file(`./images/${id}.jpg`);
  return new Response(file);
}
