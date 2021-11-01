/** @jsxImportSource theme-ui */
import React from 'react';
import { MdChevronRight } from 'react-icons/md';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import ToggleIcon from '../ToggleIcon/ToggleIcon';

function PushCloseButton({ ...rest }) {
  return (
    <ToggleIcon
      sx={{
        position: 'absolute',
        top: 3,
        right: -15,
        fontSize: 6,
        boxShadow: 'soft.low'
      }}
      {...rest}
    >
      <MdChevronRight />
    </ToggleIcon>
  );
}

export function TestPushItem({ children, icon }) {
  return (
    <Flex as="li" sx={{ alignItems: 'center', paddingX: 4, paddingY: 3 }}>
      <Box as="span" variant="text.body.h3">
        {children}
      </Box>
      {icon && <Box sx={{ marginLeft: 'auto' }}>{icon}</Box>}
    </Flex>
  );
}

export default function TestPush({ children }) {
  return (
    <Box
      as="nav"
      sx={{ position: 'relative', width: '287px', height: '100vh' }}
    >
      <PushCloseButton />
      <Box
        as="ul"
        backgroundColor="background"
        sx={{
          position: 'absolute',
          padding: 0,
          width: '100%',
          height: '100%',
          boxShadow: 'hard.high',
          listStyle: 'none'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
