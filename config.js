window.NETPROFIT_CONFIG = {
  APP_URL: "https://klinetx.github.io/netprofit/",
  API_BASE_URL: "https://sherman-round-grows-aquarium.trycloudflare.com",
  BOT_USERNAME: "",
  VIP_INVOICE_URL: "",
  PREMIUM_INVOICE_URL: "",
  VIP_PRICE: 299,
  PREMIUM_PRICE: 699,
  APP_NAME: "Net Profit",
  APP_VERSION: "3.0.1",
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
