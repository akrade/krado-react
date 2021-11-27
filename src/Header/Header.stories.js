import React, { useState } from 'react';
import { MdMenu, MdSearch } from 'react-icons/md';
import Box from '../Box/Box';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import {
  Header,
  HeaderAvatar,
  HeaderBody,
  HeaderItem,
  HeaderIconButton,
  HeaderNavigation,
  HeaderTitle
} from './Header';

export default {
  title: 'Header',
  component: Header
};

export function Default() {
  const [isMenuSmall, setIsMenuSmall] = useState(false);

  return (
    <Box sx={{ width: '100%', height: '100vw', backgroundColor: 'muted' }}>
      <Header isSmall={isMenuSmall}>
        <HeaderIconButton>
          <MdMenu />
        </HeaderIconButton>
        <HeaderTitle>Kràdoyé</HeaderTitle>
        <HeaderBody>
          <HeaderNavigation>
            <HeaderItem href="#">Home</HeaderItem>
            <HeaderItem href="#">Strategy</HeaderItem>
            <HeaderItem href="#">Design</HeaderItem>
            <HeaderItem href="#">About</HeaderItem>
            <HeaderItem href="#">Help</HeaderItem>
          </HeaderNavigation>
          <HeaderIconButton>
            <MdSearch />
          </HeaderIconButton>
          <HeaderAvatar />
        </HeaderBody>
      </Header>
      <ToggleIcon onClick={() => setIsMenuSmall(!isMenuSmall)} />
    </Box>
  );
}
