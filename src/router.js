import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import contactUs from './routes/ContactUs';
// 二级页面
import ChaoshiList from './routes/secondPage/ChaoshiList';
import Chaoshi from './routes/secondPage/Chaoshi';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/index" exact component={IndexPage} />
        <Route path="/contactUs" exact component={contactUs} />
        <Route path="/chaoshiList" exact component={ChaoshiList} />
        <Route path="/chaoshi" exact component={Chaoshi} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
