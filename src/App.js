import React, { Component } from "react";
import Panel from "./Panel";
import Browsingpage from "./Browsingpage"
import Profile from "./Profile"
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      // <div>
      //   <Panel />
      // </div>
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
        <Route exact path='/' element={<Panel/>} />
        <Route exact path='/browsing' element={<Browsingpage/>} />
        <Route exact path='/profile' element={<Profile/>} />
      </Routes>


      {/* <Panel/> */}
    </div>


    );
  }
}

export default App;
