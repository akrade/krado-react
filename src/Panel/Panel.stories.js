/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import {
  Panel,
  PanelItem,
  PanelCloseButton,
  PanelContent,
  PanelHeader,
  PanelBody,
  PanelOverlay
} from './Panel';
import Box from '../Box/Box';
import ToggleIcon from '../ToggleIcon/ToggleIcon';

export default {
  title: 'Panel',
  component: Panel
};

export function Default() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Panel isOpen={isOpen}>
        <PanelOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
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
        sx={{
          padding: 4,
          width: '100vw',
          height: '100vh',
          background:
            "center / cover no-repeat url('https://source.unsplash.com/user/chuttersnap') "
        }}
      >
        <ToggleIcon onClick={() => setIsOpen(!isOpen)}>
          <MdMenu />
        </ToggleIcon>
      </Box>
    </>
  );
}
