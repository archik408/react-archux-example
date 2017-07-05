import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { store, Provider } from './store';
import { routes, history } from './services/router';

import 'normalize.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import 'font-awesome/css/font-awesome.css';
import 'material-design-icons/iconfont/material-icons.css';
import './components/_typography.scss';

import '../index.html';

/**
 * Bootstrap React Application
 * @returns {void}
 */
function bootstrap() {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
  );
}

bootstrap();
