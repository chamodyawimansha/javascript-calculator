import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptableOperations: ["+", "-", "*", "/-", "/"],
      numbers: [0],
      display: "0",
    };

    this.handleNumberPress = this.handleNumberPress.bind(this);
    this.handleDisplayClear = this.handleDisplayClear.bind(this);

    // Helper functions
    this.clearLeadingZero = this.clearLeadingZero.bind(this);
  }

  handleDisplayClear() {
    this.setState({
      display: "0",
      numbers: [0],
    });
  }

  // remove wrong opertors from the array state update

  handleNumberPress(num) {
    // clear the leading zero
    this.clearLeadingZero();

    this.setState((state) => ({
      display: `${state.display}${num}`,
    }));
  }

  //Helper function for clear leading zero
  //from the display and numbers array
  clearLeadingZero() {
    if (this.state.numbers[0] === 0) {
      this.setState({
        numbers: [],
      });
    }
    if (this.state.display === "0") {
      this.setState({
        display: "",
      });
    }
  }

  render() {
    return (
      <div id="calculator">
        <div id="display-container">
          <div id="smallDisplay">{this.state.numbers.map((num) => num)}</div>
          <div id="display">{this.state.display}</div>
        </div>
        <div id="key-container">
          <div id="operation-keys-top">
            <button
              id="clear"
              className="key"
              onClick={this.handleDisplayClear}
            >
              AC
            </button>
            <button
              id="divide"
              className="key"
              onClick={() => this.handleOperatorPress("/")}
            >
              /
            </button>
            <button
              id="multiply"
              className="key"
              onClick={() => this.handleOperatorPress("*")}
            >
              X
            </button>
          </div>
          <div id="number-keys">
            <button
              id="seven"
              className="key select-off"
              onClick={() => this.handleNumberPress(7)}
            >
              7
            </button>
            <button
              id="eight"
              className="key select-off"
              onClick={() => this.handleNumberPress(8)}
            >
              8
            </button>
            <button
              id="nine"
              className="key select-off"
              onClick={() => this.handleNumberPress(9)}
            >
              9
            </button>
            <button
              id="four"
              className="key select-off"
              onClick={() => this.handleNumberPress(4)}
            >
              4
            </button>
            <button
              id="five"
              className="key select-off"
              onClick={() => this.handleNumberPress(5)}
            >
              5
            </button>
            <button
              id="six"
              className="key select-off"
              onClick={() => this.handleNumberPress(6)}
            >
              6
            </button>
            <button
              id="one"
              className="key select-off"
              onClick={() => this.handleNumberPress(1)}
            >
              1
            </button>
            <button
              id="two"
              className="key select-off"
              onClick={() => this.handleNumberPress(2)}
            >
              2
            </button>
            <button
              id="three"
              className="key select-off"
              onClick={() => this.handleNumberPress(3)}
            >
              3
            </button>
            <button
              id="zero"
              className="key select-off"
              onClick={() => this.handleNumberPress(0)}
            >
              0
            </button>
            <button
              id="decimal"
              className="key select-off"
              // onClick={() => this.handleNumberPress(".")}
            >
              .
            </button>
          </div>
          <div id="operation-keys-right">
            <button
              id="subtract"
              className="key"
              onClick={() => this.handleOperatorPress("-")}
            >
              -
            </button>
            <button
              id="add"
              className="key"
              onClick={() => this.handleOperatorPress("+")}
            >
              +
            </button>
            <button id="equals" className="key">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// metrix green display, navly blue body, ash buttons
