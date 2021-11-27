import { counterSlice } from "./features/counter/counterSlice";
import { Counter } from "./features/counter/Counter";
import { Provider } from "react-redux";
import store from "./app/store";

export default function App() {
  // generate the slice reducer function that knows how to respond to all action types
  const oldState = { value: 1 };
  const newState = counterSlice.reducer(
    oldState,
    counterSlice.actions.incrementByAmount(3)
  );
  console.log(newState);

  // Provide component to passdown the Redux sore behind the scene such that they can access it.
  // Providing the store.
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}

/*
https://redux.js.org/tutorials/essentials/part-2-app-structure#what-youve-learned

We can create a Redux store using the Redux Toolkit configureStore API
  configureStore accepts a reducer function as a named argument
  configureStore automatically sets up the store with good default settings
Redux logic is typically organized into files called "slices"
  A "slice" contains the reducer logic and actions related to a specific feature / section of the Redux state
  Redux Toolkit's createSlice API generates action creators and action types for each individual reducer function you provide
Redux reducers must follow specific rules
  Should only calculate a new state value based on the state and action arguments
  Must make immutable updates by copying the existing state
  Cannot contain any asynchronous logic or other "side effects"
  Redux Toolkit's createSlice API uses Immer to allow "mutating" immutable updates
Async logic is typically written in special functions called "thunks"
  Thunks receive dispatch and getState as arguments
  Redux Toolkit enables the redux-thunk middleware by default
React-Redux allows React components to interact with a Redux store
  Wrapping the app with <Provider store={store}> enables all components to use the store
  Global state should go in the Redux store, local state should stay in React components
*/
