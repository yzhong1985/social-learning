import React, { Component } from "react";
import "./Square.css";

class Browsingsquare extends Component {
    render() {
      return (
        <div className='square'>
          <p>{this.props.title}</p>
        </div>
      );
    }
  }
  export default Browsingsquare
  