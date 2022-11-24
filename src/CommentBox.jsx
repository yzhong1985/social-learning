import React, { Component } from "react";

class CommentBox extends Component {
    constructor(props) {
      super(props);
    }


    render(){

        // const { commentValue, handleCommentValue, 
        //     enterCommentLine, submitCommentLine} = this.props;
        const enableCommentButton = () => {
            return (this.props.commentValue ? false : true);
        }

        const changeCommentButtonStyle = () => {
            return (this.props.commentValue ? "comments-button-enabled" : 
            "comments-button-disabled");
        }
           
        return (
            <div className="comments-box">
            <input onKeyPress={this.props.enterCommentLine} value={this.props.commentValue}
              id="comments-input" onChange={this.props.commentChangeHandler}
              type="text" placeholder="Add a comment..." />
            <button onClick={this.props.submitCommentLine} type="submit"     
              className="comments-button"id={changeCommentButtonStyle()}
              disabled={enableCommentButton()}
              >Post</button>
            </div>
          

        )
    }
}

export default CommentBox;
