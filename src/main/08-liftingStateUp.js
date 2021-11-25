import React from "react";

// Share state among individual component by using an "ensemble" component (ancestor)
//
// Analogy:
//                 parentComponent
//                     (state) <- lifting the state up <--.
//                     /     \                            |
//      childComponent1       childComponent2          ---'
//

const scaleNames = {
  c: "Celcius",
  f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0 };
  }

  handleChange(e) {
    this.props.onTemperatureChange(parseInt(e.target.value));
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input
          type="number"
          value={temperature}
          onChange={(e) => this.handleChange(e)}
        />
      </fieldset>
    );
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  let temperature = props.temperature;
  const scale = props.scale;

  if (scale !== "c") {
    temperature = toCelsius(temperature);
  }
  return <p>{temperature >= 100 ? "Boiling" : "Not boiling."}</p>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0, scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={(e) => this.handleCelsiusChange(e)}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={(e) => this.handleFahrenheitChange(e)}
        />
        <BoilingVerdict
          scale={scale}
          temperature={temperature}
        ></BoilingVerdict>
      </div>
    );
  }
}

export default App;
