import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';

const Button = styled(Box)`
  border: none;
  outline: none;
  ${variant({
    variants: {
      solid: {
        color: 'background',
        backgroundColor: 'black'
      },
      outline: {
        color: 'text',
        backgroundColor: 'transparent',
        border: 1
      }
    },
    prop: 'type'
  })};
  ${variant({
    variants: {
      small: { px: 4, py: 2 },
      large: { px: 5, py: 3 }
    },
    prop: 'body'
  })};
  ${variant({
    variants: {
      square: { borderRadius: 0 },
      round: { borderRadius: 1 },
      pill: { borderRadius: 'round' }
    },
    prop: 'shape'
  })};
`;

Button.propTypes = Box.propTypes;

Button.defaultProps = {
  as: 'button',
  type: 'solid',
  body: 'large',
  shape: 'round',
  margin: 2,
  fontWeight: 'bold'
};

export default Button;
