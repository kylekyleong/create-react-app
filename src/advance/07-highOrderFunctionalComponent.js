import { useState } from "react";

function Click(props) {
  return (
    <button onClick={() => props.increment()}>
      {props.action} {props.count} times.
    </button>
  );
}

function Hover(props) {
  return (
    <h3 onMouseOver={() => props.increment()}>
      {props.action} {props.count} times.
    </h3>
  );
}

function withCounter(WrappedComponent) {
  return (props) => {
    const [count, setCount] = useState(0);
    return (
      <WrappedComponent
        count={count}
        increment={() => setCount((c) => c + 1)}
        {...props}
      ></WrappedComponent>
    );
  };
}

export default function App() {
  const ClickWithCounter = withCounter(Click);
  const HoverWithCounter = withCounter(Hover);
  return (
    <div>
      <ClickWithCounter action="Click"></ClickWithCounter>
      <HoverWithCounter action="Hover"></HoverWithCounter>
    </div>
  );
}
