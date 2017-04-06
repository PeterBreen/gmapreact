import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { GMap, initialCenter } from './GMaps';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Google Maps / Create React App</h2>
        </div>
        <GMap initialCenter={initialCenter} />
      </div>
    );
  }
}

export default App;
