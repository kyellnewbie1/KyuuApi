// KyuuApi - Supabase Configuration
window.CONFIG = {
    SUPABASE_URL: "https://pwrpciqxbpqyjqtmgiiv.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3cnBjaXF4YnBxeWpxdG1naWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NDczNjQsImV4cCI6MjEwMDAyMzM2NH0.Kv4Ww8r9UB1jOvicbNrBYD0UYEN7Min8x1FCDHCoOZ8",
    SITE_NAME: "KyuuApi",
    SITE_URL: "https://kyuuapi.eu.cc",
    DEFAULT_AVATAR: "https://via.placeholder.com/150",
    API_BASE: "/api/v1",
    PLANS: {
        free: {
            name: "Free",
            requests: 100,
            price: 0,
            currency: "IDR",
            color: "#8b5cf6",
            features: ["100 requests/hari", "Dokumentasi lengkap", "Support community"]
        },
        premium: {
            name: "Premium",
            requests: 10000,
            price: 50000,
            currency: "IDR",
            color: "#eab308",
            features: ["10.000 requests/hari", "Custom API Key", "Priority Support", "Akses semua endpoint", "Tidak ada limitasi"]
        }
    }
};

// Initialize Supabase client
const supabaseClient = supabase.createClient(
    CONFIG.SUPABASE_URL,
    CONFIG.SUPABASE_ANON_KEY
);