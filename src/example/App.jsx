import { Provider } from "react-redux";
import store from "./app/store";
import { Counter } from "./features/counter/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}
