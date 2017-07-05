/* eslint no-console: ["error", { allow: ["info"] }] */
/**
 * Developer logger
 *
 * @desc Highlight actions and store state in browser console.
 * You can switch off/on using {@see window.runDevLogger}
 *
 * @param {Object} store - Application store instance
 * @returns {Proxy} Store proxy object
 */
export default function devLogger(store) {
  return new Proxy(store, {
    get: (target, name, thisArg) => {
      if (name === 'dispatch') {
        const method = target[name];

        return function dispatch(...args) {
          const [action] = args;
          const { payload, meta, error } = action;

          console.info(`%c Dispatch ${action.type}:`, 'background: #222; color: #BADA55');
          console.info({ payload, meta, error });

          method.apply(this, args);
        };
      }

      if (name === Symbol.for('@@update-state')) {
        const method = target[name];

        return function updateState(...args) {
          const prevState = target.getState();
          console.info('%c Prev state:', 'background: #5882FA; color: #FFFFFF');
          console.info(prevState);

          method.apply(this, args);

          const nextState = target.getState();
          console.info('%c Next state:', 'background: #5882FA; color: #FFFFFF');
          console.info(nextState);
        };
      }

      return Reflect.get(target, name, thisArg);
    }
  });
}
