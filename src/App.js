import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KeyButton from "./Components/Button/Button";
import OperateButton from "./Components/Button/Button";

import Keyboard from "./Components/Keyboard/Keyboard";
class App extends React.Component {
  state = { text: "", ans: "" };

  handleButton = (btn) => {
    console.log(btn, "handle btn");
    this.handleEqual();


    if (btn === "=") {
      this.handleEqual();
    } else if (btn === "Ac") {
      this.handleAc();
    } else if (btn === "clear") {
      this.handleClear();
    } else if (
      this.state.text.length === 0 &&
      ["+", "-", "*", "%", "/","."].includes(btn)
    ) {
    } else {
      if (
        ["+", "-", "*", "%", "/","."].includes(this.state.text.slice(-1)) &&
        ["+", "-", "*", "%", "/","."].includes(btn)
      ) {
      } else {
        this.setState({ text: this.state.text + btn });
        this.handleEqual(this.state.text + btn)

      }
    }
  };

  handleEqual = (per) => {
    try {
      if(per){
        this.setState({ ans: eval(per) });
      }else{
      this.setState({ ans: eval(this.state.text) });
      }
    } catch {
      this.setState({ ans: " " });
    }
  };
  handleAc = () => {
    this.setState({ text: "", ans: " " });
  };
  handleClear = () => {
    let str = this.state.text;
    str = str.substring(0, str.length - 1);
    this.setState({ text: str, ans: "" });
  };
  

  render() {
    return (
      <div className="mainBox">
        <div className="box">
          <div className="display">
            <div className="display1">{this.state.text}</div>
            <div className="display2">{this.state.ans}</div>
          </div>
          <div className="container">
            <div className="operators-top">
              {["Ac","c","%","/"].map((per)=>{
                return<OperateButton keyboardClicked={()=>this.handleButton(per)} element={per}/>
              })}
            </div>
            <div className="numbers">
              <div className="digits">
                <Keyboard buttonFunction={this.handleButton}/>
              </div>
              <div className="operators-right">
              {["*","-","+","="].map((per)=>{
                return<OperateButton keyboardClicked={()=>this.handleButton(per)} element={per}/>
              })}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;

// addDecimal = (props) => {
//   if (this.state.text.indexOf(".") === -1) {
//     this.setState({ text: this.state.text + props });
//   }


//////

// else if(btn === ".") {
//   addDecimal = (props) => {
//     if (this.state.text.indexOf(".") === -1) {
//       this.setState({ text: this.state.text + props });
//     }
//   };