import React, { useCallback, useState } from "react";

// Context let us pass a value deep into the component tree without explicitly threading it through every component.
const ButtonContext = React.createContext();

const Button = React.memo(
  class extends React.Component {
    static contextType = ButtonContext;

    render() {
      console.log("Button renders");
      return <button onClick={this.context}>Click</button>;
    }
  }
);

const Toolbar = React.memo((props) => {
  // As you can see, it will be painful to use props on every single components which share the same prop data.
  // use createContext instead
  console.log("Toolbar renders");

  // use Consumer to get current data.
  return (
    <div>
      <Button></Button>
      <ButtonContext.Consumer>
        {(text) => {
          return <button onClick={text}>Click me also</button>;
        }}
      </ButtonContext.Consumer>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    (e) => {
      console.log("increment function computed");
      setCount((c) => c + 1);
    },
    [setCount]
  );

  // Use a Provider to pass the current data.
  return (
    <div>
      <div>{count}</div>
      <ButtonContext.Provider value={increment}>
        <Toolbar></Toolbar>
      </ButtonContext.Provider>
    </div>
  );
}
