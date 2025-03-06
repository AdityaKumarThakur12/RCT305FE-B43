import axios from "axios";
import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  SUBMIT_ANSWER,
  SKIP_QUESTION,
} from "./action";

export const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: FETCH_QUIZ_REQUEST });
  try {
    const response = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz");
    dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: FETCH_QUIZ_FAILURE, payload: error.message });
  }
};

export const submitAnswer = (questionId, answer) => ({
  type: SUBMIT_ANSWER,
  payload: { questionId, answer },
});

export const skipQuestion = (questionId) => ({
  type: SKIP_QUESTION,
  payload: questionId,
});

const initialState = {
  questions: [],
  loading: false,
  error: null,
  score: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, loading: true };
    case FETCH_QUIZ_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case FETCH_QUIZ_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SUBMIT_ANSWER:
      return { ...state, score: state.score + 1 };
    case SKIP_QUESTION:
      return state;
    default:
      return state;
  }
};

export default quizReducer;
