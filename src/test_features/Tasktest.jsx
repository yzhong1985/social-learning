import React from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #1E90FF;
  border-radius: 15px;
`;

export default class Tasktest extends React.Component {
  render() {
    return (
    <Draggable draggableId={this.props.task}>
      {provided => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {this.props.content}
        </Container>
      )}
    {/* <button onClick={this.props.removeBox}>X</button> */}

    </Draggable>
    );
  }
}
