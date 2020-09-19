import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
    };
  }

  render() {
    return (
      <div id="calculator">
        <div id="display-container">
          <div id="display">{this.state.display}</div>
        </div>
        <div id="key-container">
          <div id="operation-keys-top">
            <button id="ac" className="key">
              AC
            </button>
            <button id="division" className="key">
              /
            </button>
            <button id="multiple" className="key">
              X
            </button>
          </div>
          <div id="number-keys">
            <button id="seven" className="key">
              7
            </button>
            <button id="eight" className="key">
              8
            </button>
            <button id="nine" className="key">
              9
            </button>
            <button id="four" className="key">
              4
            </button>
            <button id="five" className="key">
              5
            </button>
            <button id="six" className="key">
              6
            </button>
            <button id="one" className="key">
              1
            </button>
            <button id="two" className="key">
              2
            </button>
            <button id="three" className="key">
              3
            </button>
            <button id="zero" className="key">
              0
            </button>
            <button id="decimal" className="key">
              .
            </button>
          </div>
          <div id="operation-keys-right">
            <button id="subtraction" className="key">
              -
            </button>
            <button id="addition" className="key">
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
