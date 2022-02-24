import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useThemeUI } from 'theme-ui';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import Avatar from '../Avatar/Avatar';

export function HeaderItem({ children, href, onClick, active, ...rest }) {
  return (
    <li sx={{ marginLeft: 2, fontWeight: 600 }}>
      <a
        href={href}
        onClick={onClick}
        sx={{
          padding: 2,
          color: active ? 'action.active' : 'initial',
          backgroundColor: 'background',
          borderRadius: 1,
          textDecoration: 'none',
          boxShadow: active ? 'hard.high' : 'none',
          cursor: 'pointer',
          transition: 'color 400ms ease, box-shadow 400ms ease',
          '&:hover': {
            color: 'action.active',
            boxShadow: 'hard.high'
          }
        }}
        {...rest}
      >
        {children}
      </a>
    </li>
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

export function HeaderAvatar({ ...rest }) {
  return <Avatar {...rest} />;
}

export function HeaderTitle({ children, ...rest }) {
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
        letterSpacing: '0.025em'
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function HeaderIconButton({ children, ...props }) {
  return (
    <ToggleIcon sx={{ marginRight: 3 }} {...props}>
      {children}
    </ToggleIcon>
  );
}

export function Header({ children, isSmall, ...rest }) {
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
      {...rest}
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
