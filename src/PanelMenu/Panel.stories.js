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
        <PanelListItem href="#">Akrade & Company</PanelListItem>
        <PanelListItem href="#">Bet She Will</PanelListItem>
        <PanelListItem href="#">Brown Lotus</PanelListItem>
        <PanelListItem href="#">Kràdoyé</PanelListItem>
        <PanelListItem href="#">Pepper Crow</PanelListItem>
      </Panel>
    </Box>
  );
}
