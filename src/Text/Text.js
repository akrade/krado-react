import React from 'react';
import { Text as ThemeUiText } from 'theme-ui';

export default function Text({ ...rest }) {
  return <ThemeUiText {...rest} />;
}

Text.defaultProps = {
  variant: 'body.smallParagraph'
};
