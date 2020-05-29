import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "../utils/types";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    items: [] as Account[],
  },
  reducers: {
    editAccount: (state, action: PayloadAction<Account>) => {
      const withoutNewAccount = state.items.filter(
        (state) => state.name !== action.payload.name
      );
      state.items = [...withoutNewAccount, action.payload];
    },
  },
});

export const { editAccount } = accountsSlice.actions;

export default accountsSlice.reducer;
