/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';
import { useThemeUI } from 'theme-ui';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Box from '../Box/Box';
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

export function TestPushHeader({ children, href, onClick }) {
  return (
    <motion.li
      whileHover={{ color: useThemeUI().theme.colors.highlight }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingX: 2,
        paddingY: 3,
        fontWeight: 'bold'
      }}
    >
      <MdChevronLeft sx={{ fontSize: 5 }} />
      <a
        href={href}
        onClick={onClick}
        sx={{
          variant: 'text.body.h3',
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        {children}
      </a>
    </motion.li>
  );
}

export function TestPushItem({ children, href, onClick, icon }) {
  const variant = {
    idle: {
      boxShadow: '0px 5px 16px rgba(0, 0, 0, 0)'
    },
    active: {
      boxShadow: useThemeUI().theme.shadows.soft.highMiddle
    }
  };

  return (
    <motion.li variants={variant} initial="idle" whileHover="active">
      <motion.a
        variants={{
          active: { color: useThemeUI().theme.colors.highlight }
        }}
        href={href}
        onClick={onClick}
        sx={{
          variant: 'text.body.h3',
          display: 'flex',
          alignItems: 'center',
          paddingX: 4,
          paddingY: 3,
          color: 'initial',
          textDecoration: 'none'
        }}
      >
        <motion.span
          variants={{
            active: { scale: 1.15 }
          }}
        >
          {children}
        </motion.span>
        {icon && (
          <motion.span
            variants={{ active: { opacity: 1 } }}
            sx={{ marginLeft: 'auto', opacity: 0 }}
          >
            {icon}
          </motion.span>
        )}
      </motion.a>
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
