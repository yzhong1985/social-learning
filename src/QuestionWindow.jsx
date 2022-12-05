import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const QuestionWindow = (props) => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="type your question here..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={6} placeholder="any note?" />
        </Form.Group>
      </Form>
      <Button variant="primary">Submit</Button>{" "}
    </div>
  );
};

export default QuestionWindow;
