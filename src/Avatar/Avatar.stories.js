import Avatar from './Avatar';
import Flex from '../Flex/Flex';

export default {
  title: 'Avatar',
  component: Avatar
};

export const Image = () => (
  <Avatar
    alt="Unsplash source"
    src="https://source.unsplash.com/random/42x42"
  />
);

export const Letter = () => (
  <Flex sx={{ alignItems: 'center', justifyContent: 'center', gap: 3 }}>
    <Avatar>A</Avatar>
    <Avatar>SU</Avatar>
  </Flex>
);
