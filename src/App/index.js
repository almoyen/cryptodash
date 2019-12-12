import './App.css';
import Welcome from './WelcomeMessage';
import React, { Component } from 'react'
import styled from 'styled-components';
import AppLayout from './AppLayout';
import AppBar from './AppBar'
class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar/>
        <Welcome/>
      </AppLayout>
    )
  }
}
export default App;
