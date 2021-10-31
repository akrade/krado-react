/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';
import theme from '../theme';
import Lottie from 'react-lottie';
import chevronOpen from '../lotties/chevron-open.json';
import chevronClose from '../lotties/chevron-close.json';
import { MdChevronRight, MdLaunch, MdLink } from 'react-icons/md';

function CloseButton({ isOpen, ...props }) {
  const defaultOptions = {
    autoplay: false,
    loop: false,
    animationData: chevronOpen,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions2 = {
    autoplay: false,
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
        right: '-15px',
        alignItems: 'center',
        boxShadow: 'soft.low',
        transitionDelay: '650ms'
      }}
      {...props}
    >
      {isOpen ? (
        <Lottie options={defaultOptions} width={24} height={24} />
      ) : (
        <Lottie options={defaultOptions2} width={24} height={24} />
      )}
    </ToggleIcon>
  );
}

export function PushListItem({ children, href, onClick, type }) {
  const variant = { hidden: {}, show: {} };
  return (
    <motion.li variants={variant} whileHover="hidden">
      <a
        href={href}
        onClick={onClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 4,
          paddingY: 3,
          color: 'inherit',
          textDecoration: 'none',
          borderRadius: 1,
          transition: '325ms ease',
          cursor: 'pointer',
          '&:hover, &:focus-visible': {
            color: 'highlight',
            outline: 'none',
            boxShadow: 'soft.highMiddle',
            transform: 'scale(1.05)',
            '.list-item-arrow': {
              opacity: 1
            }
          }
        }}
      >
        <Flex as="span" variant="text.body.h3">
          {children}
        </Flex>

        {type === 'arrow' && (
          <MdChevronRight
            sx={{ opacity: 0, transition: '325ms ease' }}
            className="list-item-arrow"
          />
        )}
        {type === 'link' && (
          <MdLink
            sx={{ opacity: 0, transition: '325ms ease' }}
            className="list-item-arrow"
          />
        )}
        {type === 'external' && (
          <MdLaunch
            sx={{ opacity: 0, transition: '325ms ease' }}
            className="list-item-arrow"
          />
        )}
      </a>
    </motion.li>
  );
}

PushListItem.defaultProps = {
  type: 'arrow'
};

export function Push({ children, isOpen, onClose, ...props }) {
  const [isListItemHovered, setIsListItemHovered] = useState(false);

  const variant = {
    opened: {
      x: '0',
      backgroundColor: 'rgba(255,255,255,1)',
      boxShadow: theme.shadows.hard.high
    },
    closed: {
      x: '-90%',
      backgroundColor: 'rgba(255,255,255,0)',
      boxShadow: '0px 4px 7px rgba(0, 0, 0, 0)'
    }
  };

  return (
    <motion.div
      variants={variant}
      animate={isOpen ? 'opened' : 'closed'}
      transition={{
        type: 'spring',
        bounce: 0.1,
        duration: 0.4
      }}
      sx={{
        flex: '0 0 auto',
        width: '287px',
        paddingY: 2,
        height: '100vh',
        boxShadow: 'hard.high'
      }}
      {...props}
    >
      <CloseButton
        isOpen={isOpen}
        onClick={onClose}
        sx={{
          opacity: isListItemHovered && 0,
          transform: isListItemHovered && 'translateX(30%)'
        }}
      />

      <Box
        sx={{
          overflow: 'hidden',
          display: isOpen ? 'block' : 'none'
        }}
      >
        <ul
          onMouseEnter={() => setIsListItemHovered(true)}
          onMouseLeave={() => setIsListItemHovered(false)}
          sx={{
            margin: 0,
            padding: 0,
            listStyle: 'none'
          }}
        >
          {children}
        </ul>
      </Box>
    </motion.div>
  );
}

export function PushContent({ children, isOpen }) {
  const variant = {
    opened: {
      marginLeft: '0px'
    },
    closed: {
      marginLeft: '-287px'
    }
  };

  return (
    <motion.div
      variants={variant}
      animate={isOpen ? 'opened' : 'closed'}
      transition={{
        type: 'spring',
        bounce: 0.1,
        duration: 0.4
      }}
      sx={{
        paddingX: 6
      }}
    >
      {children}
    </motion.div>
  );
}
