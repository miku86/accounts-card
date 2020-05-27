import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "../utils/api";
import cardsReducer from "./cardsSlice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
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
