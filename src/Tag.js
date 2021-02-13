import styled from 'styled-components';
import { variant } from 'styled-system';
import Box from './Box';

const Tag = styled(Box)`
  ${variant({
    variants: {
      solid: {
        color: 'primary',
        backgroundColor: 'white',
        boxShadow: 2
      }
    },
    prop: 'tagType'
  })}
`;

Tag.propTypes = Box.propTypes;

Tag.defaultProps = {
  tagType: 'solid'
};

export default Tag;
