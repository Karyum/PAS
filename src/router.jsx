import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/app.jsx';
import MethodList from './containers/method_list.jsx';
import Directions from './containers/directions.jsx';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/place/:guesthouse' component={MethodList} />
        <Route path='/car' exact component={Directions} />
        <Route path='/bus' exact component={Directions} />
        <Route path='/taxi' exact component={Directions} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
