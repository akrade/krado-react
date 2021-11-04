import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Push, {
  PushContent,
  PushDivider,
  PushHeader,
  PushItem,
  PushLabel
} from './Push';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import Box from '../Box/Box';

export default {
  title: 'Push',
  component: Push
};

export function Default() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <Flex>
      <Push isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} behavior="ghost">
        <AnimatePresence>
          {activeMenu === 'main' && (
            <PushContent>
              <PushItem href="#">Identity</PushItem>
              <PushItem href="#">Desktop</PushItem>
              <PushItem href="#">Web</PushItem>
              <PushItem onClick={() => setActiveMenu('mobile')}>
                Mobile
              </PushItem>
              <PushItem href="#">Tablet</PushItem>
              <PushItem href="#">Print</PushItem>
              <PushItem href="#">Television</PushItem>
              <PushItem href="#">Voice</PushItem>
              <PushItem href="#">VR/AR</PushItem>
              <PushItem href="#">Wearables</PushItem>
            </PushContent>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeMenu === 'mobile' && (
            <PushContent level={200}>
              <PushHeader onClick={() => setActiveMenu('main')}>
                Mobile
              </PushHeader>
              <PushItem onClick={() => setActiveMenu('core')}>Core</PushItem>
              <PushItem href="#">Advertising</PushItem>
              <PushItem href="#">Chat</PushItem>
              <PushItem href="#">Email</PushItem>
              <PushItem href="#">Food</PushItem>
              <PushItem href="#">Publish</PushItem>
              <PushItem href="#">Shop</PushItem>
              <PushItem href="#">Social Media</PushItem>
              <PushItem href="#">Survey</PushItem>
              <PushItem href="#">Security</PushItem>
            </PushContent>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeMenu === 'core' && (
            <PushContent level={200}>
              <PushHeader onClick={() => setActiveMenu('mobile')}>
                iOS
              </PushHeader>
              <PushDivider />
              <PushLabel>Global</PushLabel>
              <PushItem href="#">Grids</PushItem>
              <PushItem href="#">Header</PushItem>
              <PushItem href="#">Footer</PushItem>
              <PushItem href="#">Search</PushItem>
              <PushDivider />
              <PushLabel>Style</PushLabel>
              <PushItem href="#">Icons</PushItem>
              <PushItem href="#">Illustrations</PushItem>
              <PushItem href="#">Spacing</PushItem>
              <PushItem href="#">Typography</PushItem>
            </PushContent>
          )}
        </AnimatePresence>
      </Push>

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
