import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// create redux store by using the configureStore and pass a reducer argumer.
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
