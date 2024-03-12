import { configureStore } from "@reduxjs/toolkit";
import api from "./api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
