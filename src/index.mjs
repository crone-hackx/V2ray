export default {
  async fetch(request, env) {
    return new Response("Gardevoir Worker is LIVE ⚡", {
      headers: { "content-type": "text/plain" }
    });
  }
};
