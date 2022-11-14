import React from 'react';
import '@atlaskit/css-reset';

import Column from './Column'; 
import Popup from 'reactjs-popup';

import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Panel extends React.Component {
  
  render() {
    const liStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
    const {add_to_browse, columnOrder, columns, inputChangeHandler, new_resource, new_step, new_title, onDragEnd, tasks, titleInputChangeHandler, submitHandler} = this.props
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
      <Form onSubmit={submitHandler}>
          <Container>
            <Row>
              <Col md={4}><Form.Label>New Step</Form.Label></Col>
              <Col md={4}><Form.Label>New Resource</Form.Label></Col>
            </Row>
            <Row>
              <Col md={4}><Form.Control type="text" id="input_step" name="new_step" placeholder="Enter new step" value={new_step} onChange={inputChangeHandler} /></Col>
              <Col md={4}><Form.Control type="text" id="input_resource" name="new_resource" placeholder="Enter new resource" value={new_resource} onChange={inputChangeHandler} /></Col>
            </Row>
            <Row className='row-buttons'>
              <Col md={4}><Button variant="primary" type="submit" value="Submit">Submit</Button>{' '}
              
              <Popup trigger={<Button>Share this guide</Button>} 
                position="right center">
                  <Col md={4}><Form.Control type="text" name="new_title" placeholder="title" value={new_title} onChange={titleInputChangeHandler} /></Col>
                  <Button variant="success" onClick={add_to_browse}>Submit!</Button>
              </Popup>
              </Col>
            </Row>
          </Container> 
        </Form>
      </div>
      


    )

  }
}

export default Panel;
