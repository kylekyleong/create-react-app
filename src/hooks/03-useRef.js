import { useRef, useState } from "react";

export default function App() {
  // useRef: store value throughout the lifecycle.
  // can be use to store value and callback function.
  const count = useRef(0);
  const inputRef = useRef();
  const output = useRef(() => console.log(count.current));
  // useState causes re-render, useRef does not.
  const [render, setRender] = useState(true);
  return (
    <div>
      <p>{count.current}</p>
      <button
        onClick={(e) => {
          count.current++;
          output.current();
        }}
      >
        Click to increase ref
      </button>
      <button onClick={(e) => setRender(!render)}>Click to rerender</button>
      <br />
      <input type="text" ref={inputRef} />
      <button
        onClick={(e) => {
          inputRef.current.focus();
        }}
      >
        Focus input field
      </button>
    </div>
  );
}
