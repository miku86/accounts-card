import "firebase/auth";
import { addDoc, collection, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../config/firebase";
import { Card, CardId } from "./types";

const api = {
  createCard: async (card: Card) => {
    if (card.accounts && card.accounts.length === 0) return;

    try {
      const doc = await addDoc(collection(db, "users"), card);
      return doc.id;
    } catch (error) {
      console.log(error);
    }
  },
  fetchCard: async (cardId: CardId) => {
    try {
      const docRef = doc(db, "users", cardId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return { message: "No such document!" };
      }
    } catch (error) {
      return { message: "Error fetching!" };
    }
  },
};

export default api;
