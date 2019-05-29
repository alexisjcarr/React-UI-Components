import React, { Component } from 'react';
import './Button.scss';

class NumberButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <button onClick={() => this.props.onClick(this.props.num)} style = {{backgroundColor: this.props.color, width: this.props.width}}>
                {this.props.num}
            </button>
        );
    }
}

export default NumberButton;
