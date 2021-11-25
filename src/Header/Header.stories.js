import React, { useState } from 'react';
import Box from '../Box/Box';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import {
  Header,
  HeaderAvatar,
  HeaderItem,
  HeaderMenuButton,
  HeaderNavigation,
  HeaderSearchButton,
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
        <HeaderMenuButton />
        <HeaderTitle>Kràdoyé</HeaderTitle>
        <HeaderNavigation>
          <HeaderItem href="#">Home</HeaderItem>
          <HeaderItem href="#">Strategy</HeaderItem>
          <HeaderItem href="#">Design</HeaderItem>
          <HeaderItem href="#">About</HeaderItem>
          <HeaderItem href="#">Help</HeaderItem>
        </HeaderNavigation>
        <HeaderSearchButton />
        <HeaderAvatar />
      </Header>
      <ToggleIcon onClick={() => setIsMenuSmall(!isMenuSmall)} />
    </Box>
  );
}
