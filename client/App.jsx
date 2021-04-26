import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.jsx';
import CreateUser from './pages/CreateUser.jsx';
import Login from './pages/Login.jsx';

const mapStateToProps = (state) => ({
  userLoggedIn: state.user.loggedIn
})

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let MainPage;
    if (!this.props.userLoggedIn) {
      MainPage = Login
    } else {
      MainPage = Home
    }

    return (

      <Router>
        <div>
           <Switch>
             <Route path="/" exact component={MainPage} />
             <Route path="/signup" component={CreateUser} />
           </Switch>
        </div>
      </Router>
    )
  }

}

export default connect(mapStateToProps)(App);

