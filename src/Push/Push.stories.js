import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Push,
  PushBody,
  PushContent,
  PushDivider,
  PushHeader,
  PushItem,
  PushLabel,
  PushSubItem
} from './Push';
import Text from '../Text/Text';
import Box from '../Box/Box';
import { MdLaunch, MdLink, MdExpandMore } from 'react-icons/md';
import Container from '../Container/Container';

export default {
  title: 'Push',
  component: Push
};

export function Default() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <PushBody isOpen={isOpen}>
      <Push isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} behavior="ghost">
        <AnimatePresence exitBeforeEnter>
          {activeMenu === 'main' && (
            <PushContent key="main">
              <PushLabel>Overview</PushLabel>
              <PushItem label="Getting Started" />
              <PushItem label="About" />
              <PushItem label="Support" />
              <PushDivider />
              <PushLabel>Foundation</PushLabel>
              <PushItem label="Identity" />
              <PushItem label="Accessibility" />
              <PushLabel>Web & App</PushLabel>
              <PushItem label="Desktop" />
              <PushItem label="Web" />
              <PushItem label="Tablet" />
              <PushItem
                label="Mobile"
                onClick={() => setActiveMenu('mobile')}
              />
              <PushItem label="Wearables" />
              <PushItem label="Print" />
              <PushDivider />
              <PushLabel>Virtual</PushLabel>
              <PushItem label="Virtual Reality" />
              <PushItem label="Augmented Reality" />
              <PushItem label="Games" />
              <PushDivider />
              <PushLabel>Broadcast</PushLabel>
              <PushItem label="Television" />
              <PushItem label="Video" />
              <PushItem label="Voice" />
              <PushLabel>Graphics</PushLabel>
              <PushItem label="Print" />
              <PushItem label="Outdoor" />
              <PushDivider />
              <PushItem href="#" icon={<MdLink />} label="Internal Link" />
              <PushItem
                href="https://example.com"
                target="_blank"
                rel="noopener"
                icon={<MdLaunch />}
                label="External Link"
              />
            </PushContent>
          )}

          {activeMenu === 'mobile' && (
            <PushContent level={200} key="mobile">
              <PushHeader
                onClick={() => setActiveMenu('main')}
                description="The fundemental building blocks of the design system."
              >
                Mobile
              </PushHeader>
              <PushDivider />
              <PushItem onClick={() => setActiveMenu('core')} label="Core" />
              <PushItem label="Advertising" />
              <PushItem label="Chat" />
              <PushItem label="Email" />
              <PushItem label="Food" />
              <PushItem label="Publish" />
              <PushItem label="Shop" />
              <PushItem label="Social Media" />
              <PushItem label="Survey" />
              <PushItem label="Security" />
            </PushContent>
          )}

          {activeMenu === 'core' && (
            <PushContent level={200} key="core">
              <PushHeader
                onClick={() => setActiveMenu('mobile')}
                description="The fundemental building blocks of the design system."
              >
                Core
              </PushHeader>
              <PushDivider />
              <PushLabel>Global</PushLabel>
              <PushItem label="iOS" icon={<MdExpandMore />}>
                <PushSubItem>Keyboards</PushSubItem>
                <PushSubItem>Alerts</PushSubItem>
                <PushSubItem>Pickers</PushSubItem>
                <PushSubItem>Notifications</PushSubItem>
                <PushSubItem>Lockscreens</PushSubItem>
                <PushSubItem>Edit Menus</PushSubItem>
                <PushSubItem>Devices</PushSubItem>
              </PushItem>
              <PushItem label="Grids" />
              <PushItem label="Header" />
              <PushItem
                label="Footer"
                description="The fundemental building blocks of the design system."
              />
              <PushItem label="Search" />
              <PushDivider />
              <PushLabel>Style</PushLabel>
              <PushItem label="Icons" />
              <PushItem label="Illustrations" />
              <PushItem label="Spacing" />
              <PushItem label="Typography" />
            </PushContent>
          )}
        </AnimatePresence>
      </Push>

      <Container sx={{ height: '100000px' }}>
        <button onClick={() => setIsOpen(!isOpen)}>Open/close</button>
        <Box sx={{ width: '100%', height: '50px', backgroundColor: 'red' }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies
          tellus etiam, posuere ornare platea sollicitudin netus nostra eget
          quisque odio proin, maecenas sapien congue natoque eros vel nibh
          fermentum tortor. Quam nisl commodo curae orci class dapibus ante
          cubilia, bibendum purus torquent lectus cursus nulla luctus,
          sollicitudin vel id posuere nisi varius senectus. Dapibus ultrices
          sociis platea habitasse dictumst posuere taciti nibh ante, pulvinar
          ligula lacinia ridiculus enim aliquet interdum laoreet quam imperdiet,
          turpis gravida convallis ut id rutrum aliquam justo. Lectus integer
          etiam posuere eu cubilia arcu tristique, neque porttitor in mattis ac
          ultricies, lacinia consequat laoreet viverra duis nisl. Tristique
          facilisis aliquet feugiat ac platea gravida natoque, habitant
          suspendisse nibh montes iaculis vehicula, semper rhoncus metus vel nec
          fames. Euismod a cras fringilla vivamus, odio pulvinar nostra.
        </Text>
      </Container>
    </PushBody>
  );
}
