import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useThemeUI } from 'theme-ui';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import Avatar from '../Avatar/Avatar';

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
    <nav sx={{ marginRight: 3 }}>
      <ul sx={{ display: 'flex', listStyle: 'none' }}>{children}</ul>
    </nav>
  );
}

export function HeaderBody({ children }) {
  return (
    <div sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
      {children}
    </div>
  );
}

export function HeaderAvatar() {
  return <Avatar src="https://source.unsplash.com/random/42x42" />;
}

export function HeaderTitle({ children }) {
  const variant = {
    small: { fontSize: `${useThemeUI().theme.fontSizes[6]}px` },
    large: { fontSize: `${useThemeUI().theme.fontSizes[9]}px` }
  };

  return (
    <motion.div
      variants={variant}
      transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
      sx={{
        variant: 'text.display.h2',
        fontWeight: 600,
        letterSpacing: '0.025em',
        textTransform: 'uppercase'
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeaderIconButton({ children }) {
  return <ToggleIcon sx={{ marginRight: 3 }}>{children}</ToggleIcon>;
}

export function Header({ children, isSmall }) {
  const variant = {
    small: { paddingTop: '0px' },
    large: { paddingTop: `${useThemeUI().theme.space[5]}px` }
  };

  return (
    <motion.header
      variants={variant}
      animate={isSmall ? 'small' : 'large'}
      transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 3,
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
    </motion.header>
  );
}
Header.propTypes = {
  isSmall: PropTypes.bool
};
Header.defaultProps = {
  isSmall: false
};
