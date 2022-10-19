import React from "react";
import styled from "styled-components";
import Taskpair from "./Taskpair";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from 'react-beautiful-dnd';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  display: inline-block;

`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;

export default class Columntest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          count: 8,
          taskpairs: {
            'pair-1': {pairId:'pair-1',stepId: 'step-1', resourceId:'resource-1', step:'task-1',resource:'research step 1'},
            'pair-2': {pairId:'pair-2',stepId: 'step-2', resourceId:'resource-2', step:'task-2',resource:'research step 2'},
            'pair-3': {pairId:'pair-3',stepId: 'step-3', resourceId:'resource-3', step:'task-3',resource:'research step 3'},
            'pair-4': {pairId:'pair-4',stepId: 'step-4', resourceId:'resource-4', step:'task-4',resource:'research step 4'},
    
      
        },
      
          columns: {
              'column-1': {
                  id: 'column-1',
                  title: 'Steps   Resource',
                  pairIds: ['pair-1','pair-2','pair-3','pair-4'],
              },
          },
      
          columnOrder: ['column-1'],
          new_step : '',
          new_resource : '',
        }
    
        this.inputChangeHandler = this.inputChangeHandler.bind(this)
    
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
    
    
      inputChangeHandler(e) {
        this.setState(prevState => ({
         ...prevState.new_things,
         [e.target.name]: e.target.value,
         })); 
        console.log(e.target.value)
       }
    
    
      // debugging what state looks like at the beginning
      componentDidMount() {
        console.log('first time: ',this.state)
      }
      
    
      submitHandler = e => {
        e.preventDefault();
        this.setState(prevState => {
          // increment task count
          var newCount_1 = prevState.count + 1;
          // create new id based on task count
    
          const newId_1 = `task-${newCount_1}`;
    
          var newCount_2 = newCount_1 + 1;
          // create new id based on task count
          const newId_2 = `task-${newCount_2}`;
          console.log(this.state)
    
          return {
            count: newCount_2,
            // clear input
            new_step: '',
            new_resource:'',
            tasks: {
              // add to tasks array
              ...prevState.tasks,
              [newId_1]: { id: newId_1, content: prevState.new_step},
              [newId_2]: { id: newId_2, content: prevState.new_resource},
            },
            // add task id at the end of first column
            columns: {
              ...prevState.columns,
              'column-1': {
                ...prevState.columns['column-1'],
                taskIds: [...prevState.columns['column-1'].taskIds, newId_1],
              },
              'column-2': {
                ...prevState.columns['column-2'],
                taskIds: [...prevState.columns['column-2'].taskIds, newId_2],
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
              const pairs = column.pairIds.map(pairId => this.state.taskpairs[pairId]);
              
              return <Taskpair pairId = {pairs.pairId}
                    stepId = {pairs.stepId}
                    resourceId = {pairs.resourceId} 
                    step = {pairs.step} 
                    resource = {pairs.resource} />;
            })}

          </DragDropContext>
        </Container>
        <form onSubmit={this.submitHandler}>
            <input
              type="text"
              id="content"
              className="teste"
              name="new_step"
              value={this.state.new_step}
              onChange={this.inputChangeHandler}
            />
            <input
              type="text"
              id="content"
              className="teste"
              name="new_resource"
              value={this.state.new_resource }
              onChange={this.inputChangeHandler}
            />
            <input type="submit" value="Submit"/>
        </form>;
        </div>
    );
  }
}