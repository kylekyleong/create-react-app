import React, { Suspense, useState } from "react";
import ErrorBoundary from "./02-errorBoundaries";

// React.lazy loads the bundle containing the OtherComponent when this component is first rendered.
// The lazy component should then be rendered inside a Suspense component,
const OtherComponent = React.lazy(() => import("./01-fragments"));

export default function App() {
  const [count, setCount] = useState(0);

  // The fallback prop accepts any React elements that you want to render while waiting for the component to load.
  // Can utilize ErrorBoundary to handle fail component loading, such that to provide good user experience
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <OtherComponent />
        </Suspense>
        <button onClick={(e) => setCount((c) => c + 1)}>{count}</button>
      </ErrorBoundary>
    </div>
  );
}
