import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const initialState = {
  quizzes: {
    // quizzes will be like this
    // 123: {
    //   id: '123',
    //   name: example,
    //   topicId: '234',
    //   cardIds: ['00', '11']
    // }
  }
};

// Slice
export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
    // next reducers here
  }
});

// An action creator thunk to quizz to the related topic
export const addQuizAddQuizId = (quiz) => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: quizId, topicId: topicId }));
  };
};

// Selectors
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Actions & Reducers
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
