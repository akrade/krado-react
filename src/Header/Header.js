/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';
import { MdMenu, MdSearch } from 'react-icons/md';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import Heading from '../Heading/Heading';
import Avatar from '../Avatar/Avatar';
import { useThemeUI } from 'theme-ui';

export function HeaderItem({ children, href, onClick }) {
  const variant = {
    idle: {
      boxShadow: '0px 9px 15px rgba(0, 0, 0, 0)'
    },
    active: {
      boxShadow: useThemeUI().theme.shadows.hard.high,
      color: useThemeUI().theme.colors.highlight
    }
  };

  return (
    <motion.li
      variants={variant}
      initial="idle"
      whileHover="active"
      sx={{ marginLeft: 2, fontWeight: 600 }}
    >
      <a
        href={href}
        onClick={onClick}
        sx={{
          padding: 2,
          color: 'inherit',
          backgroundColor: 'background',
          borderRadius: 1,
          textDecoration: 'none',
          cursor: 'pointer'
        }}
      >
        {children}
      </a>
    </motion.li>
  );
}

export function HeaderNavigation({ children }) {
  return (
    <nav sx={{ marginLeft: 'auto' }}>
      <ul sx={{ display: 'flex', listStyle: 'none' }}>{children}</ul>
    </nav>
  );
}

export function HeaderSearchButton() {
  return (
    <ToggleIcon sx={{ marginLeft: 4 }}>
      <MdSearch />
    </ToggleIcon>
  );
}

export function HeaderAvatar() {
  return (
    <Avatar
      src="https://source.unsplash.com/random/42x42"
      sx={{ marginLeft: 3 }}
    />
  );
}

export function HeaderTitle({ children }) {
  return (
    <Heading sx={{ fontWeight: 600, textTransform: 'uppercase' }}>
      {children}
    </Heading>
  );
}

export function HeaderMenuButton() {
  return (
    <ToggleIcon sx={{ marginRight: 4 }}>
      <MdMenu />
    </ToggleIcon>
  );
}

export function Header({ children }) {
  return (
    <header
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 4,
        paddingTop: 5,
        backgroundColor: 'background',
        boxShadow: 'soft.low'
      }}
    >
      <div
        sx={{
          display: 'flex',
          alignItems: 'center',
          paddingX: 3,
          paddingY: 2,
          width: '100%'
        }}
      >
        {children}
      </div>
    </header>
  );
}
