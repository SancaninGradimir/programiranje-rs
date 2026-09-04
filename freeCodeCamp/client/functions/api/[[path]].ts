export async function onRequest(context: {
  request: Request;
  params: {
    path?: string[];
  };
}) {
  const { request, params } = context;

  const path = params.path?.join('/') ?? '';

  const targetUrl = new URL(
    `http://92.5.132.116:3000/${path}`
  );

  targetUrl.search = new URL(request.url).search;

  const headers = new Headers(request.headers);

  headers.delete('host');

  const proxyRequest = new Request(targetUrl.toString(), {
    method: request.method,
    headers,
    body:
      request.method === 'GET' || request.method === 'HEAD'
        ? undefined
        : request.body,
    redirect: 'manual'
  });

  return fetch(proxyRequest);
}
