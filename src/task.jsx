import React from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"
import "./styles/task.css"

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided) => (
          <div className="task-div"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    );
  }
}
