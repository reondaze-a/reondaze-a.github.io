import { checkResponse, normalizeFetchError } from "./promiseCheckers";

export async function request(path, init = {}) {
  const hasBody = init.body != null;

  try {
    const res = await fetch(`${baseUrl}${path}`, {
      cache: "no-store",
      credentials: "same-origin", // default on same origin; harmless to keep
      ...init,
      headers: {
        ...(hasBody ? { "Content-Type": "application/json" } : {}),
        ...(init.headers || {}),
      },
    });
    return await checkResponse(res); // should parse JSON or throw on !ok
  } catch (err) {
    // Important: let callers .catch(...) properly
    throw normalizeFetchError(err);
  }
}
