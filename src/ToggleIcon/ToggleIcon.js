import React from 'react';
import { IconButton as ThemeUiIconButton } from 'theme-ui';

export default function ToggleIcon({ ...rest }) {
  return (
    <ThemeUiIconButton
      sx={{
        width: '32px',
        height: '32px',
        cursor: 'pointer',
        borderRadius: 2,
        transition: '325ms ease',
        '&:hover': {
          transformOrigin: 'left bottom -50px',
          transform: 'scale(1.1)',
          width: '36px',
          height: '36px'
        },
        '&:focus-visible': {
          boxShadow: 'onFocus',
          outline: 'none'
        },
        '&:disabled': {
          cursor: 'auto'
        }
      }}
      {...rest}
    />
  );
}
