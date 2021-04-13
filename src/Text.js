import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';
import propTypes from '@styled-system/prop-types';

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
`;

Text.propTypes = Box.propTypes;

Text.defaultProps = {
  color: 'text',
  fontFamily: 'body',
  variant: 'body'
};

export default Text;
