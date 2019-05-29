import React, { Component } from "react";
import "./Button.scss";

const ActionButton = props => {
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

export default ActionButton;