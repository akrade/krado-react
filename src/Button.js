import styled, { css } from 'styled-components';
import { color, background, border, variant, buttonStyle } from 'styled-system';
import Box from './Box';
import themeGet from '@styled-system/theme-get';

const Button = styled(Box)`
  border: none;
  outline: none;
  text-decoration: none;
  transition: box-shadow ${(props) => props.transitionEase},
    transform ${(props) => props.transitionEase},
    border ${(props) => props.transitionEase},
    background ${(props) => props.transitionEase},
    color ${(props) => props.transitionEase};

  ${(props) =>
    props.enableHoverAnimation &&
    css`
      &:hover {
        transform: scale(1.1);
        box-shadow: ${themeGet('shadows.3')};
        cursor: pointer;
      }
    `};

  ${buttonStyle}
  ${variant({
    prop: 'buttonSize',
    key: 'buttonSizes'
  })}
  ${variant({
    prop: 'buttonShape',
    key: 'buttonShapes'
  })}
  ${color}
  ${background}
  ${border}
`;

Button.propTypes = Box.propTypes;

Button.defaultProps = {
  as: 'button',
  type: 'button',
  variant: 'primary',
  buttonSize: 'large',
  buttonShape: 'round',
  enableHoverAnimation: true,
  transitionEase: '325ms ease',
  fontWeight: 'bold'
};

export default Button;
