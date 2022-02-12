import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Box from '../Box/Box';
import Text from '../Text/Text';
import Flex from '../Flex/Flex';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import chevronOpen from '../lotties/chevron-open.json';
import chevronClose from '../lotties/chevron-close.json';
import theme from '../theme';

// Predefined Framer Motion animations
const menuVariant = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 }
  },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const itemVariant = {
  active: {
    color: theme.colors.action.active
  }
};

const itemVariantShadow = {
  ...itemVariant,
  active: {
    ...itemVariant.active,
    boxShadow: theme.shadows.soft.highMiddle
  }
};

const subMenuVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
};

const subItemVariant = {
  active: {
    color: theme.colors.action.active
  }
};

function PushCloseButton({ isOpen, ...rest }) {
  const open = {
    loop: false,
    animationData: chevronOpen,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const close = {
    loop: false,
    animationData: chevronClose,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <ToggleIcon
      sx={{
        position: 'absolute',
        top: 3,
        right: -15,
        zIndex: 2,
        fontSize: 6,
        boxShadow: 'soft.low'
      }}
      {...rest}
    >
      {isOpen ? (
        <Lottie options={open} width={24} height={24} />
      ) : (
        <Lottie options={close} width={24} height={24} />
      )}
    </ToggleIcon>
  );
}

export function PushHeader({ children, ...props }) {
  return (
    <motion.li
      variants={itemVariant}
      whileHover={itemVariant.active}
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginY: 4,
        paddingX: 2
      }}
    >
      <MdChevronLeft sx={{ fontSize: 5 }} />
      <a
        sx={{
          variant: 'text.body.h3',
          fontWeight: 'bold',
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            cursor: 'pointer'
          }
        }}
        {...props}
      >
        {children}
      </a>
    </motion.li>
  );
}

export function PushLabel({ children }) {
  return (
    <motion.li
      variants={itemVariantShadow}
      sx={{
        marginTop: 4,
        marginBottom: 3,
        paddingX: 4,
        color: 'secondary.regular',
        fontSize: 1,
        fontWeight: 600,
        textTransform: 'uppercase'
      }}
    >
      {children}
    </motion.li>
  );
}

function PushSubMenu({ children }) {
  return (
    <motion.ul
      variants={subMenuVariant}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{ padding: 0, listStyle: 'none' }}
    >
      {children}
    </motion.ul>
  );
}

export function PushSubItem({ children }) {
  return (
    <motion.li
      variants={subItemVariant}
      whileHover={subItemVariant.active}
      sx={{
        variant: 'text.body.smallParagraph',
        paddingX: 4,
        paddingY: 2,
        color: 'text.primary',
        fontWeight: 400,
        '&:hover': {
          cursor: 'pointer'
        }
      }}
    >
      {children}
    </motion.li>
  );
}

export function PushItem({ children, label, description, icon, ...props }) {
  const [isItemHovered, setIsItemHovered] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
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
      variants={itemVariantShadow}
      onHoverStart={() => setIsItemHovered(true)}
      onHoverEnd={() => setIsItemHovered(false)}
    >
      <motion.a
        whileHover={itemVariantShadow.active}
        onTap={() => setIsSubMenuOpen(!isSubMenuOpen)}
        style={{ boxShadow: '0px 5px 16px rgba(0, 0, 0, 0)' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
        <Flex>
          <motion.span
            variants={{
              active: { scale: 1.15 }
            }}
          >
            {label}
          </motion.span>

          <motion.span
            variants={iconVariant}
            animate={isItemHovered ? 'show' : 'hidden'}
            sx={{ marginLeft: 'auto' }}
          >
            {!icon ? <MdChevronRight /> : icon}
          </motion.span>
        </Flex>

        {description && (
          <Text variant="body.caption" sx={{ marginTop: 3 }}>
            {description}
          </Text>
        )}
      </motion.a>

      {isSubMenuOpen && <PushSubMenu>{children}</PushSubMenu>}
    </motion.li>
  );
}
PushItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export function PushDivider() {
  return (
    <Box
      marginX={4}
      marginY={3}
      backgroundColor="divider"
      sx={{ height: '1px' }}
    />
  );
}

export function PushContent({ children, level }) {
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
      variants={menuVariant}
      initial="hidden"
      animate="show"
      exit="hidden"
      sx={{
        variant: getLevel(level),
        position: 'absolute',
        zIndex: 2,
        overflow: 'auto',
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
PushContent.propTypes = {
  level: PropTypes.number
};
PushContent.defaultProps = {
  level: 100
};

export function Push({ children, isOpen, onClose, behavior }) {
  const [isCloseButtonHidden, setIsCloseButtonHidden] = useState(false);
  const variant = {
    hidden: { marginLeft: '-255px' },
    show: { marginLeft: '0px' }
  };

  return (
    <motion.nav
      variants={variant}
      animate={isOpen ? 'show' : 'hidden'}
      transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
      sx={{
        flex: '0 0 auto',
        position: 'relative',
        width: '287px',
        height: '100vh'
      }}
    >
      <Box sx={{ position: 'fixed', width: '287px', height: '100vh' }}>
        <PushCloseButton
          onClick={onClose}
          isHidden={isCloseButtonHidden}
          behavior={behavior}
          isOpen={isOpen}
        />
        <motion.div
          variants={{
            hidden: { opacity: 0, transitionEnd: { display: 'none' } },
            show: { display: 'block', opacity: 1 }
          }}
          onHoverStart={() => setIsCloseButtonHidden(true)}
          onHoverEnd={() => setIsCloseButtonHidden(false)}
          sx={{
            zIndex: 2,
            width: '100%',
            height: '100%',
            backgroundColor: 'background',
            boxShadow: 'hard.high'
          }}
        >
          {children}
        </motion.div>
      </Box>
    </motion.nav>
  );
}
Push.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  behavior: PropTypes.oneOf(['ghost', 'shuffle'])
};
Push.defaultProps = {
  behavior: 'shuffle'
};
