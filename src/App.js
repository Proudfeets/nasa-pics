import React, { Component } from 'react';
import './App.css';
import PhotoContainer from './containers/PhotoContainer';
import PhotoTile from './components/PhotoTile';

class App extends Component {
  render() {
    return (

      <div className="App">
      <PhotoContainer/>
      </div>
    );
  }
}

export default App;
