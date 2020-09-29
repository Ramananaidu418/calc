import React from "react";
import "./Keyboard.css";
import OperateButton from "../Button/Button.js";

const numberPad = (props) => {
  let num = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ["00", 0, "."],
  ];
  return (
    <div className="wraper">
      {num.map((row) => {
        return (
          <div className="row">
            {row.map((col) => (
              <OperateButton
                key={col}
                keyboardClicked={() => props.buttonFunction(col)}
                element={col}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default numberPad;

