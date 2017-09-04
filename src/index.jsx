import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './components/app.jsx';
import Head from './components/head.jsx';
import storeConfigure from './store.config.js';

const store = storeConfigure();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/favorite' exact component={App} />
        <Route path='/unfavorite' exact component={App} />
        <Route path='/heyo' component={Head} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
