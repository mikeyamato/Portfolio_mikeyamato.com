import React, { Component } from 'react';
import './App.css';
import Router from './Router';
import { removeHash } from 'react-scrollable-anchor';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

removeHash();


export default App;
