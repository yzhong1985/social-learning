import React, { Component } from "react";
import Browsingsquare from "./Browsingsquare"
import "./Browsingpage.css";

class Browsingpage extends Component {

  render() {
    return (
      <div className='browsing_page'>

        {this.props.data_state.squares_info.map((element, index) => {
        return (
          <div className='element' key={index}>
            {/* <h2>{element}</h2> */}
            <Browsingsquare element ={element} title={element['title']}/>

          </div>
        );
      })}
      </div>
    );
  }
}
export default Browsingpage;
