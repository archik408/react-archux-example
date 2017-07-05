import React from 'react';

/**
 * Store react type
 */
export const shape = React.PropTypes.shape({
  subscribe: React.PropTypes.func.isRequired,
  unsubscribe: React.PropTypes.func.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  getState: React.PropTypes.func.isRequired
});

/**
 * Store Provider Component
 * @extends {React.Component}
 */
class Provider extends React.Component {
  /**
   * @constructor
   * @param {Object} props - Properties
   * @param {Object} context - Application context
   */
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }

  /**
   * Return application context that provide
   * store instance
   *
   * @returns {Object} Application context
   */
  getChildContext() {
    return { store: this.store };
  }

  /**
   * Render component children
   * @returns {XML} Component markup
   */
  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}

Provider.propTypes = {
  store: shape.isRequired,
  children: React.PropTypes.element.isRequired
};

Provider.childContextTypes = {
  store: shape.isRequired
};

export default Provider;
