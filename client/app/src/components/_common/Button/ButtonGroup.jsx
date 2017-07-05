import React from 'react';
import styles from './styles.scss';

const ButtonGroup = ({ children }) => (
  <div className={styles.buttonGroup}>{children}</div>
);

ButtonGroup.propTypes = {
  children: React.PropTypes.node
};

export default ButtonGroup;
