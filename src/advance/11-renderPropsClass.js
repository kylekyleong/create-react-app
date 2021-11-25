import React from "react";
import { Profiler } from "react";

class Click extends React.Component {
  render() {
    return (
      <Profiler id="click" onRender={(id) => console.log(id)}>
        <button onClick={this.props.setCount}>
          Click {this.props.count} times.
        </button>
      </Profiler>
    );
  }
}

class Hover extends React.Component {
  render() {
    return (
      <Profiler id="hover" onRender={(id) => console.log(id)}>
        <div onMouseOver={this.props.setCount}>
          Hover {this.props.count} times.
        </div>
      </Profiler>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  setCount = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  render() {
    return <div>{this.props.render(this.state.count, this.setCount)}</div>;
  }
}

export default class App extends React.Component {
  render() {
    // renderProps: pass render as the prop
    return (
      <div>
        <Counter
          render={(count, setCount) => (
            <Click count={count} setCount={setCount}></Click>
          )}
        ></Counter>
        <Counter
          render={(count, setCount) => (
            <Hover count={count} setCount={setCount}></Hover>
          )}
        ></Counter>
      </div>
    );
  }
}
