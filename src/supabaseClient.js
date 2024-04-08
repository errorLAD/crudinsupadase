import { createClient } from '@supabase/supabase-js';
//to be more secure 

const supabaseURL = "https://ypjmmpmuhbusctzaatau.supabase.co" ;
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwam1tcG11aGJ1c2N0emFhdGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNzg3MjYsImV4cCI6MjAyNzk1NDcyNn0.Bc2u4cek-0K6BpvPyOi09YOc3WqZA7D6aXoFbR45V5U"; 


export const  supabase = createClient(supabaseURL, supabaseAnonKey); 
