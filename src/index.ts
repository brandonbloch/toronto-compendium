import { getUserData } from '@/api/getUserData.ts';
import { updateEntry } from '@/api/updateEntry.ts';
import { serve } from 'bun';
import index from './index.html';

const server = serve({
  routes: {

    '/images/:id': (request) =>
      new Response(Bun.file(`./images/${request.params.id}.webp`)),

    '/api/data': {
      GET: getUserData,
    },

    '/api/entry/:id': {
      POST: updateEntry,
    },

    // Serve index.html for all unmatched routes.
    '/*': index,
  },

  error: (error) => {

    let status: number;
    if (error.code === 'ENOENT') {
      status = 404;
    } else {
      console.error('router error handler', error, error.stack);
      status = 500;
    }

    return new Response(JSON.stringify({
      message: error.message,
      code: error.code,
    }, null, 2), {
      status,
    });
  },

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
