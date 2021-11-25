import React, { useState, createContext, useContext, useRef } from "react";

// Share context/data (state) between components
const DataContext = createContext({});

const Likes = React.memo(() => {
  const { likes } = useContext(DataContext);
  const renders = useRef(0);
  return (
    <div>
      <div>number of likes: {likes}</div>
      <div>Likes component renders: {renders.current++ / 2}</div>
    </div>
  );
});

const Comments = React.memo(() => {
  const { comments } = useContext(DataContext);
  const renders = useRef(0);
  return (
    <div>
      <div>number of comments: {comments}</div>
      <div>Comments component renders: {renders.current++ / 2}</div>
    </div>
  );
});

export default function App() {
  const [data, setData] = useState({ likes: 0, comments: 0 });
  return (
    <div>
      <button onClick={(e) => setData({ ...data, likes: data.likes + 1 })}>
        Add likes
      </button>
      <button
        onClick={(e) => setData({ ...data, comments: data.comments + 1 })}
      >
        Add comments
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <DataContext.Provider value={data}>
        <Likes></Likes>
        <br />
        <Comments></Comments>
      </DataContext.Provider>
    </div>
  );
}
