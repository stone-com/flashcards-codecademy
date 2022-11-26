import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.cardId] = {
        id: action.payload.cardId,
        front: action.payload.front,
        back: action.payload.back
      };
    }
  }
});
