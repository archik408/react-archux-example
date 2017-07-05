
/**
 * @private
 * @type {String}
 */
const PENDING_POSTFIX = '_PENDING';
/**
 * @private
 * @type {String}
 */
const SUCCESS_POSTFIX = '_SUCCESS';
/**
 * @private
 * @type {String}
 */
const FAIL_POSTFIX = '_FAIL';

/**
 * Application store dispatcher,
 * provide functionality for manage store data (models)
 */
class Dispatcher {
  /**
   * @constructor
   * @param {Object} store - Application store instance
   * that implements getState and dispatch methods
   */
  constructor(store = { getState: () => {}, dispatch: () => {} }) {
    this.store = store;
  }

  /**
   * Create pure redux/flux action
   *
   * @see https://github.com/acdlite/redux-actions
   * @see https://github.com/acdlite/flux-standard-action#actions
   *
   * @param {String} type - Action type
   * @param {*} [payload] - Some data or error details
   * @param {*} [meta] - Addition action information
   * @param {Boolean} [error] - Payload is error
   *
   * @returns {Object} New action object
   */
  createAction(type, payload, meta, error) {
    return { type, payload, meta, error };
  }

  /**
   * Dispatch pure action
   *
   * @param {String} type - Action type
   * @param {*} [payload] - Some data or error details
   * @param {*} [meta] - Addition action information
   * @param {Boolean} [error] - Payload is error
   *
   * @returns {*} Dispatch action
   */
  dispatchAction(type, payload, meta, error) {
    const { store } = this;

    store.dispatch(this.createAction(type, payload, meta, error));
  }

  /**
   * Dispatch promise
   *
   * @param {Function} operation - Function/Operation that return Promise
   * @param {String} type - Action type
   * @param {Function} isLoading - Getter for pending indicator
   * @param {Array<*>} [args] - Operation arguments
   *
   * @returns {*} Dispatch action
   */
  dispatchPromise(operation, type, isLoading, args = []) {
    const { store } = this;

    if (!isLoading(store.getState())) {
      this.dispatchAction(`${type}${PENDING_POSTFIX}`, null, args);

      operation(...args)
        .then(res => this.dispatchAction(`${type}${SUCCESS_POSTFIX}`, res && res.data, args))
        .catch(err => this.dispatchAction(`${type}${FAIL_POSTFIX}`, err, args, true));
    }
  }

  /**
   * Dispatch async
   *
   * @param {Function} operation - Async function/operation that has first-error callback
   * @param {String} type - Action type
   * @param {Function} isLoading - Getter for pending indicator
   * @param {Array<*>} [args] - Operation arguments
   *
   * @returns {*} Dispatch action
   */
  dispatchAsync(operation, type, isLoading, args = []) {
    const { store } = this;

    if (!isLoading(store.getState())) {
      this.dispatchAction(`${type}${PENDING_POSTFIX}`, null, args);

      operation(...args, (error, data) => {
        if (error) {
          return this.dispatchAction(`${type}${FAIL_POSTFIX}`, error, args, true);
        }
        return this.dispatchAction(`${type}${SUCCESS_POSTFIX}`, data, args);
      });
    }
  }
}

export default Dispatcher;
