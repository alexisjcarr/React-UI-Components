import React, { Component } from 'react';
import './Calculator.scss';

import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';
import CalculatorDisplay from '../DisplayComponents/CalculatorDisplay';


class Calculator extends Component {

    handleClickChange = event => this.setState( {  } )

    render() {
        return (
          <div className="app">
            <CalculatorDisplay propsTotal='0'/>
      
            <div className="first-row">
              <ActionButton className="clear" action='clear' color="white" width='75%' />
              <ActionButton className="numop" action='÷' color="#A0001E" width="25%" tcolor="white"/>
            </div>
      
            <div className="second-row">
              <NumberButton className="number" number='7' color="white" width="25%"/>
              <NumberButton className="number" number='8' color="white" width="25%"/>
              <NumberButton className="number" number='9' color="white" width="25%"/>
              <ActionButton className="numop" action='×' color="#A0001E" width="25%" tcolor="white"/>
            </div>
      
            <div className="third-row">
              <NumberButton className="number" number='4' color="white" width="25%"/>
              <NumberButton className="number" number='5' color="white" width="25%"/>
              <NumberButton className="number" number='6' color="white" width="25%"/>
              <ActionButton className="numop" action='-' color="#A0001E" width="25%" tcolor="white"/>
            </div>
      
            <div className="fourth-row">
              <NumberButton className="number" number='1' color="white" width="25%"/>
              <NumberButton className="number" number='2' color="white" width="25%"/>
              <NumberButton className="number" number='3' color="white" width="25%"/>
              <ActionButton className="numop" action='+' color="#A0001E" width="25%" tcolor="white"/>
            </div>
      
            <div className="fifth-row">
              <NumberButton className="number" number='0' color="white" width='75%' />
              <ActionButton className="numop" action='=' color="#A0001E" width="25%" tcolor="white"/>
            </div>
          </div>
        );
      }
}

export default Calculator;