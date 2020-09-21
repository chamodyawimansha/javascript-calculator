import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      numbers: [0],
      maxLength: 22,
    };

    this.handleDisplayClear = this.handleDisplayClear.bind(this);
    this.handleNumberPress = this.handleNumberPress.bind(this);
  }

  handleDisplayClear() {
    this.setState({
      display: 0,
      numbers: ["0"],
    });
  }

  clearDisplay() {
    this.setState({ display: "", numbers: [] });
  }

  handleNumberPress(val) {
    // return error when the digit limit reached
    if (this.state.display.length > this.state.maxLength) {
      return;
    }

    //clear the leading zero
    if (this.state.display === 0) {
      this.clearDisplay();
    }

    // update the state with numbers
    this.setState((state) => ({
      display: `${state.display}${val}`,
      numbers: [...state.numbers, val],
    }));
  }

  handleOperatorPress(opt) {}
  // async handleNumberPress(data) {
  //   if (
  //     this.state.display === "0" ||
  //     this.state.display === this.state.operator
  //   ) {
  //     this.clearDisplay();
  //   }

  //   if (this.state.display === "Digit Limit Reached") {
  //     return;
  //   }

  //   if (this.state.display.length < this.state.maxLength) {
  //     this.setState((state) => ({
  //       display: state.display + "" + data,
  //       smallDisplay: state.display + "" + data,
  //     }));
  //   } else {
  //     let tempDisplay = this.state.display;

  //     this.setState({ display: "Digit Limit Reached" });

  //     let promise = new Promise((res, re) => {
  //       setTimeout(() => res(tempDisplay), 1000);
  //     });

  //     let result = await promise;

  //     this.setState({ display: result });
  //   }

  //   return;
  // }

  // handleOperator(opt) {
  //   this.setState((state) => ({
  //     display: opt,
  //     operator: opt,
  //     numberOne: state.display,
  //     smallDisplay: this.display,
  //   }));
  // }

  // calculate(opt, num1, num2) {
  //   var answer;
  //   switch (opt) {
  //     case "+":
  //       answer = num1 + num2;
  //       break;
  //     case "Orange":
  //       answer = "I am not a fan of orange.";
  //       break;
  //     case "Apple":
  //       answer = "How you like them apples?";
  //       break;
  //     default:
  //       answer = "I have never heard of that fruit...";
  //   }

  //   console.log(answer);
  // }

  render() {
    return (
      <div id="calculator">
        <div id="display-container">
          <div id="smallDisplay">{this.state.numbers.map((item) => item)}</div>
          <div id="display">{this.state.display}</div>
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
