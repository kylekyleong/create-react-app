import React, { useCallback, useRef, useState } from "react";

function useCountRenders() {
  const renders = useRef(0);
  console.log("renders; ", renders.current++);
}

const Increment = React.memo((props) => {
  // useCountRenders();
  return <button onClick={(e) => props.increment(1)}>increment</button>;
});

const Square = React.memo((props) => {
  useCountRenders();
  return (
    <button onClick={(e) => props.increment(props.number)}>
      {props.number}
    </button>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const numbers = [2, 4, 6];

  // useCallback: use along with React.memo to memoized callback.
  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  );

  // Usecase: don't want to trigger useEffect when increment changes
  // useEffect(() => {}, [increment]);

  return (
    <div>
      <Increment increment={increment} />
      <p>Count: {count}</p>
      {numbers.map((number, i) => {
        return <Square increment={increment} number={number} key={i}></Square>;
      })}
    </div>
  );
}
