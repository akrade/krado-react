import React from 'react';
import { Heading as ThemeUiHeading } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Heading({ ...rest }) {
  return <ThemeUiHeading {...rest} />;
}

Heading.propTypes = {
  variant: PropTypes.oneOf([
    'body.h1',
    'body.h2',
    'body.h3',
    'body.h4',
    'body.h5',
    'display.h1',
    'display.h2',
    'display.h3',
    'display.h4',
    'display.h5'
  ])
};

Heading.defaultProps = {
  variant: 'display.h2'
};
