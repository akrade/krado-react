import React from 'react';
import { Button as ThemeUiButton } from 'theme-ui';

export default function Button({ size = 'large', ...rest }) {
  return (
    <ThemeUiButton
      sx={{
        fontWeight: 600,
        paddingX: '55px',
        paddingY: '20px',
        borderRadius: 1,
        transition: 'all 1000ms ease',
        variant: `buttonSize.large`
      }}
      {...rest}
    />
  );
}
