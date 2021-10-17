import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
console.log(
  Constants.manifest.extra.supabaseUrl,
  Constants.manifest.extra.supabaseAnonKey
);
const supabaseUrl = Constants.manifest.extra.supabaseUrl;
const supabaseAnonKey = Constants.manifest.extra.supabaseAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false,
});
