import styled from 'styled-components';
import Image from './Image';

const Avatar = styled(Image)``;

Avatar.defaultProps = {
  width: 42,
  height: 42,
  borderRadius: 'round',
  boxShadow: 0
};

export default Avatar;
