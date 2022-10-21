import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';
import Tasktest from "./Tasktest";
import { Droppable } from "react-beautiful-dnd";


const Container = styled.div`
    display: flex;
    flex-direction: row;
`



export default class Taskpair extends React.Component {
  render() {
    return (

    <Droppable droppableId={this.props.column.id}>
      {provided => (
    <Draggable draggableId={this.props.pairId} >
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* {this.props.task.content} */}
          <Tasktest taskId = {this.props.stepId} content={this.props.step} />
          <Tasktest taskId = {this.props.resourceId} content={this.props.resource} />
        </Container>
      )}
    {/* <button onClick={this.props.removeBox}>X</button> */}

    </Draggable>

  )}
    </Droppable>
    );
  }
}
