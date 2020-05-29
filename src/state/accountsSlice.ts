import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, Card, Name } from "../utils/types";
import { AppDispatch } from "./store";

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
    },
  },
});

export const {
  editAccountText,
  toggleAccountVisibility,
} = accountsSlice.actions;

export const createCard = (card: Card) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  api
    .createCard(card)
    .then((result: any) => {
      console.log(result);
    })
    .catch((error: any) => {
      console.error("Error creating card: ", error);
    });
};

export default accountsSlice.reducer;
