import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { FavouritesContextProvider } from "./store/favourites-context";

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <FavouritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouritesContextProvider>
);
