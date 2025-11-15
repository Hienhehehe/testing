
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? 'https://xvavscylebgwzgjnwnmm.supabase.com'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2YXZzY3lsZWJnd3pnam53bm1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMjE5NDAsImV4cCI6MjA3ODY5Nzk0MH0.2amFG__cRGjNdFaD_NpQ2HwXZJSGrhwGf0JCI7fumJo'

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

export default supabase