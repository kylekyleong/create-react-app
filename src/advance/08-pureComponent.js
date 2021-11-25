import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.increment()}>
          Click {this.props.count} times {this.props.component}
        </button>
      </div>
    );
  }
}

class ChildComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.renders = React.createRef();
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 2,
    }));
  }

  render() {
    console.log("child renders: ", this.renders.current++ / 2);
    return (
      <div>
        <Counter
          increment={() => this.increment()}
          count={this.state.count}
          component={"Child"}
        ></Counter>
      </div>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <Counter
          increment={() => this.increment()}
          count={this.state.count}
          component={"Parent"}
        ></Counter>
        <ChildComponent></ChildComponent>
      </div>
    );
  }
}
