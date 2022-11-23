import React, { Component } from "react";
import "./Square.css";
import thumbup from "./images/thumbup.png"

import { Link } from "react-router-dom";
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  fontsize: "1.3rem",
  color: 'blue'
};

class Browsingsquare extends Component { 
  render() {
    return (
      <div className='res-square'>
        <div className="res-item-title">
          <Link to={`/browsing/${this.props.element['id']}`} style={linkStyle}>{this.props.title}</Link>
        </div>
        <div className="res-item-description">
          Research Roadmap
          <div className="res-item-thumbup"><img alt="thumbup" src={thumbup}/> 50</div>
        </div>
        <div className="res-item-bottom">
          Sam Feng
        </div>
      </div>
    );
  }
}
export default Browsingsquare
  