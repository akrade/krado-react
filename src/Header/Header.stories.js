import React from 'react';
import Box from '../Box/Box';
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

export const Default = () => (
  <Box sx={{ width: '100%', height: '100vw', backgroundColor: 'muted' }}>
    <Header>
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
  </Box>
);
