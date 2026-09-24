window.NETPROFIT_CONFIG = {
  // GitHub Pages frontend URL
  APP_URL: "https://klinetx.github.io/netprofit/",

  // Leave empty until a backend API is available.
  // Example: "https://your-raven-api.example.com"
  API_BASE_URL: "",

  // Telegram bot username without @, if you want the "Open bot" action.
  BOT_USERNAME: "",

  // Optional Telegram Stars invoice links.
  // The bot can generate fresh links; put them here if you want
  // the static Mini App to open them directly.
  VIP_INVOICE_URL: "",
  PREMIUM_INVOICE_URL: "",

  // Product prices shown in the UI.
  VIP_PRICE: 299,
  PREMIUM_PRICE: 699,

  // App settings.
  APP_NAME: "Net Profit",
  APP_VERSION: "2.0.0",
  DEFAULT_CATEGORY: "all",

  // If true, the app uses demo content when the API is unavailable.
  DEMO_MODE: true
};

window.NETPROFIT_API = {
  url(path) {
    const base = String(window.NETPROFIT_CONFIG.API_BASE_URL || "").replace(/\/+$/, "");
    const clean = String(path || "").replace(/^\/+/, "");
    return base ? `${base}/${clean}` : "";
  }
};
