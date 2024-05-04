const ROOTS = {
  AUTH: "/auth",
  DASHBOARD: "/",
};

export const getPathDashboardByKKey = (path: keyof typeof paths.dashboard) =>
  paths.dashboard[path].split("/").slice(-1).toString();

export const paths = {
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  dashboard: {
    root: ROOTS.DASHBOARD,
    store: "/store",
    storeBuy: "/store/buy",
    storeProducts: "/store/products",
    storeProductMoves: "/store/product-movments",
    storage: "/storage",
    warehouse: "/warehouse",
  },
};
