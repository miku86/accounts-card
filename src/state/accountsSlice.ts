import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, Name } from "../utils/types";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    items: [] as Account[],
  },
  reducers: {
    editAccountText: (state, action: PayloadAction<Account>) => {
      const withoutNewAccount = state.items.filter(
        (state) => state.name !== action.payload.name
      );
      state.items = [...withoutNewAccount, action.payload];
    },
    toggleAccountVisibility: (state, action: PayloadAction<Name>) => {
      state.items = state.items.map((account: Account) => {
        if (account.id === action.payload) {
          return {
            ...account,
            showInCard: !account.showInCard,
          };
        }

        return account;
      });
      console.log(action.payload);
    },
  },
});

export const {
  editAccountText,
  toggleAccountVisibility,
} = accountsSlice.actions;

export default accountsSlice.reducer;
