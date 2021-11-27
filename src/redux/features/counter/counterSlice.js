import { createSlice } from "@reduxjs/toolkit";

// createSlice allow use to create a "slice", which is a collectin of Redux reducer login and actions for a single feature.
// createSlide takes care of the work of generating action type strings, action creator functions and action object.
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux allow to write "mutating" logic but it doesn't actually mutate the state.
      // Should not mutate the states
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// this above function results in three action types which are "counter/increment", "counter/decrement" and "counter/incrementByAmount"

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// since reducers must not do any asynchronous logic or other "side effect"
// so, we wrap the reducers with async function by creating a function (think) which allow us to perform async logic.
// thnuk requires redux-thunk package and redux-toolkit configureStore function already set up for us.
export const incrementAsync = (amount) => (dispath, getState) => {
  setTimeout(() => dispath(incrementByAmount(amount)), 1000);
};

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
