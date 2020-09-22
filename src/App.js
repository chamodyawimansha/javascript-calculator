import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOne: 0,
      numTwo: 0,
      operator: "",
      maxLength: 22,
      mainDisplay: "0",
      secondDisplay: "0",
    };
  }

  render() {
    return (
      <div id="calculator">
        <div id="display-container">
          <div id="smallDisplay">{this.state.secondDisplay}</div>
          <div id="display">{this.state.mainDisplay}</div>
        </div>
        <div id="key-container">
          <div id="operation-keys-top">
            <button id="ac" className="key" onClick={this.handleDisplayClear}>
              AC
            </button>
            <button
              id="division"
              className="key"
              onClick={() => this.handleOperatorPress("/")}
            >
              /
            </button>
            <button
              id="multiple"
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
              id="subtraction"
              className="key"
              onClick={() => this.handleOperatorPress("-")}
            >
              -
            </button>
            <button
              id="addition"
              className="key"
              onClick={() => this.handleOperatorPress("+")}
            >
              +
            </button>
            <button id="equel" className="key">
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
