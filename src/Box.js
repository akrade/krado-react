import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  flexbox,
  grid,
  typography,
  variant
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  space,
  layout,
  color,
  border,
  flexbox,
  grid,
  typography,

  variant({
    variants: {
      root: {
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'normal',
        color: 'text'
      },
      container: {
        mx: 'auto',
        px: [3, 4, 5],
        maxWidth: 'large'
      }
    }
  })
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.typography
};

export default Box;
