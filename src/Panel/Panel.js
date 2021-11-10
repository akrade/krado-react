/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useThemeUI } from 'theme-ui';
import { motion } from 'framer-motion';
import { MdChevronRight, MdClose } from 'react-icons/md';
import Box from '../Box/Box';
import ToggleIcon from '../ToggleIcon/ToggleIcon';

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

export function PanelContent({ children, size, ...props }) {
  const variant = { hidden: { x: '-100%' }, show: { x: 0 } };

  return (
    <motion.div
      variants={variant}
      transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
      sx={{
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        width: getSize(size),
        height: '100vh',
        backgroundColor: 'background',
        boxShadow: 'soft.highEast'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
PanelContent.propTypes = {
  size: PropTypes.oneOf(['quarter', 'half', 'full'])
};
PanelContent.defaultProps = {
  size: 'quarter'
};

export function PanelHeader({ children }) {
  return (
    <header
      sx={{
        padding: 4,
        fontSize: '26px',
        fontWeight: 'bold'
      }}
    >
      {children}
    </header>
  );
}

export function PanelBody({ children }) {
  const variant = {
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  return (
    <motion.ul
      variants={variant}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{
        variant: 'text.body.h3',
        overflow: 'hidden',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </motion.ul>
  );
}

export function PanelItem({ children, icon, ...props }) {
  const [isItemHovered, setIsItemHovered] = useState(false);
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
  const iconVariant = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  };

  return (
    <motion.li
      variants={variant}
      onHoverStart={() => setIsItemHovered(true)}
      onHoverEnd={() => setIsItemHovered(false)}
    >
      <motion.a
        whileHover={variant.active}
        style={{ boxShadow: '0px 5px 16px rgba(0, 0, 0, 0)' }}
        sx={{
          display: 'flex',
          paddingX: 4,
          paddingY: 3,
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            cursor: 'pointer'
          }
        }}
        {...props}
      >
        {children}

        <motion.span
          variants={iconVariant}
          animate={isItemHovered ? 'show' : 'hidden'}
          sx={{ marginLeft: 'auto' }}
        >
          {!icon ? <MdChevronRight /> : icon}
        </motion.span>
      </motion.a>
    </motion.li>
  );
}

export function PanelDivider() {
  return (
    <Box
      marginX={4}
      marginY={3}
      backgroundColor="lightGray"
      sx={{ height: '1px' }}
    />
  );
}

export function Panel({ children, isOpen, size, ...props }) {
  const variant = { hidden: { opacity: 0 }, show: { opacity: 1 } };

  return (
    <motion.div
      variants={variant}
      animate={isOpen ? 'show' : 'hidden'}
      sx={{ position: 'relative' }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function PanelCloseButton({ ...props }) {
  return (
    <ToggleIcon
      sx={{
        position: 'absolute',
        top: 4,
        right: 4,
        width: '42px',
        height: '42px',
        boxShadow: 'soft.low'
      }}
      {...props}
    >
      <MdClose />
    </ToggleIcon>
  );
}
