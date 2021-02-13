import styled from 'styled-components';
import Box from './Box';

const Tag = styled(Box)``;

Tag.propTypes = Box.propTypes;

Tag.defaultProps = {
  color: 'red'
};

export default Tag;
