import React, { Component } from "react";
import "./Display.scss";

import ClearButton from "../ButtonComponents/ClearButton";
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from "../ButtonComponents/NumberButton";

class CalculatorDisplay extends Component {
  constructor() {
    super();
    this.state = {
      total: 0
    };
  }

  addNumber = num => {
    this.setState({
      total: [this.state.total + num]
    });
    console.log('I clicked');
  }

  clearDisplay = () => {
    this.setState({
        total: 0
    });
    console.log('I cleared');
}

  render() {
    return (
      <div className="app">
          
        <div className="display">
          <h1>{this.state.total}</h1>
        </div>

        <div className="first-row">
          <ClearButton onClear={this.clearDisplay} className="clear" action="clear" color="white" width="75%" />
          <ActionButton className="numop" action="÷" color="#A0001E" width="25%" tcolor="white" />
        </div>

        <div className="second-row">
          <NumberButton onClick={this.addNumber} num={7} color="white" width="25%" />
          <NumberButton onClick={this.addNumber} num={8} color="white" width="25%" />
          <NumberButton onClick={this.addNumber} num={9} color="white" width="25%" />
          <ActionButton action="×" color="#A0001E" width="25%" tcolor="white" />
        </div>

        <div className="third-row">
          <NumberButton onClick={this.addNumber} num={4} color="white" width="25%" />
          <NumberButton onClick={this.addNumber} num={5} color="white" width="25%" />
          <NumberButton onClick={this.addNumber} num={6} color="white" width="25%" />
          <ActionButton action="-" color="#A0001E" width="25%" tcolor="white" />
        </div>

        <div className="fourth-row">
          <NumberButton onClick={this.addNumber} num={1} color="white" width="25%" />
          <NumberButton onClick={this.addNumber} num={2} color="white" width="25%" />
          <NumberButton onClick={this.addNumber} num={3} color="white" width="25%" />
          <ActionButton action="+" color="#A0001E" width="25%" tcolor="white" />
        </div>

        <div className="fifth-row">
          <NumberButton onClick={this.addNumber} num={0} color="white" width="75%" />
          <ActionButton action="=" color="#A0001E" width="25%" tcolor="white" />
        </div>
      </div>
    );
  }
}

export default CalculatorDisplay;
