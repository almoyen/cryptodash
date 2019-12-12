import './App.css';
import Welcome from './WelcomeMessage';
import React, { Component } from 'react'
import styled from 'styled-components';

const MyButton = styled.div`
color: green;
`
export class App extends Component {
  render() {
    return (
      <div>
        <Welcome/>
        <MyButton><button>Hello!</button></MyButton>
      </div>
    )
  }
}
export default App;
