import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import profileimg from "./images/profile-img.png";
import "./styles/profile.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <div className="profile-image-div">
          <img className="profile-img" alt="thumbup" src={profileimg} />
        </div>
        <div className="profile-description">
          <p>
            <b>10,000</b> people find your experience helpful.
          </p>
        </div>
        <Tabs defaultActiveKey="request" className="mb-3">
          <Tab eventKey="request" title="Request">
            <div>View my requests</div>
          </Tab>
          <Tab eventKey="share" title="View My Shares">
            <div>View my shares</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
export default Profile;
