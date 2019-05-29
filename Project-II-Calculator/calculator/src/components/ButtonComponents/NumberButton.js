import React from "react";
import "./Button.scss";

const NumberButton = props => {
  return (
    <button
      onClick={() => props.onClick(props.num)}
      style={{ backgroundColor: props.color, width: props.width }}
    >
      {props.num}
    </button>
  );
};

export default NumberButton;
