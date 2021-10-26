import React from 'react';
import Box from '../Box/Box';
import { Panel } from './Panel';

export default {
  title: 'Panel',
  component: Panel
};

export const Default = () => (
  <Box backgroundColor="lightGray">
    <Panel heading="Brands">
      <p>children</p>
      <p>children</p>
      <p>children</p>
      <p>children</p>
      <p>children</p>
      <p>children</p>
    </Panel>
  </Box>
);
