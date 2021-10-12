import React from 'react';
import { Button as ThemeUiButton } from 'theme-ui';

export default function Button({ size = 'large', ...rest }) {
  return (
    <ThemeUiButton
      sx={{
        fontWeight: 600,
        borderRadius: 1,
        transition: 'all 200ms ease',
        variant: `buttonSizes.${size}`
      }}
      {...rest}
    />
  );
}
