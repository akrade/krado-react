import React, { useState } from 'react';
import Box from '../Box/Box';
import { Panel, PanelListItem } from './Panel';

export default {
  title: 'Panel',
  component: Panel
};

export function Default() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box backgroundColor="lightGray">
      <Panel
        heading="Brands"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onTap={() => setIsOpen(true)}
      >
        <PanelListItem href="#">children</PanelListItem>
        <PanelListItem href="#">children</PanelListItem>
        <PanelListItem href="#">children</PanelListItem>
        <PanelListItem href="#">children</PanelListItem>
        <PanelListItem href="#">children</PanelListItem>
      </Panel>
    </Box>
  );
}
