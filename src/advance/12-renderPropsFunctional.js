import { Profiler, useState } from "react";

function Click(props) {
  return (
    <Profiler id="count" onRender={(id) => console.log(id)}>
      <button onClick={props.setCount}>Click {props.count} times.</button>
    </Profiler>
  );
}

function Hover(props) {
  return (
    <Profiler id="hover" onRender={(id) => console.log(id)}>
      <p onMouseOver={props.setCount}>Hover {props.count} times.</p>
    </Profiler>
  );
}

function Counter(props) {
  const [count, setCount] = useState(0);

  return <div>{props.render(count, () => setCount((c) => c + 1))}</div>;
}

export default function App() {
  return (
    <div>
      <Counter
        render={(count, setCount) => (
          <Click count={count} setCount={setCount}></Click>
        )}
      ></Counter>
      <Counter
        render={(count, setCount) => (
          <Hover count={count} setCount={setCount}></Hover>
        )}
      ></Counter>
    </div>
  );
}
