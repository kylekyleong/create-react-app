import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(1);
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        + by amount
      </button>

      <button onClick={() => dispatch(incrementAsync(1))}>async +</button>
    </div>
  );
}
