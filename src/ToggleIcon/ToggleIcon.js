/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function ToggleIcon({ behavior, isHidden, ...rest }) {
  return (
    <motion.button
      variants={getVariant(behavior)}
      animate={isHidden ? 'hidden' : 'show'}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        backgroundColor: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 2,
        transition: '325ms ease',
        '&:hover': {
          transformOrigin: 'left bottom -50px',
          transform: 'scale(1.1)',
          width: '36px',
          height: '36px'
        },
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
