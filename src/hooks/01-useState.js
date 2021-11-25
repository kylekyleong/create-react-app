import React, { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
}

function App() {
  // useState: similiar to React Class Component state
  // Only call hooks at the top level
  const [count, setCount] = useState(0);
  // custom hooks
  const [values, setValues] = useForm({ username: "", password: "" });
  // pass a function to useState for lazy initial state
  // executed only on the initial render
  // usually for function with expensive computation, only called for the first time
  useState(() => null);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={(e) => setCount(count + 1)}>Click</button>
      <form action="#" onSubmit={(e) => e.preventDefault}>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={setValues}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={setValues}
        />
      </form>
    </div>
  );
}

export default App;
