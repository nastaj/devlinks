import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kiijsjsmycugigqpfchf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpaWpzanNteWN1Z2lncXBmY2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2MTE1MjgsImV4cCI6MjAxMjE4NzUyOH0.0b3wa4Cpd_pHksIUXU1c-mf0GEYXZSPPnt0QO7Ax2kk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
