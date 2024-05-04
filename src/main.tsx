import React from "react";
import ReactDOM from "react-dom/client";
import { ReactHelmetProvider } from "./providers/ReactHelmetProvider.tsx";
import { ReactRouterProvider } from "./providers/ReactRouterProvider.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactHelmetProvider>
      <ReactRouterProvider />
    </ReactHelmetProvider>
  </React.StrictMode>
);
