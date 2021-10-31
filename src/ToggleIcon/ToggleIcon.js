/** @jsxImportSource theme-ui */
import React from 'react';
import { motion } from 'framer-motion';

export default function ToggleIcon({ ...rest }) {
  return (
    <motion.button
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
