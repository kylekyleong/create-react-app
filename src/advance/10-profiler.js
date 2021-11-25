import { Profiler, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // The Profiler measures how often a React application renders and what the “cost” of rendering is. Its purpose is to help identify parts of an application that are slow and may benefit from optimizations such as memoization.
  return (
    <div>
      <Profiler
        id="count"
        onRender={(
          id, // the "id" prop of the Profiler tree that has just committed
          phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
          actualDuration, // time spent rendering the committed update
          baseDuration, // estimated time to render the entire subtree without memoization
          startTime, // when React began rendering this update
          commitTime, // when React committed this update
          interactions // the Set of interactions belonging to this update
        ) => {
          console.log(
            id,
            phase,
            actualDuration,
            baseDuration,
            startTime,
            commitTime,
            interactions
          );
        }}
      >
        <button onClick={() => setCount((c) => c + 1)}>Click {count}.</button>
      </Profiler>
    </div>
  );
}
