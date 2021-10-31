/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import theme from '../theme';

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

function CloseButton({ ...props }) {
  return (
    <ToggleIcon
      sx={{
        width: '42px',
        height: '42px',
        boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.18)'
      }}
      {...props}
    >
      <MdClose />
    </ToggleIcon>
  );
}

export function PanelListItem({ children, href, onClick }) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        sx={{
          display: 'block',
          paddingX: 4,
          paddingY: 3,
          color: 'inherit',
          textDecoration: 'none',
          borderRadius: 1,
          transition: '325ms ease',
          cursor: 'pointer',
          '&:hover, &:focus': {
            color: 'highlight',
            outline: 'none',
            boxShadow: 'soft.highMiddle',
            transform: 'scale(1.05)'
          }
        }}
      >
        <Box as="span" variant="text.body.h3">
          {children}
        </Box>
      </a>
    </li>
  );
}

export function Panel({ children, isOpen, onClose, size, heading, ...props }) {
  const variant = {
    closed: { x: '-100%', boxShadow: 'none' },
    opened: { x: 0, boxShadow: theme.shadows.soft.highEast }
  };

  return (
    <motion.div
      variants={variant}
      initial="closed"
      animate={isOpen ? 'opened' : 'closed'}
      transition={{
        type: 'spring',
        bounce: 0.1,
        duration: 0.4
      }}
      sx={{
        overflow: 'hidden',
        width: getSize(size),
        height: '100vh',
        backgroundColor: 'white',
        boxShadow: 'soft.highEast'
      }}
      {...props}
    >
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 4
        }}
      >
        <Box as="span" variant="text.body.h3" sx={{ fontWeight: 'bold' }}>
          {heading}
        </Box>
        <CloseButton onClick={onClose} />
      </Flex>

      <ul
        sx={{
          margin: 0,
          padding: 0,
          listStyle: 'none'
        }}
      >
        {children}
      </ul>
    </motion.div>
  );
}

Panel.defaultProps = {
  isOpen: false,
  size: 'quarter'
};
