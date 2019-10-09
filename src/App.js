import React, { Component } from 'react';
import './App.css';
import PhotoContainer from './containers/PhotoContainer';

class App extends Component {



  render() {
    return (
      <div className="App">
      <h1>This is the App</h1>
      <PhotoContainer/>
      </div>
    );
  }
}

export default App;
