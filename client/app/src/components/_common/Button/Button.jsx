import React from 'react';
import cx from 'classnames';

const Button = ({
  theme,
  className,
  title,
  progress,
  progressTitle,
  progressColor,
  type,
  disabled,
  variant,
  icon,
  onClick
}) => (
  <button
    className={
      cx(
        theme.button,
        [theme[variant]],
        { [theme.progressBtn]: progress },
        [className]: className
      )
    }
    type={type}
    disabled={progress || disabled}
    onClick={onClick}
  >
    {icon && (
      <i
        className={`material-icons ${theme.icon}`}
      >
        {icon}
      </i>
    )}
    <span className={theme.content}>
      {progress > 0 ? progressTitle : title}
    </span>
    <span
      className={
        cx(
          theme.progress,
          { [theme.showProgress]: progress }
        )
      }
    >
      <span
        style={{ background: progressColor }}
        className={theme.progressInner}
      />
    </span>
  </button>
);

Button.propTypes = {
  theme: React.PropTypes.object,
  className: React.PropTypes.string,
  type: React.PropTypes.oneOf(['button', 'submit']),
  disabled: React.PropTypes.bool,
  progress: React.PropTypes.bool,
  title: React.PropTypes.string.isRequired,
  progressTitle: React.PropTypes.string,
  progressColor: React.PropTypes.string,
  variant: React.PropTypes.oneOf(['primary', 'warning', 'danger', 'forbidden']),
  icon: React.PropTypes.string,
  onClick: React.PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  progress: false,
  progressTitle: 'loading...',
  progressColor: '#d6901e',
  variant: 'primary'
};

export default Button;
