// backend base url; falls back to local spring boot when .env is missing
export const API_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";
