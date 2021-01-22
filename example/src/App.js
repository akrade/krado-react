import React from 'react';
import { Box, Flex, Grid } from 'krado-react';

export default function App() {
  return (
    <>
      <Flex>
        <Box backgroundColor="primary">Hello!</Box>
      </Flex>
      <Grid>
        <Box backgroundColor="primary">Hello!</Box>
        <Box backgroundColor="primary">Hello!</Box>
        <Box backgroundColor="primary">Hello!</Box>
        <Box backgroundColor="primary">Hello!</Box>
      </Grid>
    </>
  );
}
