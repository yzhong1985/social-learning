import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import CommentSection from "./CommentSection";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";
import { BsEmojiSunglasses, BsHandThumbsUp } from "react-icons/bs";

import "./styles/square.css";

const BrowsingSquare = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = props.id
  let currSquare = props.data_state.squares_info.find(
    (square) => square.id === id
  );

  return (
    // <>
    <div className="res-item">
      <div className="res-uppperbox">

      </div>
      <div className="res-item-description">
      <Link onClick={handleShow}>
        {props.title}
      </Link>
      </div>
      <div className="res-item-thumbup"><BsHandThumbsUp className="res-item-thumbup-icon" /> 100</div>
      <div className="res-item-author">Sam Feng <BsEmojiSunglasses /></div>
      
      <Modal className="res-item-modal" show={show} onHide={handleClose}>
        <Modal.Header className="res-item-modal-title" closeButton>
          <div className="res-item-modal-title-auth" ><BsEmojiSunglasses /> Sam Feng</div>
          <div className="res-item-modal-title-content">{props.title}</div>
        </Modal.Header>
        <Modal.Body>
          <div className="list-res-steps-title">
            <div className="list-col-name">Steps</div>
            <div className="list-col-name">Resources</div>
          </div>
          
          <ListGroup className="res-steps-list-groups" variant="flush" style={{ display: "flex", flexDirection: "row" }}>
            <div className="res-steps-list-item" style={{ flex: 1 }}>
              {currSquare.step_content.map((element) => {
                return <ListGroup.Item>{element}</ListGroup.Item>;
              })}
            </div>
            <div className="res-steps-list-item" style={{ flex: 1 }}>
              {currSquare.resource_content.map((element) => {
                return <ListGroup.Item>{element}</ListGroup.Item>;
              })}
            </div>
          </ListGroup>
          
          <div className="res-step-group-bottom"><div className="res-step-group-comment">4.5k comments </div><LikeButton className="res-step-group-like-btn"/></div>
          <div className="res-step-comment"><CommentSection /></div>
        

        </Modal.Body>

      </Modal>
    </div>
  );
};

export default BrowsingSquare;
