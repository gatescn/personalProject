import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import MenuGrid from './components/MenuGrid';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <MenuGrid/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
