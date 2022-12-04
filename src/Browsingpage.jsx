import React, { Component } from "react";
import BrowsingSquare from "./BrowsingSquare";
import RequestButton from "./RequestButton";
import RequestList from "./RequestList";
import "./styles/browsing.css";

class BrowsingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      questions: [
        {
          id: "1",
          question_content: "How to be a good student?",
          note: "I need to know the steps",
        },
        {
          id: "2",
          question_content: "How to deal with project challenge?",
          note: "I need to know all the challenges",
        },
      ],
      new_question: "",
      new_note: "",
    };
    this.handleChangeOnQuestion = this.handleChangeOnQuestion.bind(this);
    this.handleChangeOnNote = this.handleChangeOnNote.bind(this);
    this.add_question = this.add_question.bind(this);
  }

  handleChangeOnQuestion(e) {
    this.setState((prevState) => ({
      [e.target.name]: e.target.value,
    }));
  }

  handleChangeOnNote(e) {
    this.setState((prevState) => ({
      [e.target.name]: e.target.value,
    }));
  }

  add_question(e) {
    e.preventDefault();
    console.log("adding a request question ... ");
    this.setState((prevState) => ({
      new_question: "",
      new_note: "",
      count: prevState.count + 1,
      questions: [
        ...prevState.questions,
        {
          id: prevState.count + 1,
          question_content: prevState.new_question,
          note: prevState.new_note,
        },
      ],
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="res-squares-container">
          {this.props.data_state.squares_info.map((element, index) => {
            return (
              <div className="res-square" key={index}>
                <BrowsingSquare
                  data_state={this.props.data_state}
                  element={element}
                  id={element["id"]}
                  title={element["title"]}
                />
              </div>
            );
          })}
        </div>
        <div className="res-bottom-items">
          <RequestList question_list={this.state} />
          <RequestButton
            new_question={this.state.new_question}
            new_note={this.state.new_note}
            handleChangeOnQuestion={this.handleChangeOnQuestion}
            handleChangeOnNote={this.handleChangeOnQuestion}
            add_question={this.add_question}
          />
        </div>
      </div>
    );
  }
}
export default BrowsingPage;
