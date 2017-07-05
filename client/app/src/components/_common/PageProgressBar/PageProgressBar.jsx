import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import cx from 'classnames';

/**
 * StatelessFunctional renders PageProgressBar
 * @param {Object} theme - Theme for the component
 * @param {Boolean} isActive - Status of the component
 * @constructor
 */
const PageProgressBar = ({ theme, isActive }) => (
  <div className={cx(theme.loaderOverlay, { [theme.active]: isActive })}>
    <ProgressBar type="circular" mode="indeterminate" theme={theme} />
  </div>
);

/**
 * @prop {Object} propTypes - Properties of the component
 * @prop {Boolean} propTypes.isActive - Status of the component
 */
PageProgressBar.propTypes = {
  isActive: React.PropTypes.bool,
  theme: React.PropTypes.shape({
    active: React.PropTypes.string,
    loaderOverlay: React.PropTypes.string
  })
};

PageProgressBar.defaultProps = {
  isActive: false
};

export default PageProgressBar;
