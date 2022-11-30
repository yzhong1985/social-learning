import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import RequestPage from "./RequestPage";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  fontsize: "1.3rem",
  color: "black",
};

const RequestList = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [secondShow, setSecondShow] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState([]);

  const handleName = (info) => {
    setSelectedQuestion(info);
    setSecondShow(true);
  };

  return (
    <div>
      <Button onClick={handleShow} style={linkStyle}>
        🤔️ Request List
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="px-4" closeButton>
          <Modal.Title className="ms-auto">Request List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup
            variant="flush"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div style={{ flex: 1 }}>
              {props.question_list.questions.map((element) => {
                return (
                  <ListGroup.Item>
                    <Link
                      onClick={() =>
                        handleName([element.id, element.question_content])
                      }
                      style={linkStyle}
                    >
                      {element.question_content}
                    </Link>
                  </ListGroup.Item>
                );
              })}
            </div>
          </ListGroup>

          <Modal show={secondShow} onHide={() => setSecondShow(false)}>
            <Modal.Header className="px-4" closeButton>
              <Modal.Title className="ms-auto">
                {selectedQuestion[1]}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RequestPage
                current_id={selectedQuestion[0]}
                data_props={props.question_list.questions}
              />
            </Modal.Body>
          </Modal>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RequestList;
