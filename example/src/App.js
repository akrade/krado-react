import React from 'react';
import { Box, Flex, Text } from 'krado-react';

export default function App() {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Box backgroundColor="muted" padding={6} borderRadius={3}>
        <Text backgroundColor="red">FOOBAR</Text>
      </Box>
    </Flex>
  );
}
