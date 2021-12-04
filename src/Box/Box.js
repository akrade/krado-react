import React from 'react';
import { Box as ThemeUiBox } from 'theme-ui';

export default function Box({ ...rest }) {
  return <ThemeUiBox {...rest} />;
}
