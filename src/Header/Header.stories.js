import { MdMenu, MdSearch } from 'react-icons/md';
import Box from '../Box/Box';
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

export function Default(args) {
  return (
    <Box sx={{ width: '100%', height: '100vw', backgroundColor: 'muted' }}>
      <Header {...args}>
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
    </Box>
  );
}
