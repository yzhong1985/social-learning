import React, { Component } from "react";
import BrowsingSquare from "./BrowsingSquare"
import Button from 'react-bootstrap/Button';

import "./styles/browsing.css";

class BrowsingPage extends Component {

  
  render() {

    return (
      <div className="container">
      <div className='resources-items'>
        {
          this.props.data_state.squares_info.map((element, index) => {
            return (
              <div className='element' key={index}>
                <BrowsingSquare data_state={this.props.data_state} element ={element} id={element['id']} title={element['title']}/>
              </div>
            )
          })
        }
      </div>
      <div className='resources-bottom-section'>
        <Button className="request-button" variant="primary" type="submit" value="Submit">Request</Button>
      </div>
      </div>
    );
  }
}
export default BrowsingPage;
