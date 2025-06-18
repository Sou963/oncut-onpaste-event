import React, { Component } from "react";
import "./style.css"

export default class Css extends Component {
  
  render() {
      const oi_kira={
        color:"green",
        backgroundColor:"tomato",
        textAlign:"Start",
    }
    return (
      <div>
        <h1
          style={{
            color: "red",
            backgroundColor: "green",
            textAlign: "center",
          }}
        >
          {" "}
          This is the first page
        </h1>
        <h3 style={oi_kira}>Your are the sexy baby. Give your Pussy.</h3>
        <br />
        <h3 className="try">Try and try baby</h3>
      </div>
    );
  }
}
