export async function onRequest(context) {
  const url = new URL(context.request.url);
  url.hostname = 'idea-king-api.ieop.top';

  const response = await fetch(url.toString(), {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
  });

  return response;
}
