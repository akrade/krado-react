import React from 'react';
import { Flex, Grid, Text, Heading } from 'krado-react';

export default function App() {
  return (
    <Grid
      gridGap={4}
      gridTemplateColumns={`repeat( auto-fit, minmax(1rem, 1fr) )`}
    >
      <Flex
        backgroundColor="muted"
        justifyContent="center"
        alignItems="center"
        padding={5}
        borderRadius={3}
      >
        <Text>Text</Text>
      </Flex>
      <Flex
        justifyContent="center"
        flexDirection="column"
        backgroundColor="muted"
        padding={5}
        borderRadius={3}
      >
        <Heading color="primary" fontFamily="heading" margin={4} level={1}>
          Heading 1
        </Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </Flex>
    </Grid>
  );
}
