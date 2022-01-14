import { Footer, FooterFootnote, FooterContent, FooterItem } from './Footer';
import Flex from '../Flex/Flex';

export default {
  title: 'Footer',
  component: Footer
};

export const Default = () => (
  <Flex sx={{ flexDirection: 'column', height: '100vh' }}>
    <Footer>
      <FooterFootnote>
        2021 Akrade, LLC. An Akrade & Company. All Rights Reserved.
      </FooterFootnote>
      <FooterContent>
        <FooterItem href="#">Terms of Use</FooterItem>
        <FooterItem href="#">Akrade Privacy Policy</FooterItem>
      </FooterContent>
    </Footer>
  </Flex>
);
