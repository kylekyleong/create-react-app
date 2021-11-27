import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
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

// export reducer
export const counterReducer = counterSlice.reducer;

// export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// async thunk
export const incrementAsync = (amount) => (dispath, getState) => {
  setTimeout(() => dispath(incrementByAmount(amount)), 1000);
};
