import React from 'react';
import '@atlaskit/css-reset';

import Column from './Column'; 

import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`

`

class Panel extends React.Component {
  
  render() {
    const liStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
    const {add_to_browse, columnOrder, columns, inputChangeHandler, new_resource, new_step, onDragEnd, tasks, submitHandler} = this.props
    return (
      
      <div>
      <Container style={liStyle}>
        <DragDropContext
        onDragEnd={onDragEnd}>
          {columnOrder?.map((columnId) => {
            const column = columns[columnId];
            const map_tasks = column.taskIds.map(taskId => tasks[taskId]);
            
            return <Column key={column.id} column={column} tasks={map_tasks} />;
          })}
        </DragDropContext>
      </Container>
      <form onSubmit={submitHandler} style={liStyle}>
          <input type="submit" value="Submit"/>

          <input
            type="text"
            id="content"
            className="teste"
            name="new_step"
            value={new_step}
            onChange={inputChangeHandler}
          />
          <input
            type="text"
            id="content"
            className="teste"
            name="new_resource"
            value={new_resource }
            onChange={inputChangeHandler}
          />
      </form>;
      <button onClick={add_to_browse}>Share this guide</button>
      </div>
      


    )

  }
}

export default Panel;
