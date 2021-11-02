import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MdChevronRight } from 'react-icons/md';
import TestPush, {
  TestPushContent,
  TestPushHeader,
  TestPushItem
} from './TestPush';

export default {
  title: 'TestPush',
  component: TestPush
};

export function Default() {
  const [activeMenu, setActiveMenu] = useState('mobile');

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
            <TestPushItem href="#" icon={<MdChevronRight />}>
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
    </TestPush>
  );
}
