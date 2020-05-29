import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "../utils/api";
import accountsReducer from "./accountsSlice";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
  ],
});

export type AppDispatch = typeof store.dispatch;

export default store;
