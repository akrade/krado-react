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
      },
      outline: {
        color: 'primary',
        backgroundColor: 'transparent',
        border: 1,
        borderColor: 'primary'
      }
    },
    prop: 'tagType'
  })}
`;

Tag.propTypes = Box.propTypes;

Tag.defaultProps = {
  tagType: 'outline',
  px: '1rem',
  py: '0.4rem',
  fontWeight: 'bold',
  borderRadius: 2
};

export default Tag;
