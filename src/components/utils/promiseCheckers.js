// Check fetch Response and throw
export async function checkResponse(res) {
    if (res.ok) {
      return await res.json();
    }
    let data;
    try {
      data = await res.json();
    } catch {
      /* ignore parse error */
    }
    throw new Error(
      data?.message || `Request failed (HTTP ${res.status}) — please try again later.`
    );
  }
  
  export function normalizeFetchError(err) {
    if (err instanceof Error && err.message === "Failed to fetch") {
      throw new Error("Network error, please try again later.");
    }
    throw err;
  }