import React, { Component } from "react";
import Panel from "./Panel";
import Browsingpage from "./Browsingpage"
import Profile from "./Profile"
import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Social Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/'>Creation</Nav.Link>
              <Nav.Link href='/browsing'>Browsing</Nav.Link>
              <Nav.Link href='/profile'>Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>

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
