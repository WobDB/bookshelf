import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home.jsx';
import CreateUser from './pages/CreateUser.jsx';
import Login from './pages/Login.jsx';

import { checkSessionActionCreator } from './actions/userActionCreators';

const mapStateToProps = (state) => ({
  userLoggedIn: state.user.loggedIn,
  sessionChecked: state.user.sessionChecked
})

const mapDispatchToProps = (dispatch) => ({
  checkSession: () => dispatch(checkSessionActionCreator())
})

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //blank page
    //send a request to check the session
    this.props.checkSession();
  }

  render() {
    
    //if sessionChecked is false, render a blank page
    if(!this.props.sessionChecked) {
      return <div>Wait, the page is loading...</div>;
    }

    //if sessionChecked is true, render the below
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

