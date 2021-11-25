import React from "react";

const getTickPromise = (tick) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(tick);
    }, 1000 * tick);
  });
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the property in a state
    this.state = {
      date: new Date(),
      counter: 1,
      ticks1: 0,
      ticks2: 0,
    };
  }

  tick() {
    // Using the state correctly
    //this.state.date = new Date(); // do not assign like this
    this.setState({ date: new Date() });
  }

  updateCounter() {
    // State may be asynchronous
    // Wrong
    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });
    this.setState((state, props) => ({
      counter: state.counter + props.increment,
    }));
  }

  async tick1() {
    const tick = await getTickPromise(1);
    this.setState({
      ticks1: tick,
    });
  }

  async tick2() {
    const tick = await getTickPromise(2);
    this.setState({
      ticks2: tick,
    });
  }

  componentDidMount() {
    // Start life cycle: runs after the component out put has been rendered
    this.timerID = setInterval(() => {
      this.tick();
      this.updateCounter();
    }, 1000);

    // Demonstrte async operations
    this.tick1();
    this.tick2();
  }

  componentWillUnmount() {
    // End life cycle
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <p>Time: {this.state.date.toLocaleTimeString()}</p>
        <p>
          Counter incremented by {this.props.increment}: {this.state.counter}
        </p>
        <p>{this.state.ticks1}</p>
        <p>{this.state.ticks2}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Clock increment={1}></Clock>
    </div>
  );
}

export default App;
