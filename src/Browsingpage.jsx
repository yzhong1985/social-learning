import React, { Component } from "react";
import Browsingsquare from "./Browsingsquare"
import Button from 'react-bootstrap/Button';

import "./styles/browsing.css";

class Browsingpage extends Component {

  render() {
    return (
      <div className="container">
      <div className='resources-items'>

        {this.props.data_state.squares_info.map((element, index) => {
        return (
          <div className='resources-item' key={index}>
            {/* <h2>{element}</h2> */}
            <Browsingsquare element ={element} title={element['title']}/>

          </div>
        );
      })}
      </div>
      <div className='resources-bottom-section'>
        <Button className="request-button" variant="primary" type="submit" value="Submit">Request</Button>
      </div>
      </div>
    );
  }
}
export default Browsingpage;
