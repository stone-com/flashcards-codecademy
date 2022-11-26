import { createSlice } from "@reduxjs/toolkit";
import { addTopicQuiz } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = {
        id: action.payload.id,
        topicId: action.payload.topicId,
        name: action.payload.name,
        cardIds: action.payload.cardIds
      };
    }
  }
});

// action creater thunk to add quiz, and then add the quizId to the corresponding topic id Array
export const addQuizTopic = (quiz) => {
  const { quizId, topicId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addTopicQuiz({ quizId: quizId, topicId: topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
