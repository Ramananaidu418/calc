import React from "react";
import "./Button.css";

function OperateButton(props) {
  return <div className="Button" onClick={props.keyboardClicked}><p>{props.element}</p></div>;
}

export default OperateButton;
