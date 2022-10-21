import React from 'react';
import '@atlaskit/css-reset';

import Columntest from './Columntest'; 

import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';


class Paneltest extends React.Component {
    render() {
        return (
          <div>
            <Columntest />
          </div>
        );
      }
    }
 

export default Paneltest;
