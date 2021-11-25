import React from "react";

// forwardRef: forward ref to child components.

// functional Component example
const Input = React.forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

// class Component example
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    return <input type="text" ref={this.input} />;
  }
}

export default function App() {
  return (
    <div>
      <Input type="text" ref={(x) => x && x.focus()} />
      <Example></Example>
    </div>
  );
}
