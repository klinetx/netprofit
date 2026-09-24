window.NETPROFIT_CONFIG = {
  APP_URL: "https://klinetx.github.io/netprofit/",

  // IMPORTANT: replace with the public HTTPS URL of the Raven Host API.
  // Example: https://YOUR-RAVEN-DOMAIN.example/api is NOT needed; use the root.
  API_BASE_URL: "https://1108-c5ed5b50cc.app.ravenhost.space:2022",

  BOT_USERNAME: "",
  VIP_INVOICE_URL: "",
  PREMIUM_INVOICE_URL: "",

  VIP_PRICE: 299,
  PREMIUM_PRICE: 699,

  APP_NAME: "Net Profit",
  APP_VERSION: "3.0.0",
  DEFAULT_CATEGORY: "all",
  DEMO_MODE: false
};

window.NETPROFIT_API = {
  url(path) {
    const base = String(window.NETPROFIT_CONFIG.API_BASE_URL || "").replace(/\/+$/, "");
    const clean = String(path || "").replace(/^\/+/, "");
    return base ? `${base}/${clean}` : "";
  }
};
