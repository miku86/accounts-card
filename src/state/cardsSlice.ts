import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../utils/types";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: [] as Card[],
  },
  reducers: {},
});

export const {} = cardsSlice.actions;

export default cardsSlice.reducer;
