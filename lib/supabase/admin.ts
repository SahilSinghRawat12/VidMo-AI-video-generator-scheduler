import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";
import { getSupabaseEnv } from "./env";

/**
 * Creates an administrative Supabase client using the Service Role Key.
 *
 * CAUTION: This client bypasses Row Level Security (RLS).
 * Only use this in trusted server contexts (e.g. background scheduler workers,
 * webhooks, automated video rendering pipelines). NEVER expose this key to the browser.
 */
export function createAdminClient() {
  const { url, serviceRoleKey } = getSupabaseEnv();

  return createSupabaseClient<Database>(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
