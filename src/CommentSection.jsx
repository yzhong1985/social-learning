import React, { Component, useState } from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";

import { BiConfused } from "react-icons/bi";

let commentCounter = 1;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: "",
      commentLine: [{ commentId: "", text: "" }],
    };
    this.handleCommentValue = this.handleCommentValue.bind(this);
    this.commentChangeHandler = this.commentChangeHandler.bind(this);
  }

  commentChangeHandler(e) {
    console.log("changing comments....");
    this.setState((prevState) => ({
      //  ...prevState.new_things,
      commentValue: e.target.value,
    }));
  }
  setCommentLine() {
    this.setState(
      {
        commentLine: [
          ...this.state.commentLine,
          { commentId: commentCounter++, text: this.state.commentValue },
        ],
        commentValue: "",
      },
      () => console.log("the new state is ", this.state)
    );
  }

  handleCommentValue(e) {
    console.log("changing comment value");
    this.setState((prevState) => ({
      [e.target.name]: e.target.value,
    }));
  }

  submitCommentLine = (e) => {
    console.log("press submit comments buttons ");
    e.preventDefault();
    this.setCommentLine();
  };

  enterCommentLine = (e) => {
    if (e.charCode === 13) {
      this.setCommentLine();
    }
  };
  render() {
    return (
      <div>
        <CommentBox
          commentValue={this.state.commentValue}
          commentChangeHandler={this.commentChangeHandler}
          enterCommentLine={this.enterCommentLine}
          submitCommentLine={this.submitCommentLine}
        />
        <Comment commentLine={this.state.commentLine} />
      </div>
    );
  }
}

export default CommentSection;
