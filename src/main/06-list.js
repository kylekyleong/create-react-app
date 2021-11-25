import React from "react";

class NumberList extends React.Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
    return this.props.ordered ? <ol>{listItems}</ol> : <ul>{listItems}</ul>;
  }
}

function App() {
  const numberList = [1, 2, 3];
  return (
    <div>
      <div>
        <h3>Original:</h3>
        <NumberList numbers={numberList} ordered={true}></NumberList>
      </div>
      <div>
        <h3>Original times two:</h3>
        <NumberList numbers={numberList.map((n) => n * 2)}></NumberList>
      </div>
    </div>
  );
}

export default App;
