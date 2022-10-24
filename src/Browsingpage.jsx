import React, { Component } from "react";

class Browsingpage extends Component {

  render() {
    return (
      <div className='About'>
        <h1>Browsing!!!</h1>
        <p>This is the browsing page...</p>
        {this.props.name.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
      </div>
    );
  }
}
export default Browsingpage;
