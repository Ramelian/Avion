import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basket";
import {api} from "../features/api"

const store = configureStore({
  reducer: {
    basket: basketReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
