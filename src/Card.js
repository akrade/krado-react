import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Box from './Box';

const Card = styled(Box)`
  width: 100%;
  height: 100%;
  transition: box-shadow ${(props) => props.shadowTransition},
    transform ${(props) => props.scaleTransition};

  ${(props) =>
    props.hoverAnimation &&
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
  hoverAnimation: true,
  boxShadowHover: '0 11px 27px -6px rgba(0, 0, 0, 0.39)',
  scaleHover: 1.05,
  shadowTransition: '325ms ease',
  scaleTransition: '300ms ease'
};

export default Card;
