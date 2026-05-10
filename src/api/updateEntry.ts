import { validateEntryId } from '@/api/utils.ts';
import { loadUserData, writeUserData } from '@/db';
import type { BunRequest } from 'bun';
import { resize, thumbhash, toWebp } from 'imgkit';

// TODO: use Zod
// interface UpdateEntryRequestBody {
//   completed: 'true' | 'false';
//   image?: Uint8Array;
// }

export async function updateEntry(request: BunRequest<'/api/entry/:id'>): Promise<Response> {
  const entryId = request.params.id;
  if (!validateEntryId(entryId)) {
    return Response.json({
      error: 'Nonexistent entry ID',
    }, { status: 400 });
  }

  const formData = await request.formData();
  const completed = formData.get('completed');
  if (completed !== 'true' && completed !== 'false') {
    return Response.json({
      error: 'Expected boolean string for completed field',
    }, { status: 400 });
  }

  if (completed === 'false') {
    const updatedUserData = await loadUserData();
    delete updatedUserData.completion[entryId];
    await writeUserData(updatedUserData);
    await Bun.file(`./images/${entryId}.webp`).delete();
    return Response.json({});
  }

  const timestamp = new Date().toISOString();
  let imageThumbhash = '';
  // TODO: make image required
  const image = formData.get('image'); // optional

  if (image && (image instanceof File)) {
    const buf = Buffer.from(await image.arrayBuffer());
    const resized = await resize(buf, { width: 100, height: 100, fit: 'cover' });
    // const thumb = await smartCrop(resized, { aspectRatio: '1:1' });
    const thumbhashResult = await thumbhash(resized);
    imageThumbhash = thumbhashResult.dataUrl;

    const png = await toWebp(buf);
    const fullsizeImage = Bun.file(`./images/${entryId}.webp`);
    await fullsizeImage.write(png);
  }

  const updatedUserData = await loadUserData();
  updatedUserData.completion[entryId] = {
    timestamp,
    thumbhash: imageThumbhash,
  };
  await writeUserData(updatedUserData);


  return Response.json({});
}
