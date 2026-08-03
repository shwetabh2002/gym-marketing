/** Keep aligned with backendgym/src/config/countries.config.ts */
export const COUNTRIES = [
  { code: "IN", name: "India", currency: "INR" },
  // { code: "AE", name: "United Arab Emirates", currency: "AED" },
  // { code: "US", name: "United States", currency: "USD" },
  // { code: "GB", name: "United Kingdom", currency: "GBP" },
  // { code: "SG", name: "Singapore", currency: "SGD" },
  // { code: "AU", name: "Australia", currency: "AUD" },
] as const;

export const DEFAULT_COUNTRY_CODE = "IN";
