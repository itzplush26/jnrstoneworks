const DAILY_LIMIT = 3;
const WINDOW_MS = 24 * 60 * 60 * 1000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitStore = Map<string, RateLimitEntry>;

const globalForRateLimit = globalThis as typeof globalThis & {
  inquiryRateLimitStore?: RateLimitStore;
};

function getStore(): RateLimitStore {
  if (!globalForRateLimit.inquiryRateLimitStore) {
    globalForRateLimit.inquiryRateLimitStore = new Map();
  }

  return globalForRateLimit.inquiryRateLimitStore;
}

function pruneExpiredEntries(store: RateLimitStore, now: number) {
  for (const [key, entry] of store) {
    if (now >= entry.resetAt) {
      store.delete(key);
    }
  }
}

export function checkInquiryRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const store = getStore();
  const now = Date.now();

  pruneExpiredEntries(store, now);

  const entry = store.get(key);

  if (!entry || now >= entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= DAILY_LIMIT) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }

  entry.count += 1;
  store.set(key, entry);

  return { allowed: true };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");

  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}
