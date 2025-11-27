"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "❌ ERROR: Las variables VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY NO están accesibles en el cliente."
  );
  throw new Error("Faltan variables de entorno de Supabase en el cliente.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
