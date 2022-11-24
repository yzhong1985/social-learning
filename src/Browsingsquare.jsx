import React, { useState } from "react";
import "./Square.css";
import thumbup from "./images/thumbup.png"
import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import CommentSection from "./CommentSection"
import LikeButton from "./LikeButton"


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  fontsize: "1.3rem",
  color: 'blue'
};


const BrowsingSquare = (props)=>{

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = props.id
  console.log('data state: ', props.data_state)

  let currSquare = props.data_state.squares_info.find((square)=>square.id===id);
  console.log('currSquare: ', currSquare)
  return (
    // <>
      <div>
      <Link onClick={handleShow} style={linkStyle}>
              {props.title} 
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title className="ms-auto">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <ListGroup variant="flush" style={{display: 'flex', flexDirection: 'row'}}>
          <div style={{flex: 1}}>
          {
            currSquare.step_content.map((element) => {
            
            return (
              <ListGroup.Item>{element}</ListGroup.Item>
                );
              })}
          </div>
          <div style={{flex: 1}}>
          {currSquare.resource_content.map((element) => {
            return (
              <ListGroup.Item>{element}</ListGroup.Item>
                );
              })}
          </div>
          </ListGroup>
        </Modal.Body>
        <LikeButton />
        <CommentSection />
      </Modal>
        
      </div>    
  );
}

export default BrowsingSquare;
  