import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://snxpcqxzpsdlboktulki.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNueHBjcXh6cHNkbGJva3R1bGtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MDY0NzAsImV4cCI6MjAzMzA4MjQ3MH0.0-DFH9Uoo8mQgxoC8KvUkvoVHdEonndbVBAJ-E-AdlA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})