import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fhzfoegescfldtnlsvtg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoemZvZWdlc2NmbGR0bmxzdnRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYwMzM1MDEsImV4cCI6MjAxMTYwOTUwMX0.Hx9-36SpxSVuMQmHhjCKMqW6-74DL8GRhvsWKtK7sgQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
