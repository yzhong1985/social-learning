import React, { Component } from "react";

class Browsingpage extends Component {
  render() {
    return (
      <div className='About'>
        <h1>Browsing!!!</h1>
        <p>This is the browsing page...</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
}
export default Browsingpage;
