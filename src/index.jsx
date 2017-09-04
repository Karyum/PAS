import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import App from './components/app.jsx';
import storeConfigure from './store.config.js';

const store = storeConfigure();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
