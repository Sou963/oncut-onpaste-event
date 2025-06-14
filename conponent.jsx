import React, { Component } from "react";

export default class Com extends Component {
  render() {
    const oncopytext = () => {
      alert("text is copied ");
    };

    const oncuttext = () => {
      alert("test is cut");
    };

    const onpastetext = () => {
      alert("The test is paste");
    };
    const onfocustext = () => {
      alert("Give the right email if you donot your account isnot open");
    };
    const onblurtext = () => {
      alert("the text is blur");
    };
    return (
      <div>
        <p onCopy={oncopytext}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          ipsa.
        </p>
        <br />
        <h1 onCut={oncuttext}>
          Avishek is the good boy. Sourav is the bad boy.
        </h1>
        <br />
        <input
          type="text"
          placeholder="give a text here"
          onPaste={onpastetext}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="give the text here"
          onFocus={onfocustext}
        />
        <br />
        <input
          type="text"
          placeholder="give the text here"
          onBlur={onblurtext}
        />
      </div>
    );
  }
}
