import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import Routes from './router.jsx';
import storeConfigure from './store.config.js';

const store = storeConfigure();

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>
  , document.getElementById('root')
);
