import React from 'react';
import '@atlaskit/css-reset';
import ReactDOM from 'react-dom';
// import initialData from './initial_data';
import Column from './column'; 

import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`

`

const Button = styled.button `
position: absolute;
right: 100px;
top: 300px;


`
// const { Component } = React,
//       { render } = ReactDOM,
//       rootNode = document.getElementById('root')


class App extends React.Component {
  // state = initialData;

  state = {
    tasks: {
      'task-1': {id:'task-1',content:'research step 1'},
      'task-2': {id:'task-2',content:'research step 2'},
      'task-3': {id:'task-3',content:'research step 3'},
      'task-4': {id:'task-4',content:'research step 4'},

      'task-5': {id:'task-5',content:'research step 1'},
      'task-6': {id:'task-6',content:'research step 2'},
      'task-7': {id:'task-7',content:'research step 3'},
      'task-8': {id:'task-8',content:'research step 4'},

  },

    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Steps',
            taskIds: ['task-1','task-2','task-3','task-4'],
        },

        'column-2': {
            id: 'column-2',
            title: 'Resources',
            taskIds: ['task-5','task-6','task-7','task-8'],
          }
    },

    columnOrder: ['column-1', 'column-2'],
    userInput: '',
  }



  onDragEnd = result => {

    const {destination, source, draggableId } = result;

    if(!destination) {
      return;
    }
  
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
  
    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
  
    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
  
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
  
    this.setState(newState);

  };


  inputChangeHandler = ({ target: { value } }) =>
  this.setState({
    newTask: value,
  });

  submitHandler = e => {
    e.preventDefault();
    this.setState(prevState => {
      // increment task count
      const newCount = prevState.count + 1;
      // create new id based on task count
      const newId = `task-${newCount}`;
      return {
        count: newCount,
        // clear input
        newTask: '',
        tasks: {
          // add to tasks array
          ...prevState.tasks,
          [newId]: { id: newId, content: prevState.newTask },
        },
        // add task id at the end of first column
        columns: {
          ...prevState.columns,
          'column-1': {
            ...prevState.columns['column-1'],
            taskIds: [...prevState.columns['column-1'].taskIds, newId],
          },
        },
      };
    });
  };

  render() {

    const liStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

    return (
      <div style ={liStyle}>
      <Container style={liStyle}>
        <DragDropContext
        onDragEnd={this.onDragEnd}>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
            
            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </DragDropContext>
      </Container>
      <form onSubmit={this.submitHandler}>
          <input
            type="text"
            id="content"
            className="teste"
            value={this.state.newTask}
            onChange={this.inputChangeHandler}
          />
          <input
            type="text"
            id="content"
            className="teste"
            value={this.state.newTask}
            onChange={this.inputChangeHandler}
          />
          <input type="submit" value="Submit"/>
      </form>;
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals