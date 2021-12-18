import { Button as ThemeUiButton } from 'theme-ui';
import Box from '../Box/Box';
import PropTypes from 'prop-types';

function ButtonIcon({ ...rest }) {
  return (
    <Box
      as="span"
      sx={{
        display: 'inline-flex',
        alignSelf: 'center',
        flexShrink: 0
      }}
      {...rest}
    />
  );
}

export default function Button({
  size,
  leftIcon,
  rightIcon,
  iconSpacing,
  children,
  ...rest
}) {
  return (
    <ThemeUiButton
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    >
      {leftIcon && (
        <ButtonIcon marginRight={iconSpacing}>{leftIcon}</ButtonIcon>
      )}
      {children}
      {rightIcon && (
        <ButtonIcon marginLeft={iconSpacing}>{rightIcon}</ButtonIcon>
      )}
    </ThemeUiButton>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['solid', 'text', 'ghost']),
  size: PropTypes.oneOf(['small', 'large']),
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  iconSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  variant: 'solid',
  size: 'large',
  iconSpacing: '6px',
  disabled: false
};
