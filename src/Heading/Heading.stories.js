import React from 'react';
import Heading from './Heading';
import Flex from '../Flex/Flex';
import Box from '../Box/Box';

export default {
  title: 'Heading',
  component: Heading
};

export const Basic = (args) => (
  <Box>
    <Heading {...args}>Heading</Heading>
  </Box>
);
Basic.args = {};

export const Variants = () => (
  <Flex sx={{ gap: 6 }}>
    <Box>
      <Heading as="h1" variant="body.h1">
        H1
      </Heading>
      <Heading as="h2" variant="body.h2">
        H2
      </Heading>
      <Heading as="h3" variant="body.h3">
        H3
      </Heading>
      <Heading as="h4" variant="body.h4">
        H4
      </Heading>
      <Heading as="h5" variant="body.h5">
        H5
      </Heading>
    </Box>
    <Box>
      <Heading as="h1" variant="display.h1">
        H1
      </Heading>
      <Heading as="h2" variant="display.h2">
        H2
      </Heading>
      <Heading as="h3" variant="display.h3">
        H3
      </Heading>
      <Heading as="h4" variant="display.h4">
        H4
      </Heading>
      <Heading as="h5" variant="display.h5">
        H5
      </Heading>
    </Box>
  </Flex>
);
