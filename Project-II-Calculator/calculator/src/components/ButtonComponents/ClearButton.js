import React from "react";
import "./Button.scss";

const ClearButton = props => {
  return (
    <button
      onClick={props.onClear}
      style={{
        backgroundColor: props.color,
        width: props.width,
        color: props.tcolor
      }}
    >
      {props.action}
    </button>
  );
};

export default ClearButton;
