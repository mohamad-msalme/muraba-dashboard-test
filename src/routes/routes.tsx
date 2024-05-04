import React from "react";

import { createBrowserRouter, Navigate } from "react-router-dom";
import { paths } from "./paths";
import { App } from "../layout";
import HomePage from "../pages/home";
import LayoutStore from "../pages/store/LayoutStore";
import { StoragePage, StorePage, WarehousePage } from "../pages";
import {
  StoreBuyPage,
  StoreProduct,
  StoreProductMovments,
} from "../pages/store";
import NotFoundPage from "../pages/404";

// const NotFoundPage = React.lazy(() => import("../pages/404"));
// const HomePage = React.lazy(() => import("../pages/home"));
// const StorePage = React.lazy(() => import("../pages/store/StorePage"));
// const StoragePage = React.lazy(() => import("../pages/storage"));
// const WarehousePage = React.lazy(() => import("../pages/warehouse"));
// const StoreBuyPage = React.lazy(() => import("../pages/store/pages/store-buy"));
// const StoreProductMovments = React.lazy(
//   () => import("../pages/store/pages/store-product-movments")
// );
// const StoreProduct = React.lazy(
//   () => import("../pages/store/pages/store-products")
// );
// const LayoutStore = React.lazy(() => import("../pages/store/LayoutStore"));

export const routes = createBrowserRouter([
  {
    path: paths.dashboard.root,
    element: (
      <React.Suspense>
        <App />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <LayoutStore />,
        children: [
          {
            path: paths.dashboard.store,
            element: <StorePage />,
          },
          {
            path: paths.dashboard.storeBuy,
            element: <StoreBuyPage />,
          },
          {
            path: paths.dashboard.storeProducts,
            element: <StoreProduct />,
          },
          {
            path: paths.dashboard.storeProductMoves,
            element: <StoreProductMovments />,
          },
        ],
      },
      {
        path: paths.dashboard.storage,
        element: <StoragePage />,
      },
      {
        path: paths.dashboard.warehouse,
        element: <WarehousePage />,
      },
    ],
  },
  {
    path: "404",
    element: <NotFoundPage />,
  },
  { path: "*", element: <Navigate to="/404" replace /> },
]);
