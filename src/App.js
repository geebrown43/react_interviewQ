import React, { Component } from 'react';
import Main from './components/Main'
import './App.css'

class App extends Component {
  constructor(){
    super() 
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div className="app">
        <Main />
      </div>
      
    );
  }
}


export default App;
