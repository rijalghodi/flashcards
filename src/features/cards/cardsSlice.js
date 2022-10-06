import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: {}
  },
  reducers: {
    addCard: (state, action) => {
      const { cardId, front, back } = action.payload;
      state.cards[cardId] = {
        id: cardId,
        front: front,
        back: back
      };
    }
  }
  //extra reducers here
});

//selector
export const selectCards = (state) => state.cards.cards;
// actions + reducer
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
