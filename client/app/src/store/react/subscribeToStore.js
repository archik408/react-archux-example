/* eslint no-console: ["error", { allow: ["error"] }] */
import React from 'react';
import isEqual from 'lodash.isequal';
import hoistStatics from 'hoist-non-react-statics';
import { shape } from './Provider';

/**
 * High-Order Component which add store dependency to
 * wrapped component and subscribe it for updates
 *
 * @param {React.Component} WrappedComponent - Web component
 * @param {Function} mapStateToProps - Store listener
 * @returns {React.Component} Subscribed web component
 */
export default function subscribeToStore(WrappedComponent, mapStateToProps = () => ({})) {
  /**
   * SubscribedComponent (HoC)
   * @extends {React.Component}
   */
  class SubscribedComponent extends React.Component {

    /**
     * @constructor
     * @param {Object} props - Component properties
     * @param {Object} context - Application context
     */
    constructor(props, context) {
      super(props, context);
      this.store = props.store || context.store;
      this.state = { storeState: {} };
      this.clearCache();
      this.handleChange = this.handleChange.bind(this);
    }

    /**
     * If still not subscribed then
     * will subscribe for store updates
     *
     * @returns {void}
     */
    componentWillMount() {
      if (!this.isSubscribed) {
        this.store.subscribe(this.handleChange);
        this.isSubscribed = true;
        this.handleChange();
      }
    }

    /**
     * Set flag that properties was changed
     *
     * @param {Object} nextProps - New component properties
     * @returns {void}
     */
    componentWillReceiveProps(nextProps) {
      if (!isEqual(nextProps, this.props)) {
        this.hasOwnPropsChanged = true;
      }
    }

    /**
     * Verify changed flags
     *
     * @returns {Boolean} Should update
     */
    shouldComponentUpdate() {
      return this.hasOwnPropsChanged || this.hasStoreStateChanged;
    }

    /**
     * Unsubscribe from store updates
     * and clear component cache
     *
     * @returns {void}
     */
    componentWillUnmount() {
      if (this.isSubscribed) {
        this.store.unsubscribe(this.handleChange);
        this.isSubscribed = false;
      }
      this.clearCache();
    }

    /**
     * Wrapped component instance
     *
     * @returns {*} instance
     */
    getWrappedInstance() {
      return this.refs.wrappedInstance;
    }

    /**
     * Set default values to
     * object properties
     *
     * @returns {void}
     */
    clearCache() {
      this.stateProps = {};
      this.mergedProps = {};
      this.hasOwnPropsChanged = true;
      this.hasStoreStateChanged = true;
      this.statePropsError = null;
      this.renderedElement = null;
    }

    /**
     * Handle store changes and
     * update component state properties if needed
     *
     * @returns {void}
     */
    handleChange() {
      if (!this.isSubscribed) {
        return;
      }

      const nextStoreState = this.store.getState();
      const prevStoreState = this.state.storeState;
      if (prevStoreState === nextStoreState) {
        return;
      }

      try {
        this.updateStatePropsIfNeeded();
      } catch (error) {
        console.error(error);
        this.statePropsError = error;
      }
    }

    /**
     * Apply store listener, verify new state properties
     * and keep it in local state
     *
     * @returns {void}
     */
    updateStatePropsIfNeeded() {
      const storeState = this.store.getState();
      const nextStateProps = mapStateToProps(storeState);

      if (this.stateProps && isEqual(nextStateProps, this.stateProps)) {
        return;
      }

      this.stateProps = nextStateProps;
      this.hasStoreStateChanged = true;
      this.setState({ storeState });
    }

    /**
     * Render component
     *
     * @returns {*} Markup for the component
     */
    render() {
      const {
        hasOwnPropsChanged,
        hasStoreStateChanged,
        statePropsError,
        renderedElement
      } = this;

      this.hasOwnPropsChanged = false;
      this.hasStoreStateChanged = false;
      this.statePropsError = null;

      if (statePropsError) {
        throw statePropsError;
      }

      if (hasStoreStateChanged || hasOwnPropsChanged) {
        this.mergedProps = {
          ...this.props,
          ...this.stateProps
        };
      } else if (renderedElement) {
        return renderedElement;
      }

      this.renderedElement = React.createElement(WrappedComponent, {
        ...this.mergedProps,
        ref: 'wrappedInstance'
      });

      return this.renderedElement;
    }
  }

  const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  SubscribedComponent.displayName = `Subscribed(${name})`;

  SubscribedComponent.WrappedComponent = WrappedComponent;

  SubscribedComponent.contextTypes = { store: shape };

  SubscribedComponent.propTypes = { store: shape };

  return hoistStatics(SubscribedComponent, WrappedComponent);
}
