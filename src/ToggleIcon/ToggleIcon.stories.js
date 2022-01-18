import ToggleIcon from './ToggleIcon';
import { MdFavorite } from 'react-icons/md';
import Flex from '../Flex/Flex';

export default {
  title: 'ToggleIcon',
  component: ToggleIcon
};

export const Basic = () => (
  <Flex
    padding={4}
    backgroundColor="surface.light"
    sx={{ justifyContent: 'center', borderRadius: 1 }}
  >
    <ToggleIcon>
      <MdFavorite />
    </ToggleIcon>
  </Flex>
);
