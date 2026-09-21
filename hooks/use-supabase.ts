"use client";

import { useSupabaseContext } from "@/components/providers/supabase-provider";

/**
 * Custom hook to access the global Supabase client, current session,
 * user, and auth helpers throughout any client component.
 */
export function useSupabase() {
  return useSupabaseContext();
}
