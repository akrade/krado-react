/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';
import { useThemeUI } from 'theme-ui';
import { MdChevronRight } from 'react-icons/md';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import theme from '../theme';
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
  const variant = {
    idle: {
      boxShadow: '0px 5px 16px rgba(0, 0, 0, 0)'
    },
    active: {
      boxShadow: useThemeUI().theme.shadows.soft.highMiddle
    }
  };

  return (
    <motion.li
      variants={variant}
      initial="idle"
      whileHover="active"
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingX: 4,
        paddingY: 3
      }}
    >
      <motion.span
        variants={{
          active: { color: useThemeUI().theme.colors.highlight, scale: 1.15 }
        }}
        sx={{ variant: 'text.body.h3' }}
      >
        {children}
      </motion.span>
      {icon && (
        <motion.div
          variants={{ active: { opacity: 1 } }}
          sx={{ marginLeft: 'auto', opacity: 0 }}
        >
          {icon}
        </motion.div>
      )}
    </motion.li>
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
