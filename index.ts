console.log("Hello via Bun!");

import { serve } from "bun";

const PORT = 8080

serve(
  {
    port: PORT,
    async fetch(request) {

      // Default: 404 not found
      return new Response("Not found!", {status: 404});
    },
  }
);

console.log(`Bun server started on https://localhost:${PORT} ...`);



