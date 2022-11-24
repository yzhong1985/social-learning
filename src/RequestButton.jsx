import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import QuestionWindow from "./QuestionWindow";
import Button from 'react-bootstrap/Button';

const RequestButton = (props)=>{
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
      // <>
        <div>
        <Button variant="primary" onClick={handleShow}>
                Request 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="px-4" closeButton>
            <Modal.Title className="ms-auto">Add Your Desired Guide Request</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <QuestionWindow />
          </Modal.Body>
        </Modal>
          
        </div>    
    );
  }
  
export default RequestButton;
