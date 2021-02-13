import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';

const variants = {
  color: 'red'
};

const Tag = styled(Box)`
  ${variant({
    variants
  })}
`;

Tag.propTypes = Box.propTypes;

Tag.defaultProps = {};

export default Tag;
