import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {
    // topics will be like this:
    // 123: {
    //   id: "123",
    //   name: "Redux",
    //   icon: null,
    //   quizIds: []
    // }
  }
};

// Slice
export const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      // add a new state, to the topics
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

// Selectors
export const selectTopics = (state) => state.topics.topics;

// Action & Recuders
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
