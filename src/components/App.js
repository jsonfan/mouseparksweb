import React, { Component } from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
import Nav from './Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
        <footer>
          <span>Copyright MouseParks 2017</span>
        </footer>
      </div>
    );
  }
}

export default App;
