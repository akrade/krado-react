import React from 'react';
import { IconButton as ThemeUiIconButton } from 'theme-ui';

export default function ToggleIcon({ ...rest }) {
  return (
    <ThemeUiIconButton
      sx={{
        cursor: 'pointer',
        '&:disabled': {
          cursor: 'auto'
        }
      }}
      {...rest}
    />
  );
}
