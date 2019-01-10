import React from 'react'
import { connect } from 'react-redux'
import { Route,Switch } from 'react-router-dom'
import Index from './index'
// import Login from './login/login'
import {requireAuthentication} from './requireauthentication'

import './styles/global.less'

class AppRoot extends React.Component {
    componentWillMount() {

    }

    componentWillUnmount() {

    }
    render() {
      return (
        <Switch>
          <Route exact path="/" component={Index} />

          {/* <Route path="/login" component={Login}/> */}
        </Switch>
      );
  }
}
export default connect()(AppRoot);
