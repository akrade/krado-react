import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';

const Button = styled(Box)`
  border: none;
  outline: none;
  transition: box-shadow ${(props) => props.shadowTransition},
    transform ${(props) => props.scaleTransition};
  ${variant({
    variants: {
      solid: {
        color: 'background',
        backgroundColor: 'black',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: 3
        }
      },
      outline: {
        color: 'text',
        backgroundColor: 'transparent',
        border: 1
      },
      clear: {
        backgroundColor: 'transparent'
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
  fontSize: 2,
  fontWeight: 'bold',
  shadowTransition: '325ms ease',
  scaleTransition: '300ms ease'
};

export default Button;
