import React from 'react';
import { Heading as ThemeUiHeading } from 'theme-ui';

export default function Heading({ ...rest }) {
  return <ThemeUiHeading {...rest} />;
}

Heading.defaultProps = {
  variant: 'display.h2'
};
