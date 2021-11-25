import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

function Hello() {
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return <h2>Hello</h2>;
}

function useFetch(value) {
  const [data, setData] = useState({ data: null, loading: true });
  useEffect(() => {
    async function fetchData() {
      setData({ data: null, loading: true });
      const response = await fetch(`http://numbersapi.com/${value}`);
      response.text().then((data) => {
        setData({ data, loading: false });
      });
    }
    fetchData();
  }, [value]);

  return data;
}

function useMeasurement(data) {
  const ref = useRef();
  const [rect, setRect] = useState({});

  // useLayoutEffect: Similiar to useEffect, but use for DOM element
  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
  }, [data, ref]);

  return [rect, ref];
}

function App() {
  const [count, setCount] = useState(0);
  const [showHello, setShowHello] = useState(true);
  const data = useFetch(count);
  const [rect, ref] = useMeasurement(data);

  return (
    <div>
      {showHello ? <Hello /> : null}
      <div style={{ display: "flex" }}>
        <p ref={ref}>{!data.data ? "loading..." : data.data}</p>
      </div>
      <pre>{JSON.stringify(rect)}</pre>
      <p>Count: {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Click</button>
      <button onClick={(e) => setCount(0)}>Reset</button>
      <button onClick={(e) => setShowHello(!showHello)}>Hello</button>
    </div>
  );
}

export default App;
