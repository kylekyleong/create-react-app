import React from "react";

function Avatar(props) {
  // functional Component
  // access props from props argument
  return <img src={props.user.url} alt={props.user.name} />;
}

class Welcome extends React.Component {
  // class Component
  // access props by using this
  render() {
    return (
      <div>
        <Avatar user={this.props.user}></Avatar>
        <p>Name: {this.props.user.name}</p>
        <p>Age: {this.props.user.age}</p>
      </div>
    );
  }
}

function App() {
  const user1 = {
    name: "Jessica",
    url: "https://i.pravatar.cc/150",
    age: 14,
  };
  const user2 = {
    name: "Michael",
    url: "https://i.pravatar.cc/151",
    age: 13,
  };
  return (
    <div>
      <Welcome user={user1}></Welcome>
      <Welcome user={user2}></Welcome>
    </div>
  );
}

export default App;
