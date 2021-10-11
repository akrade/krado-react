import React from 'react';
import { Avatar, Box, Flex, Grid } from 'krado-react';

export default function App() {
  return (
    <Flex padding={4} sx={{ flexDirection: 'column', gap: 4 }}>
      <Box padding={4} color="background" backgroundColor="primary">
        Box
      </Box>

      <Flex sx={{ gap: 4 }}>
        <Box>Flex item 1</Box>
        <Box>Flex item 2</Box>
        <Box>Flex item 3</Box>
      </Flex>

      <Grid gap={4}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Grid>

      <Avatar src="https://source.unsplash.com/random/42x42" />

      <Flex sx={{ gap: 4 }}>
        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Button size="large">Button</Button>
          <Button disabled>Button</Button>
        </Flex>

        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Button variant="text">Button</Button>
          <Button variant="text" disabled>
            Button
          </Button>
        </Flex>

        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Button variant="ghost">Button</Button>
          <Button variant="ghost" disabled>
            Button
          </Button>
        </Flex>
      </Flex>

      <Card>Card</Card>

      <Image src="https://source.unsplash.com/random" />

      <Box>
        <Link href="#">Link</Link>
      </Box>
    </Flex>
  );
}
