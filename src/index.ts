import { loadImage } from '@/api/loadImage.ts';
import { loadUserData } from '@/api/loadUserData.ts';
import { saveUserData } from '@/api/saveUserData.ts';
import { serve } from 'bun';
import index from './index.html';

const server = serve({
  routes: {

    '/api/data': {
      GET: loadUserData,
      POST: saveUserData,
    },

    '/api/image/:id': {
      GET: loadImage,
    },

    // Serve index.html for all unmatched routes.
    '/*': index,
  },

  error: (error) => new Response(JSON.stringify({
    message: error.message,
    code: error.code,
  }, null, 2), {
    status: 500,
  }),

  development: process.env.NODE_ENV !== 'production' && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
