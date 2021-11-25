// A high order componenet is a function that takes a component and returns a new component
// const EnhanceComponent = highOrderComponent(WrapperComponent)

import React from "react";

async function fetchData(url, callback) {
  const response = await fetch(url);
  response.json().then((data) => {
    callback(data);
  });
}

function withData(WrappedComponent, selectData, url) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    componentDidMount() {
      selectData(url, (data) => this.setState({ data }));
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          {...this.props}
        ></WrappedComponent>
      );
    }
  };
}

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <h2>Item List</h2>
        {this.props.data.length ? (
          this.props.data.map((d, i) => (
            <pre key={d.id ? d.id : i}>{JSON.stringify(d, null, 2)}</pre>
          ))
        ) : (
          <div>Loading..</div>
        )}
      </div>
    );
  }
}

class Click extends React.Component {
  render() {
    return (
      <button onClick={() => this.props.increment()}>
        Click {this.props.data} times
      </button>
    );
  }
}

class Hover extends React.Component {
  render() {
    return (
      <h3 onMouseOver={() => this.props.increment()}>
        Hover {this.props.data} times
      </h3>
    );
  }
}

function withCounter(WrapperComponent) {
  return class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: 0,
      };
    }

    handleState() {
      this.setState((state) => ({
        data: state.data + 1,
      }));
    }

    render() {
      return (
        <WrapperComponent
          data={this.state.data}
          increment={() => this.handleState()}
        ></WrapperComponent>
      );
    }
  };
}

export default function App() {
  const url = "https://api.sampleapis.com/coffee/hot";
  const ItemListWithData = withData(ItemList, fetchData, url);

  const ClickWithCounter = withCounter(Click);
  const HoverWithCounter = withCounter(Hover);

  return (
    <div>
      <ClickWithCounter></ClickWithCounter>
      <HoverWithCounter></HoverWithCounter>
      <ItemListWithData></ItemListWithData>
    </div>
  );
}
