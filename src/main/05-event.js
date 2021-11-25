import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleSubmit(e, increment) {
    if (e) e.preventDefault();
    const add = increment ? increment : 1;
    this.setState((state) => {
      return {
        counter: state.counter + add,
      };
    });
  }

  render() {
    return (
      <div>
        <form action="#" onSubmit={this.handleSubmit.bind(this)}>
          <button type="submit">Submit</button>
        </form>{" "}
        <br />
        <form
          action="#"
          onSubmit={(e) => this.handleSubmit(e, this.props.increment)}
        >
          <button type="submit">Submit</button>
        </form>
        <p>You have press this {this.state.counter} times</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Counter increment={2}></Counter>
    </div>
  );
}

export default App;
