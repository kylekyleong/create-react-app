import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";
// import store from "../../app/store";

export function Counter() {
  // useSelector: read state data
  // const count = useSelector((state) => state.counter.value);
  // const count = useSelector(() => selectCount(store.getState()));
  const count = useSelector(selectCount);

  // useDispatch: dispatch action on reducer
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(2);

  // not all state should be set globally in redux
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementAsync(1))}>async +</button>
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        + by
      </button>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
    </div>
  );
}
