import React from 'react';
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
    backgroundColor="lightGray"
    sx={{ justifyContent: 'center', borderRadius: 1 }}
  >
    <ToggleIcon>
      <MdFavorite />
    </ToggleIcon>
  </Flex>
);
