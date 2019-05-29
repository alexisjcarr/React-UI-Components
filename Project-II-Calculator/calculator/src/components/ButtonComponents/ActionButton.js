import React from "react";
import "./Button.scss";

const ActionButton = props => {
  return (
    <button
      onClick={() => props.onAction(props.action)}
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

export default ActionButton;