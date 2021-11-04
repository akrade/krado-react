import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MdChevronRight } from 'react-icons/md';
import TestPush, {
  TestPushContent,
  TestPushDivider,
  TestPushHeader,
  TestPushItem,
  TestPushSecondaryHeader
} from './TestPush';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Box from '../Box/Box';

export default {
  title: 'TestPush',
  component: TestPush
};

export function Default() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <Flex>
      <TestPush isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <AnimatePresence>
          {activeMenu === 'main' && (
            <TestPushContent>
              <TestPushItem href="#" icon={<MdChevronRight />}>
                Identity
              </TestPushItem>
              <TestPushItem href="#">Desktop</TestPushItem>
              <TestPushItem href="#">Web</TestPushItem>
              <TestPushItem onClick={() => setActiveMenu('mobile')}>
                Mobile
              </TestPushItem>
              <TestPushItem href="#">Tablet</TestPushItem>
              <TestPushItem href="#">Print</TestPushItem>
              <TestPushItem href="#">Television</TestPushItem>
              <TestPushItem href="#">Voice</TestPushItem>
              <TestPushItem href="#">VR/AR</TestPushItem>
              <TestPushItem href="#">Wearables</TestPushItem>
            </TestPushContent>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeMenu === 'mobile' && (
            <TestPushContent level={200}>
              <TestPushHeader onClick={() => setActiveMenu('main')}>
                Mobile
              </TestPushHeader>
              <TestPushItem
                onClick={() => setActiveMenu('core')}
                icon={<MdChevronRight />}
              >
                Core
              </TestPushItem>
              <TestPushItem href="#">Advertising</TestPushItem>
              <TestPushItem href="#">Chat</TestPushItem>
              <TestPushItem href="#">Email</TestPushItem>
              <TestPushItem href="#">Food</TestPushItem>
              <TestPushItem href="#">Publish</TestPushItem>
              <TestPushItem href="#">Shop</TestPushItem>
              <TestPushItem href="#">Social Media</TestPushItem>
              <TestPushItem href="#">Survey</TestPushItem>
              <TestPushItem href="#">Security</TestPushItem>
            </TestPushContent>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeMenu === 'core' && (
            <TestPushContent level={200}>
              <TestPushHeader onClick={() => setActiveMenu('mobile')}>
                iOS
              </TestPushHeader>
              <TestPushDivider />
              <TestPushSecondaryHeader>Global</TestPushSecondaryHeader>
              <TestPushItem href="#" icon={<MdChevronRight />}>
                Grids
              </TestPushItem>
              <TestPushItem href="#">Header</TestPushItem>
              <TestPushItem href="#">Footer</TestPushItem>
              <TestPushItem href="#">Search</TestPushItem>
              <TestPushDivider />
              <TestPushSecondaryHeader>Style</TestPushSecondaryHeader>
              <TestPushItem href="#" icon={<MdChevronRight />}>
                Icons
              </TestPushItem>
              <TestPushItem href="#">Illustrations</TestPushItem>
              <TestPushItem href="#">Spacing</TestPushItem>
              <TestPushItem href="#">Typography</TestPushItem>
            </TestPushContent>
          )}
        </AnimatePresence>
      </TestPush>

      <Box paddingX={6}>
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
          fames. Euismod a cras fringilla vivamus, odio pulvinar nostra. Et
          aliquet varius euismod nam rutrum taciti fusce quam pharetra, sed
          blandit mus congue magna per ut urna ante sociis, bibendum nisl sem
          aenean aliquam laoreet tincidunt aptent. Porta vestibulum nunc iaculis
          etiam elementum nisi curae cubilia vel fermentum cras a quisque massa
          luctus, dignissim lectus eget litora orci pretium aenean montes ligula
          fames augue gravida laoreet. Urna aliquet ultrices magnis eget
          phasellus laoreet ante cras malesuada dui purus eu mollis, odio
          praesent facilisis eleifend senectus in egestas tortor est augue
          ultricies habitant. Luctus suscipit iaculis posuere diam ligula vel
          orci condimentum faucibus, etiam commodo facilisis tellus euismod
          pulvinar facilisi natoque, odio imperdiet himenaeos sapien convallis
          sodales tempus accumsan. Vehicula posuere placerat in lacinia, ac
          tincidunt. Suspendisse malesuada dictumst risus posuere felis leo
          enim, venenatis mollis aliquam ac at hendrerit, sagittis primis magna
          egestas neque pharetra. Et at ultricies in nam nibh, malesuada nunc
          dignissim litora, dapibus lectus mauris montes. Nulla magna euismod at
          aenean suscipit mi mollis, duis id dictumst potenti nisi malesuada,
          urna nam varius est lectus a. Nascetur magna fusce molestie malesuada
          natoque elementum, mi sem cum nibh venenatis, congue tristique iaculis
          at euismod. Porta gravida velit nascetur tristique fusce est felis,
          tincidunt placerat vivamus turpis eleifend faucibus aliquet semper,
          cubilia tellus proin facilisi urna vehicula. Ultricies dictumst
          aliquet imperdiet tellus nunc vehicula, dictum posuere cras ultrices
          torquent. Ullamcorper libero eu semper vulputate malesuada in pharetra
          enim, consequat dapibus neque sodales eleifend blandit aenean turpis
          quam, venenatis donec potenti fermentum rhoncus dis risus. Torquent
          bibendum lacus sociis fames interdum augue neque convallis mollis
          litora placerat tempor cursus ullamcorper ut, est per praesent morbi
          vulputate metus risus facilisis vestibulum nascetur auctor taciti
          tellus.
        </Text>
      </Box>
    </Flex>
  );
}
