import { useReducer, useState } from "react";

function counterReducer(state, action) {
  // Read what the action is, change the state accordingly
  // logic of modify the state is in the reducer
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // useReducer, change the state based on action
  // similiar to useState, second argument can be initialized as callback for lazy initializiation.
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
}

// Create simple to do list app
function reducer(state, action) {
  switch (action.type) {
    case "add-toDo":
      return [...state, { text: action.text, completed: false }];
    case "toggle-toDo":
      return state.map((toDo, i) =>
        action.idx === i ? { ...toDo, completed: !toDo.completed } : toDo
      );
    default:
      return state;
  }
}

function ToDoList() {
  const [toDos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  return (
    <div>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-toDo", text });
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      {toDos.map((toDo, i) => (
        <div
          key={toDo.text}
          onClick={(e) => dispatch({ type: "toggle-toDo", idx: i })}
          style={{
            textDecoration: toDo.completed ? "line-through" : "",
          }}
        >
          {toDo.text}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ToDoList></ToDoList>
    </div>
  );
}
