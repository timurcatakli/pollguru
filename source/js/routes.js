import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'views/App';
import Dashboard from 'views/Dashboard';
import About from 'views/About';
import Subpage from 'views/Subpage';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
  SUBPAGE: `${ publicPath }subpage`,
};

export default class Routes extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path={ publicPath } component={ App }>
          <IndexRoute component={ Dashboard } />
          <Route path={ routeCodes.POCKET_AUTH } component={ Dashboard } />
          <Route path={ routeCodes.ABOUT } component={ About } />
          <Route path={ routeCodes.SUBPAGE } component={ Subpage } />

          <Route path='*' component={ NotFound } />
        </Route>
      </Router>
    );
  }
}
