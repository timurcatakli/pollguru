import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import App from 'views/App'
import Dashboard from 'views/Dashboard'
import About from 'views/About'
import Subpage from 'views/Subpage'
import Login from 'views/Login'
import Register from 'views/Register'
import NotFound from 'views/NotFound'
import RequireAuth from './utils/RequireAuth'

const publicPath = '/'

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  SUBPAGE: `${ publicPath }subpage`,
  LOGIN: `${ publicPath }login`,
  REGISTER: `${ publicPath }register`,
}

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path={ routeCodes.POCKET_AUTH } component={ Dashboard } />
          <Route path={ routeCodes.ABOUT } component={ RequireAuth(About) } />
          <Route path={ routeCodes.SUBPAGE } component={ Subpage } />
          <Route path={ routeCodes.LOGIN } component={ Login } />
          <Route path={ routeCodes.REGISTER } component={ Register } />
          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    )
  }
}
