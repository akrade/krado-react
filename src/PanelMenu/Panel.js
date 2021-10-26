/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import Text from '../Text/Text';
import { Dismiss24Regular } from '@fluentui/react-icons';

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

function PanelCloseButton() {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '42px',
        height: '42px',
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.18)',
        borderRadius: 4,
        cursor: 'pointer'
      }}
    >
      <Dismiss24Regular sx={{ marginTop: '1px' }} />
    </Box>
  );
}

export function Panel({ children, size, heading }) {
  const [isOpen, setIsOpen] = useState(true);

  const variant = {
    closed: { x: '-100%' },
    opened: { x: 0 }
  };

  return (
    <motion.div
      variants={variant}
      initial="closed"
      animate={isOpen ? 'opened' : 'closed'}
      onTap={() => setIsOpen(!isOpen)}
      transition={{
        type: 'spring',
        bounce: 0.1,
        duration: 0.4
      }}
      sx={{
        padding: 4,
        width: getSize(size),
        height: '100vh',
        backgroundColor: 'white',
        boxShadow: 'soft.highEast'
      }}
    >
      <Flex
        marginBottom={4}
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Text variant="body.bold" sx={{ fontSize: 4 }}>
          {heading}
        </Text>
        <PanelCloseButton />
      </Flex>

      <Box>{children}</Box>
    </motion.div>
  );
}

Panel.defaultProps = {
  size: 'quarter'
};
