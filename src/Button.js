import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';
import themeGet from '@styled-system/theme-get';

const Button = styled(Box)`
  border: none;
  outline: none;
  transition: box-shadow ${(props) => props.transitionEase},
    transform ${(props) => props.transitionEase},
    border ${(props) => props.transitionEase};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${themeGet('shadows.3')};
  }

  ${variant({
    variants: {
      solid: {
        color: 'background',
        backgroundColor: 'black'
      },
      outline: {
        color: 'text',
        backgroundColor: 'transparent',
        border: 1,
        '&:hover': {
          color: 'text',
          backgroundColor: 'white',
          borderColor: 'white'
        }
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
  transitionEase: '325ms ease'
};

export default Button;
