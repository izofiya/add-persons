import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>use Redux instead of local state</li>
        </ul>
        <Persons />
      </div>
    );
  }
}

export default App;
