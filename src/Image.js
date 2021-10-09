import Box from './Box/Box';
import styled from 'styled-components';
import { background } from 'styled-system';

const Image = styled(Box)`
  max-width: 100%;
  height: auto;

  ${background}
`;

Image.propTypes = Box.propTypes;

Image.defaultProps = {
  as: 'img',
  boxShadow: 2
};

export default Image;
