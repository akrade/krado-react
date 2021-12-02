import ToggleIcon from './ToggleIcon';
import { Heart20Filled } from '@fluentui/react-icons';
import Flex from '../Flex/Flex';

export default {
  title: 'ToggleIcon',
  component: ToggleIcon
};

export const Basic = () => (
  <Flex
    padding={4}
    backgroundColor="lightGray"
    sx={{ justifyContent: 'center', borderRadius: 1 }}
  >
    <ToggleIcon>
      <Heart20Filled />
    </ToggleIcon>
  </Flex>
);
