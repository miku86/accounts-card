import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, Card, CardId, Error, Message, Name } from "../utils/types";
import { AppDispatch } from "./store";

export const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    items: [] as Account[],
    createdCardId: (null as unknown) as CardId,
    fetchedCard: (null as unknown) as Card,
    error: (null as unknown) as Message,
  },
  reducers: {
    editAccountText: (state, action: PayloadAction<Account>) => {
      const withoutNewAccount = state.items.filter(
        (state) => state.name !== action.payload.name
      );
      state.items = [...withoutNewAccount, action.payload];
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload.message;
    },
    storeCreatedCardId: (state, action: PayloadAction<CardId>) => {
      state.createdCardId = action.payload;
    },
    storeFetchedCard: (state, action: PayloadAction<Card>) => {
      state.fetchedCard = action.payload;
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
  setError,
  storeCreatedCardId,
  storeFetchedCard,
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
    .catch((error: Error) => {
      console.error("Error creating card: ", error);
    });
};

export const fetchCard = (cardId: CardId) => (
  dispatch: AppDispatch,
  _: any,
  api: any
) => {
  return api
    .fetchCard(cardId)
    .then((result: any) => {
      if (result.message) {
        dispatch(setError(result));
      } else {
        dispatch(storeFetchedCard(result));
      }
    })
    .catch((message: Message) => {
      dispatch(setError({ message }));
    });
};

export default accountsSlice.reducer;
