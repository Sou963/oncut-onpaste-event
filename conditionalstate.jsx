import React, { Component } from 'react'
import Condistate1 from './condistate1';

export default class Conditionalstate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: true,
    };
  }

  render() {
    let t;
    if(this.state.text){
        t="oi kira oi kira";
    }
    else{
        t=<Condistate1 />;    }
    return (
      <div>
        <h1>{t}</h1>
      </div>
    )
  }
}
