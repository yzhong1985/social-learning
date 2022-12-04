import React from "react";
import "@atlaskit/css-reset";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./Column";
import Popup from "reactjs-popup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

class Panel extends React.Component {

  render() {
    const {
      add_to_browse,
      columnOrder,
      columns,
      inputChangeHandler,
      new_resource,
      new_step,
      new_title,
      onDragEnd,
      tasks,
      titleInputChangeHandler,
      submitHandler,
    } = this.props;

    return (
        <Container className="panel-container">
          <DragDropContext onDragEnd={onDragEnd}>
            {columnOrder?.map((columnId) => {
              const column = columns[columnId];
              const map_tasks = column.taskIds.map((taskId) => tasks[taskId]);
              return (
                <Column key={column.id} column={column} tasks={map_tasks} />
              );
            })}
          </DragDropContext>
          <div className="seperator"></div>
          <div className="panel-inputs-container">
          <Form onSubmit={submitHandler}>
            <div className="panel-text-inputs">
              <Button className="panel-input-plus-btn" variant="secondary" type="submit" value="Submit">+</Button>
              <Form.Control type="text" name="new_step" placeholder="Enter new step"
                  value={new_step} onChange={inputChangeHandler} />
              <Form.Control type="text" name="new_resource" placeholder="Enter new resource"
                  value={new_resource} onChange={inputChangeHandler} />
              
            </div>
            <div className="panel-text-inputs">
              <Popup trigger={<Button className="panel-share-btn">Share this guide</Button>} position="center">
                    <Form.Control type="text" name="new_title" placeholder="title"
                      value={new_title} onChange={titleInputChangeHandler} />
                  <Button variant="success" onClick={add_to_browse}>Share</Button>
                </Popup>
            </div>
          </Form>
          </div>
        </Container>
    );
  }
}

export default Panel;
