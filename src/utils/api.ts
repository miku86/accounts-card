import "firebase/auth";
import { COLLECTIONS, db } from "../config/firebase";
import { Card } from "./types";

const api = {
  createCard: async (card: Card) => {
    if (card.accounts && card.accounts.length === 0) return;

    try {
      const doc = await db.collection(COLLECTIONS.CARDS).add(card);
      return doc.id;
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
