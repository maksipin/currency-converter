import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RUB = {
  ID: "R00001",
  NumCode: "643",
  CharCode: "RUB",
  Nominal: 1,
  Name: "Российский рубль",
  Previous: 1,
  Value: 1,
};
const templateCurrencyQueue = ["RUB", "USD", "EUR", "GBP"];

export const currencyMarketAPI = createApi({
  reducerPath: "currencyAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.cbr-xml-daily.ru",
  }),
  tagTypes: ["Currency"],
  endpoints: (build) => ({
    getCurrencies: build.query({
      query: () => ({
        url: `/daily_json.js`,
      }),
      transformResponse: (response) => {
        response.Valute.RUB = RUB;
        const sortedCurrency = templateCurrencyQueue.map((item) => {
          const currency = response.Valute[item];
          delete response.Valute[item];
          return currency;
        });
        const keys = Object.keys(response.Valute);
        const currencyArray = keys.map((i) => response.Valute[i]);
        sortedCurrency.push(...currencyArray);
        return sortedCurrency;
      },
    }),
  }),
});
