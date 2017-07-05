import React from 'react';
import styles from './styles.scss';
import { Layout } from '../components';

 /**
 * Class represents Main Application Container
 * @extends {React.Component}
 */
class App extends React.Component {

  /**
   * Renders the component
   *
   * @returns {String} HTML for the component
   */
  render() {
    const { children } = this.props;

    return (
      <div className={styles.wrapper} >
        <Layout>
          {children}
        </Layout>
      </div>
    );
  }
}

/**
 * @prop {Object} propTypes - The props that are passed to this component
 * @prop {Array} propTypes.children - Child nodes of this component
 */
App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.element)
  ])
};

export default App;
