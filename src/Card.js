import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Box from './Box';

const Card = styled(Box)`
  width: 100%;
  height: 100%;
  transition: box-shadow ${(props) => props.transition},
    transform ${(props) => props.transition};

  ${(props) =>
    props.enableHoverAnimation &&
    css`
      &:hover {
        box-shadow: ${(props) => props.boxShadowHover};
        transform: scale(${(props) => props.scaleHover});
      }
    `}
`;

Card.propTypes = {
  ...Box.propTypes,
  hoverAnimation: PropTypes.bool,
  boxShadowHover: PropTypes.string,
  scaleHover: PropTypes.number
};

Card.defaultProps = {
  padding: 5,
  borderRadius: 3,
  backgroundColor: 'background',
  boxShadow: 2,
  enableHoverAnimation: true,
  boxShadowHover: '0 11px 27px -6px rgba(0, 0, 0, 0.39)',
  scaleHover: 1.02,
  transition: '325ms ease'
};

export default Card;
