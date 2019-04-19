import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';

const AppDiv = styled.div`
  witdth: 100%;
  height: 1000px;
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <h1>Home</h1>
      </AppDiv>
    );
  }
}

export default App;
