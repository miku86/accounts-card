import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, Card, CardId, Name } from "../utils/types";
import { AppDispatch } from "./store";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    items: [] as Account[],
    createdCardId: (null as unknown) as CardId,
  },
  reducers: {
    editAccountText: (state, action: PayloadAction<Account>) => {
      const withoutNewAccount = state.items.filter(
        (state) => state.name !== action.payload.name
      );
      state.items = [...withoutNewAccount, action.payload];
    },
    storeCreatedCardId: (state, action: PayloadAction<CardId>) => {
      state.createdCardId = action.payload;
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
  storeCreatedCardId,
  toggleAccountVisibility,
} = accountsSlice.actions;

export const createCard = (card: Card) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  return api
    .createCard(card)
    .then((createdCardId: CardId) => {
      dispatch(storeCreatedCardId(createdCardId));
      return createdCardId;
    })
    .catch((error: any) => {
      console.error("Error creating card: ", error);
    });
};

export default accountsSlice.reducer;
