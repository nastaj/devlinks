import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hzgvkffmhncxxihhclie.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6Z3ZrZmZtaG5jeHhpaGhjbGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2MzUyODYsImV4cCI6MjAxMTIxMTI4Nn0.71XOxqBu-4KaGtJep5siEo0R3xAokcHMEFyq1P2S394";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
