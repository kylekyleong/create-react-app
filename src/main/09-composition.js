import React from "react";

function Containment(props) {
  return (
    <div>
      {props.start}
      {props.children}
      {props.end}
    </div>
  );
}

function Specialization(props) {
  return (
    <div>
      <h1>This is inside specialization</h1>
      <p>{props.propFirst}</p>
      <p>{props.propSecond}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Containment start="Hello" end="Good Bye">
        <h1> This is inside containment </h1>
      </Containment>
      <Specialization propFirst={1} propSecond={2}></Specialization>
    </div>
  );
}

export default App;
