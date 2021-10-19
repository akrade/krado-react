import React from 'react';
import Flex from './Flex';
import Box from '../Box/Box';

export default {
  title: 'Flex',
  component: Flex
};

export const Default = () => (
  <Flex>
    <Box
      p={4}
      color="background"
      bg="primary"
      sx={{ flex: '1 1 auto', fontWeight: 'bold', borderRadius: 1 }}
    >
      Flex
    </Box>
    <Box p={4} bg="lightGray" sx={{ fontWeight: 'bold', borderRadius: 1 }}>
      Box
    </Box>
  </Flex>
);
