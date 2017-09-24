import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/app.jsx';
import MethodList from './containers/method_list.jsx';
import Walking from './containers/walking.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/place/:guesthouse' component={MethodList} />
        <Route path='/walking' exact component={Walking} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
