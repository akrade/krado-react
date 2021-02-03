import styled from 'styled-components';
import Box from './Box';

const Card = styled(Box)`
  transition: box-shadow 325ms ease, transform 300ms ease;

  &:hover {
    box-shadow: 0 11px 27px -6px rgba(0, 0, 0, 0.39);
    /* transform: translate3d(0px, 0px, 48px); */
  }
`;

Card.propTypes = Box.propTypes;

Card.defaultProps = {
  padding: 5,
  borderRadius: 3,
  backgroundColor: 'background',
  boxShadow: 2
};

export default Card;
