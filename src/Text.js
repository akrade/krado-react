import styled from 'styled-components';
import { variant, typography, color } from 'styled-system';
import Box from './Box';

const variants = {
  body: {
    fontSize: 3,
    fontWeight: 'body'
  },
  smallBody: {
    fontSize: 1,
    fontWeight: 'body'
  },
  bold: {
    fontSize: 4,
    fontWeight: 'bold'
  },
  callout: {
    fontSize: 2
  },
  caption: {
    fontSize: 1
  },
  footnote: {
    fontSize: 0,
    fontWeight: 600
  },
  pretext: {
    color: 'darkGray',
    textTransform: 'uppercase',
    fontSize: 1,
    fontWeight: 800,
    letterSpacing: 'pretext'
  }
};

const Text = styled(Box)`
  ${variant({
    variants
  })}
  ${typography}
  ${color}
`;

Text.propTypes = Box.propTypes;

Text.defaultProps = {
  variant: 'body',
  color: 'text',
  fontFamily: 'body'
};

export default Text;
