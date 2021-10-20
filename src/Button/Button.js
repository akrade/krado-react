import React from 'react';
import { Button as ThemeUiButton } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Button({ size, ...rest }) {
  return (
    <ThemeUiButton
      sx={{
        fontWeight: 600,
        borderRadius: 1,
        transition: 'all 200ms ease',
        cursor: 'pointer',
        variant: `buttons.sizes.${size}`,
        '&:disabled': {
          cursor: 'auto'
        }
      }}
      {...rest}
    />
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'text', 'ghost']),
  size: PropTypes.oneOf(['small', 'large']),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  variant: 'primary',
  size: 'large',
  disabled: false
};
