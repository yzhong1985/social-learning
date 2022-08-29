import React from 'react';
import '@atlaskit/css-reset';
import ReactDOM from 'react-dom';
import initialData from './initial_data';
import Column from './column'; 

import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content:center; // centers in the flex direction and the default flex-direction is row
  align-items:center; // centers perpendicular to the flex direction
  height: 100vh; // 100% view height
  width: 100vw; // 100% view width
  position: absolute; // so it goes behind the current content

`

const button = styled.div `
  
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
            taskIds: [],
          }
    },

    columnOrder: ['column-1', 'column-2'],
    userInput: '',
  }

  inputChangeHandler = ({target:{value}}) => this.setState({
    userInput: value
  })
  
  submitHandler = e =>{
    e.preventDefault()
    this.setState({
      listItems: [...this.state.listItems, this.state.userInput],
      userInput: ''
    })
  }  

  onDragEnd = result => {

    const {destination, source, draggableId} = result;
     
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId && destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index,1);
        newTaskIds.splice(destination.index,0,draggableId);
    
        const newColumn = {
          ...start,
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
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index,1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index,0,draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]:newStart,
        [newFinish.id]:newFinish,
      },
    };
    this.setState(newState);

  };

  render() {
    return (
        <DragDropContext
        onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
              console.log(tasks)
              return <Column key={column.id} column={column} tasks={tasks}/>
              // return column.title
            })}
          </Container>
          {/* <ul>
        {
          this.state.listItems.map((li,key) => <li {...{key}}>{li}</li>)
        }
      </ul> */}
        {/* <input value={this.state.userInput} onChange={this.inputChangeHandler} /> */}
        <button type="button">Add</button>
      </DragDropContext>

    //   <div>

    // </div>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
