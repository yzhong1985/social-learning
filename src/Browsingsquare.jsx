import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import CommentSection from "./CommentSection";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";
import "./styles/Square.css";

const BrowsingSquare = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const id = props.id;

  let currSquare = props.data_state.squares_info.find(
    (square) => square.id === id
  );

  return (
    // <>
    <div>
      <Link onClick={handleShow}>
        {props.title}
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title className="ms-auto">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup
            variant="flush"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div style={{ flex: 1 }}>
              {currSquare.step_content.map((element) => {
                return <ListGroup.Item>{element}</ListGroup.Item>;
              })}
            </div>
            <div style={{ flex: 1 }}>
              {currSquare.resource_content.map((element) => {
                return <ListGroup.Item>{element}</ListGroup.Item>;
              })}
            </div>
          </ListGroup>
        </Modal.Body>
        <LikeButton />
        <CommentSection />
      </Modal>
    </div>
  );
};

export default BrowsingSquare;
