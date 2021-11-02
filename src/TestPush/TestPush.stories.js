import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import TestPush, { TestPushItem } from './TestPush';

export default {
  title: 'TestPush',
  component: TestPush
};

export const Default = () => (
  <TestPush>
    <TestPushItem href="#" icon={<MdChevronRight />}>
      Identity
    </TestPushItem>
    <TestPushItem href="#">Desktop</TestPushItem>
    <TestPushItem href="#">Web</TestPushItem>
    <TestPushItem href="#">Mobile</TestPushItem>
    <TestPushItem href="#">Tablet</TestPushItem>
    <TestPushItem href="#">Print</TestPushItem>
    <TestPushItem href="#">Television</TestPushItem>
    <TestPushItem href="#">Voice</TestPushItem>
    <TestPushItem href="#">VR/AR</TestPushItem>
    <TestPushItem href="#">Wearables</TestPushItem>
  </TestPush>
);
