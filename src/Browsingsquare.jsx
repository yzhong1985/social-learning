import React, { Component } from "react";
import "./Square.css";
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
      <div className='square'>
        <Link to={`/browsing/${this.props.element['id']}`} style={linkStyle}>
              {this.props.title}
        </Link>
      </div>
    );
  }
}
export default Browsingsquare
  