import "firebase/auth";
import { COLLECTIONS, db } from "../config/firebase";
import { Card, CardId } from "./types";

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
  fetchCard: async (cardId: CardId) => {
    try {
      const doc = await db.collection(COLLECTIONS.CARDS).doc(cardId).get();
      if (doc.exists) {
        return doc.data();
      } else {
        return { message: "No such document!" };
      }
    } catch (error) {
      return { message: "Error fetching!" };
    }
  },
};

export default api;
