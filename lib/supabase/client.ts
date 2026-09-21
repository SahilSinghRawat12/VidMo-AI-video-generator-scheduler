import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database.types";
import { getSupabaseEnv } from "./env";

/**
 * Creates a Supabase browser client for use in Client Components.
 * Reuses existing singleton instance on the client when possible.
 */
let clientInstance: ReturnType<typeof createBrowserClient<Database>> | null = null;

export function createClient() {
  if (typeof window !== "undefined" && clientInstance) {
    return clientInstance;
  }

  const { url, anonKey } = getSupabaseEnv();
  const client = createBrowserClient<Database>(url, anonKey);

  if (typeof window !== "undefined") {
    clientInstance = client;
  }

  return client;
}
