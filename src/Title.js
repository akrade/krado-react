import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';

const variants = {
  display: {
    fontSize: 11
  },
  extraLarge: {
    fontSize: 10
  },
  large: {
    fontSize: 9
  },
  title: {
    fontSize: 8
  },
  subtitle: {
    fontSize: 7
  },
  quote: {
    fontSize: 6,
    fontStyle: 'italic'
  },
  extraSmall: {
    fontSize: 6,
    fontWeight: 500
  }
};

const Title = styled(Box)`
  ${variant({
    variants
  })}
`;

Title.propTypes = Box.propTypes;

Title.defaultProps = {
  variant: 'title',
  fontWeight: 400,
  fontFamily: 'display',
  letterSpacing: 'display',
  marginBottom: 3
};

export default Title;
