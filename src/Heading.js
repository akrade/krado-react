import React from 'react';
import styled from 'styled-components';
import { variant, color, space } from 'styled-system';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import Text from './Text';

const variants = {
  1: {
    fontSize: 8
  },
  // Heading
  2: {
    fontSize: 7
  },
  3: {
    fontSize: 6
  },
  4: {
    fontSize: 3,
    fontWeight: 600
  },
  5: {
    fontSize: 2,
    fontWeight: 600
  },
  6: {
    fontSize: 1,
    fontWeight: 600
  }
};

const BaseHeading = ({ level, as: Component = Text, ...props }) => (
  <Component {...props} />
);

const Heading = styled(BaseHeading)(
  {
    margin: 0,
    lineHeight: 'heading'
  },
  variant({
    variants,
    prop: 'level'
  }),
  color,
  space
);

Heading.propTypes = {
  ...propTypes.color,
  ...propTypes.space,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node
};

export default Heading;
