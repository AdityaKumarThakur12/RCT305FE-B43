import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Feedback = {
  id: number;
  name: string;
  email: string;
  rating: number;
  feedback: string;
  date: string;
};

type FeedbackState = {
  entries: Feedback[];
};

const initialState: FeedbackState = {
  entries: [],
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    addFeedback(state, action: PayloadAction<Feedback>) {
      state.entries.push(action.payload);
    },
    filterFeedback(
      state,
      action: PayloadAction<{ rating?: number; date?: string }>
    ) {
      const { rating, date } = action.payload;

      state.entries = state.entries.filter((entry) => {
        const matchesRating = rating !== undefined ? entry.rating === rating : true;
        const matchesDate = date !== undefined ? entry.date === date : true;
        return matchesRating && matchesDate;
      });
    },
  },
});

export const { addFeedback, filterFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;