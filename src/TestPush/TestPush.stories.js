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

export default {
  title: 'TestPush',
  component: TestPush
};

export function Default() {
  const [activeMenu, setActiveMenu] = useState('main');

  return (
    <TestPush>
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
  );
}
