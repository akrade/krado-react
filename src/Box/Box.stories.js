import React from 'react';
import Box from './Box';

export default {
  title: 'Box',
  component: Box
};

export const Default = () => (
  <Box p={4} color="background" bg="primary">
    This is a box
  </Box>
);
