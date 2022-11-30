import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { commentLine } = this.props;
    return (
      <ul className="comments-list">
        {commentLine.map((element) => {
          if (element.text != "") {
            return (
              <li className="each-comment" key={element.commentId}>
                {element.text}
              </li>
            );
          }
        })}
      </ul>
    );
  }
}
export default Comment;
