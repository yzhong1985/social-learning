import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Panel from "./Panel";
import Browsingpage from "./Browsingpage"
import Profile from "./Profile"
import SquareDetails from "./SquareDetails"
import TopNavBar from "./components/TopNavBar"

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import sampleData from "./data/datasample.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 8,
      tasks_sample:sampleData.tasks,
      tasks: {
        'task-1': {id:'task-1',content:'research step 1'},
        'task-2': {id:'task-2',content:'research step 2'},
        'task-3': {id:'task-3',content:'research step 3'},
        'task-4': {id:'task-4',content:'research step 4'},
  
        'task-5': {id:'task-5',content:'book 1'},
        'task-6': {id:'task-6',content:'book 2'},
        'task-7': {id:'task-7',content:'book 3'},
        'task-8': {id:'task-8',content:'book 4'},
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
      new_step : '',
      new_resource : '',
      data_count : 4,
      squares_info:sampleData.squares,

      
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this)
    this.add_to_browse = this.add_to_browse.bind(this)

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

  // add this.state into data state under a new square 
  add_to_browse() {
    
    const newDataState = prevState => {
      var steps_array = []
      var resources_array = []
      this.state.columnOrder?.map((columnId) => {
        const column = this.state.columns[columnId]
        const map_tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
        console.log("map tasks: ",map_tasks)
        map_tasks.map(task => console.log("accessing content ",task['content']))
        if (column.title === 'steps') {
          map_tasks.map(task => steps_array.push(task['content']))
        } else {
          map_tasks.map(task => resources_array.push(task['content']))
        }
      })
      console.log(steps_array,resources_array)
      // add this instance to the data state
      const guide_array = steps_array.concat(resources_array)
      console.log("guide_array: ",guide_array)

      const data_count = this.state.data_count + 1
      // ...this.data_state.squares_info,
      return {
        data_count: data_count,
        squares_info: [
          ...prevState.squares_info,
          {
            id: "" + data_count,
            title: "Sam_study_guide",
            content: guide_array.toString(),
          },
        ],
      }; 
    }

    this.setState(newDataState,()=>console.log("the new state is ", this.state))

  }

  render() {
    const getSquares = props => {
      let id = props.match.params.squareid;
      let currentSquare = this.states.squares_info.find(
        square =>square.id === id
      );
      return <SquareDetails {...props} square={currentSquare} />;
    };

    return (
      <>
        <TopNavBar></TopNavBar>
        <div className="container">
          <Routes>
            <Route exact path="/home" element={
                <Panel
                  add_to_browse={this.add_to_browse}
                  onDragEnd={this.onDragEnd}
                  inputChangeHandler={this.inputChangeHandler}
                  submitHandler={this.submitHandler}
                  tasks={this.state.tasks}
                  columns={this.state.columns}
                  columnOrder={this.state.columnOrder}
                  new_step={this.state.new_step}
                  new_resource={this.state.new_resource}
                />
              }/>
            <Route exact path="/browsing" element={<Browsingpage data_state={this.state} />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/browsing/:squareid" 
            element={<SquareDetails square_details={this.state.squares_info} />}/>
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
