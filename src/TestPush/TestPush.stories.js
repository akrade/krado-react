import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import TestPush, { TestPushItem } from './TestPush';

export default {
  title: 'TestPush',
  component: TestPush
};

export const Default = () => (
  <TestPush>
    <TestPushItem icon={<MdChevronRight />}>Identity</TestPushItem>
    <TestPushItem>Desktop</TestPushItem>
    <TestPushItem>Web</TestPushItem>
    <TestPushItem>Mobile</TestPushItem>
    <TestPushItem>Tablet</TestPushItem>
    <TestPushItem>Print</TestPushItem>
    <TestPushItem>Television</TestPushItem>
    <TestPushItem>Voice</TestPushItem>
    <TestPushItem>VR/AR</TestPushItem>
    <TestPushItem>Wearables</TestPushItem>
  </TestPush>
);
