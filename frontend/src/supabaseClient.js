import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mhhjpxsrpfyeeewkrtnk.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oaGpweHNycGZ5ZWVld2tydG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgyMDg1NzUsImV4cCI6MjAwMzc4NDU3NX0.KBxmUveV-8V3yWlU1D-huhmYNRwU6ZO-o2M2zu3JTOg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
