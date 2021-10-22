import React from 'react';
import Box from '../Box/Box';

function getSize(size) {
  if (size === 'quarter') {
    return '25vw';
  }

  if (size === 'half') {
    return '50vw';
  }

  if (size === 'full') {
    return '100vw';
  }
}

export default function PanelMenu({ size }) {
  return (
    <Box backgroundColor="muted" sx={{ width: getSize(size) }}>
      Panel menu
    </Box>
  );
}

PanelMenu.defaultProps = {
  size: 'quarter'
};
