import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import MinePage from './routes/HomePage/MinePage/MinePage'
import SettingPage from './routes/HomePage/SettingPage/SettingPage'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/"  component={IndexPage} />
        <Route path="/mine" component={MinePage} />
        <Route path="/setting" component={SettingPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
