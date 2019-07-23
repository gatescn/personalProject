import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import NavBar from './components/NavBar';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
