import React from 'react';
import styles from './styles.scss';

/**
 * Class represents Layout Component
 * @extends {React.PureComponent}
 */
class Layout extends React.PureComponent {

  /**
   * Renders the component
   * @returns {String} HTML for the component
   */
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentLayoutContainer} >
          <div className={styles.contentContainer}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

/**
 * @prop {Object} propTypes - The props that are passed to this component
 * @prop {Array} propTypes.children - Child nodes of this component
 */
Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.element)
  ])
};

export default Layout;
