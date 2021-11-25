import React, { Fragment } from "react";

class Columns extends React.Component {
  render() {
    const numbers = [1, 2, 3];

    // Fragments (<>) let you group a list of children without adding extra nodes to the DOM.
    return (
      <Fragment>
        {numbers.map((number, i) => (
          <td key={i}>{number}</td>
        ))}
      </Fragment>
    );
  }
}

export default function App() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Columns></Columns>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
