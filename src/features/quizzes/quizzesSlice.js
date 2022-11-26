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
