import React from 'react';
import { IconButton as ThemeUiIconButton } from 'theme-ui';

export default function ToggleIcon({ ...rest }) {
  return (
    <ThemeUiIconButton
      sx={{
        width: '32px',
        height: '32px',
        cursor: 'pointer',
        transition: '352ms ease',
        '&:hover': {
          transform: 'scale(1.1)'
        },
        '&:disabled': {
          cursor: 'auto'
        }
      }}
      {...rest}
    />
  );
}
