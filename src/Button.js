import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';
import themeGet from '@styled-system/theme-get';

const Button = styled(Box)`
  border: none;
  outline: none;
  transition: box-shadow ${(props) => props.transitionEase},
    transform ${(props) => props.transitionEase},
    border ${(props) => props.transitionEase},
    background ${(props) => props.transitionEase};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${themeGet('shadows.3')};
    cursor: pointer;
  }

  ${variant({
    variants: {
      solid: {
        color: 'background',
        backgroundColor: 'black',
        '&:active, &:focus': {
          backgroundColor: 'darkGray'
        }
      },
      outline: {
        color: 'text',
        backgroundColor: 'transparent',
        border: 1,
        '&:hover': {
          color: 'text',
          backgroundColor: 'white',
          borderColor: 'white'
        },
        '&:active, &:focus': {
          backgroundColor: 'muted',
          borderColor: 'muted'
        }
      },
      clear: {
        backgroundColor: 'transparent'
      }
    },
    prop: 'buttonType'
  })};
  ${variant({
    variants: {
      small: { px: 4, py: 2 },
      large: { px: 5, py: 3 }
    },
    prop: 'buttonSize'
  })};
  ${variant({
    variants: {
      square: { borderRadius: 0 },
      round: { borderRadius: 1 },
      pill: { borderRadius: 'round' }
    },
    prop: 'buttonShape'
  })};
`;

Button.propTypes = Box.propTypes;

Button.defaultProps = {
  as: 'button',
  type: 'button',
  buttonType: 'solid',
  buttonSize: 'large',
  buttonShape: 'round',
  margin: 2,
  fontSize: 2,
  fontWeight: 'bold',
  transitionEase: '325ms ease'
};

export default Button;
