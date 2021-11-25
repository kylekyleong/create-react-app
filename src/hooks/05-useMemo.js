import { useEffect, useMemo, useRef, useState } from "react";

function useFetch(url) {
  const isCurrent = useRef(true);
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    async function fetchData() {
      setState({ data: null, loading: true });
      const response = await fetch(url);
      response.json().then((data) => {
        if (isCurrent.current) {
          setState((s) => {
            return { ...s, data };
          });
        }
      });
    }
    fetchData();
  }, [url, setState]);
  return state;
}

function Hello(props) {
  return <button onClick={(e) => props.increment()}>hello</button>;
}

function computedLongestWord(arr) {
  console.log("computingLongestWord");
  if (!arr) {
    return "";
  }
  let longestWord = "";
  arr.forEach((sentence) => {
    sentence.split(" ").forEach((word) => {
      if (word.length > longestWord.length) longestWord = word;
    });
  });
  return longestWord;
}

export default function App() {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  // useMemo: store in memory for lazy initialization.
  // will only recomputed when one of the dependencies has changed
  // if not dependencies is provided then recomputed in every render
  const longestWord = useMemo(() => computedLongestWord(data), [data]);

  return (
    <div>
      <Hello increment={(e) => setCount(count + 1)}></Hello>
      <div>count: {count}</div>
      <div>{longestWord}</div>
    </div>
  );
}
