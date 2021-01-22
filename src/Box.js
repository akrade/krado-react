import styled from 'styled-components';
import { space, layout, color, border, flexbox, grid } from 'styled-system';
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
  grid
);

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.grid
};

export default Box;
