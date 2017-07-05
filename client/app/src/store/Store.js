// Properties
const currentState = Symbol.for('@@state');
const currentListeners = Symbol.for('@@listeners');
const nextListeners = Symbol.for('@@next-listeners');
const isDispatching = Symbol.for('@@store-is-dispatching');
// Methods
const ensureCanMutateNextListeners = Symbol.for('@@ensure-can-mutate-next-listeners');
const updateModelState = Symbol.for('@@update-state');

/**
 * Application Store
 *
 * @desc The object that brings together actions and reducers.
 * It's important to note that app only have a single store.
 * When you want to split your data handling logic,
 * you'll use several reducers with different model names instead of many stores
 */
class Store {
  /**
   * @constructor
   * @param {Object} reducers - Map of model names and reducer functions
   */
  constructor(reducers) {
    this.reducers = reducers;
    this.models = Object.keys(reducers);

    this[currentState] = {};
    this[currentListeners] = [];
    this[nextListeners] = this[currentListeners];
    this[isDispatching] = false;
    // Load initial state tree
    this.dispatch({ type: null });
  }

  /**
   * Method that returns current application state as plain object
   *
   * @returns {Object} Current state
   */
  getState() {
    return this[currentState];
  }

  /**
   * Method that provide possibility to subscribe
   * for store updates using listener function
   *
   * @param {Function} listener - Store change listener
   * @returns {void}
   */
  subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Listener is not a function');
    }

    this[ensureCanMutateNextListeners]();
    this[nextListeners].push(listener);
  }

  /**
   * Method that provide possibility to unsubscribe
   * from store updates using listener function as key
   *
   * @param {Function} listener - Store change listener
   * @returns {void}
   */
  unsubscribe(listener) {
    this[ensureCanMutateNextListeners]();
    const index = this[nextListeners].indexOf(listener);
    if (index > -1) this[nextListeners].splice(index, 1);
  }

  /**
   * Dispatch specific action.
   * Set status is dispatching and call model state update.
   * Then emit listener functions
   *
   * @param {Object} action - Action object
   * @returns {void}
   */
  dispatch(action) {
    if (this[isDispatching]) {
      throw new Error('Store still dispatching');
    }

    try {
      this[isDispatching] = true;
      this[updateModelState](action);
    } finally {
      this[isDispatching] = false;
    }

    const listeners = this[currentListeners] = this[nextListeners];
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  /**
   * Method that provide possibility to
   * ensure that store can mutate next listeners
   *
   * @private
   * @returns {void}
   */
  [ensureCanMutateNextListeners]() {
    if (this[nextListeners] === this[currentListeners]) {
      this[nextListeners] = this[currentListeners].slice();
    }
  }

  /**
   * Apply reducers that do state updates based on specific action
   *
   * @private
   * @param {Object} action - Action object
   * @returns {void}
   */
  [updateModelState](action) {
    const state = this[currentState];
    const nextState = {};
    const { models, reducers } = this;

    let hasChanged = false;

    for (let i = 0; i < models.length; i++) {
      const modelName = models[i];
      const reducer = reducers[modelName];
      const prevStateForModel = state[modelName];
      const nextStateForModel = reducer(prevStateForModel, action);

      nextState[modelName] = nextStateForModel;
      hasChanged = hasChanged || nextStateForModel !== prevStateForModel;
    }
    this[currentState] = hasChanged ? nextState : state;
  }
}

export default Store;
