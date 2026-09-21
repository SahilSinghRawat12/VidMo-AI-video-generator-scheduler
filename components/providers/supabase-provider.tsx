"use client";

import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import type { User, Session, SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Database } from "@/types/database.types";

interface SupabaseContextType {
  supabase: SupabaseClient<Database>;
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isConfigured: boolean;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined);

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const configured = useMemo(() => isSupabaseConfigured(), []);
  const [isLoading, setIsLoading] = useState(() => configured);

  const refreshUser = useCallback(async () => {
    if (!configured) {
      setIsLoading(false);
      return;
    }
    try {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setUser(data.session?.user ?? null);
    } catch (error) {
      console.warn("Error fetching Supabase session:", error);
    } finally {
      setIsLoading(false);
    }
  }, [configured, supabase]);

  const signOut = useCallback(async () => {
    if (!configured) return;
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }, [configured, supabase]);

  useEffect(() => {
    if (!configured) return;

    let isMounted = true;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (isMounted) {
          setSession(data.session);
          setUser(data.session?.user ?? null);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.warn("Error fetching Supabase session:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (isMounted) {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [configured, supabase]);

  const value = useMemo(
    () => ({
      supabase,
      user,
      session,
      isLoading,
      isConfigured: configured,
      signOut,
      refreshUser,
    }),
    [supabase, user, session, isLoading, configured, signOut, refreshUser]
  );

  return <SupabaseContext.Provider value={value}>{children}</SupabaseContext.Provider>;
}

export function useSupabaseContext() {
  const context = useContext(SupabaseContext);
  if (context === undefined) {
    throw new Error("useSupabaseContext must be used within a SupabaseProvider");
  }
  return context;
}
