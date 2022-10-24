import React, { Component } from "react";
import Panel from "./Panel";
import Browsingpage from "./Browsingpage"
import Profile from "./Profile"
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 8,
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
      new_step : '',
      new_resource : '',
      name: ['Sam']
    }

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

  add_to_browse() {
    const newState = {
      ...this.state,
      name: [
        ...this.state.name,
        'Carl']
      }
    this.setState(newState)
    console.log('add new name')
  }

  render() {
    return (

      <div className='App'>
      <nav className='App-nav'>
        <NavLink activeClassName='active-link' to='/'>
          Creation
        </NavLink>
        <NavLink activeClassName='active-link' to='/browsing'>
          Browsing
        </NavLink>
        <NavLink activeClassName='active-link' to='/profile'>
          Profile
        </NavLink>

      </nav>
      <Routes>
        <Route exact path='/' element={<Panel add_to_browse={this.add_to_browse} onDragEnd={this.onDragEnd} inputChangeHandler={this.inputChangeHandler}
            submitHandler={this.submitHandler}
            tasks={this.state.tasks} 
            columns={this.state.columns} 
            columnOrder={this.state.columnOrder} 
            new_step={this.state.new_step} 
            new_resource={this.state.new_resource} />} />
        <Route exact path='/browsing' element={<Browsingpage name={this.state.name}/>} />
        <Route exact path='/profile' element={<Profile/>} />
      </Routes>


      
    </div>


    );
  }
}

export default App;
