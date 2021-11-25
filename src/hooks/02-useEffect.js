import React, { useState, useEffect } from "react";

function Hello() {
  // useEffect: similiar to React Class Component componentDidMount(), componentDidUpdate(), componentWillUnmount() etc.
  // useEffect( () => console.log("mount"), [] );
  // useEffect( () => console.log("will update data"), [ data ] );
  // useEffect( () => console.log("will update any") );
  // useEffect( () => () => console.log("will update data or unmount"), [ data ] );
  // useEffect( () => () => console.log("unmount"), [] );
  // The order of useState and useEffect pair is important!!!
  // useEffect should not be set inside condition, forloop and nested function
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return <h2>Hello</h2>;
}

function useFetch(value) {
  // custom Hooks
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

function App() {
  const [count, setCount] = useState(0);
  const [showHello, setShowHello] = useState(true);
  const data = useFetch(count);

  return (
    <div>
      {showHello ? <Hello /> : null}
      <p>{!data.data ? "loading..." : data.data}</p>
      <p>Count: {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Click</button>
      <button onClick={(e) => setCount(0)}>Reset</button>
      <button onClick={(e) => setShowHello(!showHello)}>Hello</button>
    </div>
  );
}

export default App;
