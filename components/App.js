import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';

import Main from './Main';
import Login from './Login';

class App extends Component {
  render() {
    if (this.props.location.pathname === '/login') {
      return <Route exact path = '/login' component = {Login} />;
    }

    return (
      <Route path = '/' component = {Main} />
    );
  }
}

export default withRouter(App);
