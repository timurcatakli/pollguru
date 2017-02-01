import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from 'containers/App'
import DashboardContainer from 'containers/dashboard/DashboardContainer'
import Subpage from 'containers/subpage'
import LoginContainer from 'containers/login/LoginContainer'
import Register from 'containers/register'
import PollContainer from 'containers/poll/PollContainer'
import PollSearchContainer from 'containers/poll/PollSearchContainer'
import CreatePollMainContainer from 'containers/poll/CreatePollMainContainer'
import AccountContainer from 'containers/account/AccountContainer'
import NotFound from 'containers/not-found'
import RequireAuth from './utils/RequireAuth'

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ DashboardContainer } />
          <Route path='subpage' component={ Subpage } />
          <Route path='login' component={ LoginContainer } />
          <Route path='register' component={ Register } />
          <Route name='Poll' path='poll' module='poll'>
            <IndexRoute component={ PollSearchContainer } />
            <Route path='create' component={ CreatePollMainContainer } />
            <Route path=':pollId' component={ PollContainer } />
          </Route>

          <Route path='account' component={ AccountContainer } />
          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    )
  }
}
