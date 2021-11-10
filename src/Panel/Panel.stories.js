/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import Box from '../Box/Box';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import {
  Panel,
  PanelItem,
  PanelCloseButton,
  PanelContent,
  PanelHeader,
  PanelBody
} from './Panel';

export default {
  title: 'Panel',
  component: Panel
};

export function Default() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Panel isOpen={isOpen}>
        <PanelContent>
          <PanelCloseButton onClick={() => setIsOpen(false)} />
          <PanelHeader>Brands</PanelHeader>
          <PanelBody>
            <PanelItem href="#">Akrade & Company</PanelItem>
            <PanelItem href="#">Bet She Will</PanelItem>
            <PanelItem href="#">Brown Lotus</PanelItem>
            <PanelItem href="#">Kràdoyé</PanelItem>
            <PanelItem href="#">Pepper Crow</PanelItem>
          </PanelBody>
        </PanelContent>
      </Panel>
      <Box
        backgroundColor="muted"
        sx={{ padding: 4, width: '100vw', height: '100vh' }}
      >
        <ToggleIcon onClick={() => setIsOpen(!isOpen)}>
          <MdMenu />
        </ToggleIcon>
      </Box>
    </>
  );
}
