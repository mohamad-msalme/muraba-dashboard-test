import React from "react";
import { routes } from "../routes/routes";
import { RouterProvider } from "react-router-dom";

export const ReactRouterProvider: React.FC = () => (
  <RouterProvider router={routes} />
);
