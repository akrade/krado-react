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
  const variant = {
    hidden: {
      x: '50%',
      opacity: 0,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    },
    active: {
      color: useThemeUI().theme.colors.highlight
    }
  };

  return (
    <motion.header
      variants={variant}
      whileHover={variant.active}
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
    </motion.header>
  );
}

export function TestPushSecondaryHeader({ children }) {
  const variant = {
    hidden: {
      x: '50%',
      opacity: 0,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    }
  };
  return (
    <motion.li
      variants={variant}
      sx={{
        paddingX: 4,
        paddingY: 3,
        color: 'darkGray+',
        fontSize: 2,
        textTransform: 'uppercase'
      }}
    >
      {children}
    </motion.li>
  );
}

export function TestPushItem({ children, href, onClick, icon }) {
  const variant = {
    hidden: {
      x: '50%',
      opacity: 0,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 20, duration: 0.4 }
    },
    active: {
      color: useThemeUI().theme.colors.highlight,
      boxShadow: useThemeUI().theme.shadows.soft.highMiddle
    }
  };

  return (
    <motion.li
      variants={variant}
      whileHover={variant.active}
      style={{ boxShadow: '0px 5px 16px rgba(0, 0, 0, 0)' }}
    >
      <motion.a
        href={href}
        onClick={onClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingX: 4,
          paddingY: 3,
          color: 'inherit',
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

export function TestPushContent({ children, level }) {
  const variant = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  function getLevel(level) {
    if (level === 100) {
      return 'text.body.h3';
    }

    if (level === 200) {
      return 'text.body.h5';
    }
  }

  return (
    <motion.ul
      key="push"
      variants={variant}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{
        variant: getLevel(level),
        overflow: 'hidden',
        position: 'absolute',
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: 'hard.high',
        listStyle: 'none'
      }}
    >
      {children}
    </motion.ul>
  );
}
TestPushContent.defaultProps = {
  level: 100
};

export default function TestPush({ children }) {
  return (
    <Box
      as="nav"
      sx={{ position: 'relative', width: '287px', height: '100vh' }}
    >
      <PushCloseButton />
      {children}
    </Box>
  );
}
