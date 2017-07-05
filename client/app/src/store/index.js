import Store from './Store';
import Dispatcher from './Dispatcher';
import devLogger from './dev/devLogger';
import subscribeToStore from './react/subscribeToStore';
import Provider, { shape } from './react/Provider';

import reducers from '../reducers';

const logger = window.runDevLogger ? devLogger : f => f;

const store = logger(new Store(reducers));

const dispatcher = new Dispatcher(store);

export { store, dispatcher, shape, Provider, subscribeToStore };
