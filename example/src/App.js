import React from 'react';
import {
  Box,
  Flex,
  Grid,
  Text,
  Heading,
  Title,
  Link,
  Card,
  Image,
  Avatar
} from 'krado-react';

export default function App() {
  return (
    <Box variant="container">
      <Grid
        gridGap={4}
        gridTemplateColumns={[
          '1fr',
          '1fr 1fr',
          'repeat( 3, minmax(1rem, 1fr) )'
        ]}
        paddingTop={5}
      >
        {/* Text component. */}
        <Card display="flex" justifyContent="center" alignItems="center">
          <Text>Text</Text>
        </Card>

        {/* Heading component. */}
        <Card display="flex" justifyContent="center" flexDirection="column">
          <Heading level={1}>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </Card>

        {/* Title component. */}
        <Card display="flex" justifyContent="center" alignItems="center">
          <Title>Title</Title>
        </Card>

        {/* Link component. */}
        <Card display="flex" justifyContent="center" alignItems="center">
          <Link
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Link>
        </Card>

        {/* Image Component */}
        <Card>
          <Flex flexDirection="column" alignItems="center">
            <Title variant="extraSmall" marginBottom={5}>
              Image
            </Title>
            <Image src="https://source.unsplash.com/random" />
          </Flex>
        </Card>

        <Card>
          <Flex justifyContent="center" alignItems="center">
            <Avatar src="http://placekitten.com/300/300" />
          </Flex>
        </Card>
      </Grid>
    </Box>
  );
}
