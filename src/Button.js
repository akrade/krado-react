import styled from 'styled-components';
import { variant, buttonStyle } from 'styled-system';
import Box from './Box';
import themeGet from '@styled-system/theme-get';

const Button = styled(Box)`
  border: none;
  outline: none;
  transition: box-shadow ${(props) => props.transitionEase},
    transform ${(props) => props.transitionEase},
    border ${(props) => props.transitionEase},
    background ${(props) => props.transitionEase},
    color ${(props) => props.transitionEase};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${themeGet('shadows.3')};
    cursor: pointer;
  }

  ${buttonStyle}
  ${variant({
    prop: 'buttonSize',
    key: 'buttonSizes'
  })}
  ${variant({
    prop: 'buttonShape',
    key: 'buttonShapes'
  })}
`;

Button.propTypes = Box.propTypes;

Button.defaultProps = {
  as: 'button',
  type: 'button',
  variant: 'primary',
  buttonSize: 'large',
  buttonShape: 'round',
  transitionEase: '325ms ease',
  margin: 2,
  fontSize: 2,
  fontWeight: 'bold'
};

export default Button;
