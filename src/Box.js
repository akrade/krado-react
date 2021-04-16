import styled from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  flexbox,
  grid,
  typography,
  position,
  shadow,
  variant,
  system
} from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled.div`
  box-sizing: 'border-box';
  margin: 0;
  min-width: 0;

  ${space}
  ${layout}
  ${color}
  ${border}
  ${flexbox}
  ${grid}
  ${typography}
  ${position}
  ${shadow}

  ${variant({
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
  })}

  ${system({
    perspective: true
  })}
`;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.typography,
  ...propTypes.shadow
};

export default Box;
