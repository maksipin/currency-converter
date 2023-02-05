import { configureStore } from "@reduxjs/toolkit";
import { currencyMarketAPI } from "./currencyMarketAPI";

export function createStore() {
  return configureStore({
    reducer: {
      [currencyMarketAPI.reducerPath]: currencyMarketAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(currencyMarketAPI.middleware),
  });
}
