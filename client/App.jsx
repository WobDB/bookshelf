import React, { Component } from 'react';

import Home from './pages/Home.jsx';
import CreateUser from './pages/CreateUser.jsx';
import Login from './pages/Login.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello world!
        <Home />
      </div>
    )
  }

}

export default App;