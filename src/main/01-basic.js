import React from "react";

function JsxObject() {
  // Create React element instead of using JSX
  // But JSX provides more flexibility than React element
  const element = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello, world!"
  );
  return element;
}

function PreventMaliciousCode() {
  // JSX prevents injection attack
  const maliciousCode = `
  <script src="http://example.com/malicious-script.js">
    alert();
  </script>
  `;

  return maliciousCode;
}

function App() {
  function getGreeting(name) {
    return <span>{name ? name : "Stranger"}</span>;
  }

  const user = {
    name: "johnny",
    age: 21,
  };

  return (
    <div>
      {JsxObject()}
      <p>Welcome {getGreeting(user.name)}</p>
      <p>age: {user.age}</p>
      {PreventMaliciousCode()}
    </div>
  );
}

export default App;
