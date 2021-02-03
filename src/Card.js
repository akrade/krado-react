import styled from 'styled-components';
import Box from './Box';

const Card = styled(Box)``;

Card.propTypes = Box.propTypes;

Card.defaultProps = {
  padding: 5,
  borderRadius: 3,
  backgroundColor: 'muted'
};

export default Card;
