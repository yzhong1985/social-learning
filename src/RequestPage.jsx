import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CommentSection from "./CommentSection";

const RequestPage = (props) => {
  let currQuestion = props.data_props.find(
    (question) => question.id === props.current_id
  );
  console.log(currQuestion.note);
  return (
    <div>
      <p>{currQuestion.note}</p>
      <CommentSection />
    </div>
  );
};

export default RequestPage;
