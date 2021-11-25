import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange(e) {
    this.setState({
      text: e.target.value.toUpperCase(),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Controlled component: using props and state to obtain value
    const textValue = this.state.text;
    // Uncontrolled component: using DOM reference
    const selectValue = document.getElementById("select").value;
    alert(textValue + selectValue);
  }

  render() {
    const numberList = [1, 2, 3];
    const renderNumberList = numberList.map((number) => (
      <option value={number}>{number}</option>
    ));
    return (
      <div>
        <p>{this.state.text}</p>
        <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            onChange={(e) => this.handleChange(e)}
          ></textarea>
          <select name="select" id="select">
            {renderNumberList}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;
