import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Dashboard />
      </BrowserRouter>
    );
  }
}

export default App;
