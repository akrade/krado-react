/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function ToggleIcon({ behavior, isHidden, ...rest }) {
  const fadeOut = {
    hidden: {
      x: 20,
      opacity: 0,
      transition: { type: 'spring', duration: 0.6, delay: 0.625 }
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', duration: 0.625 }
    }
  };
  const shuffle = {
    hidden: {
      zIndex: 10,
      x: [0, 40, -20],
      transition: {
        type: 'spring',
        duration: 0.5,
        delay: 0.6,
        zIndex: { delay: 0.8 }
      }
    },
    show: {
      zIndex: 30,
      x: [-20, 40, 0],
      transition: { type: 'spring', duration: 0.5, zIndex: { delay: 0.3 } }
    }
  };

  function getVariant(behavior) {
    if (behavior === 'ghost') {
      return fadeOut;
    }

    if (behavior === 'shuffle') {
      return shuffle;
    }

    return fadeOut;
  }

  return (
    <motion.button
      variants={getVariant(behavior)}
      animate={isHidden ? 'hidden' : 'show'}
      whileHover={{ width: '36px', height: '36px', scale: 1.1 }}
      sx={{
        zIndex: 3,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        backgroundColor: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 2,
        transformOrigin: 'left bottom -50px',

        '&:focus-visible': {
          boxShadow: 'onFocus',
          outline: 'none'
        },
        '&:disabled': {
          cursor: 'auto'
        }
      }}
      {...rest}
    />
  );
}

ToggleIcon.propTypes = {
  behavior: PropTypes.oneOf(['ghost', 'shuffle'])
};

ToggleIcon.defaultProps = {
  behavior: 'ghost',
  isHidden: false
};
