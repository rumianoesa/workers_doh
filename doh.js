export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!env.DOH) {
      return new Response("环境变量 DOH 未设置", { status: 400 });
    }
    url.hostname = env.DOH;
    const reqPath = url.pathname;

    if (!env.TOKEN) {
      if (reqPath !== "/dns-query") {
        return new Response(null, { status: 400 });
      }
      return fetch(url, request);
    }

    const expectedPath = "/" + env.TOKEN;
    if (reqPath !== expectedPath) {
      return new Response(null, { status: 400 });
    }
    url.pathname = "/dns-query";
    return fetch(url, request);
  }
}