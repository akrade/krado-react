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
  Avatar,
  Button
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
            <Image src="https://source.unsplash.com/random/500x500" />
          </Flex>
        </Card>

        <Card>
          <Flex
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Title variant="extraSmall" marginBottom="auto">
              Avatar
            </Title>
            <Avatar marginBottom="auto" src="http://placekitten.com/300/300" />
          </Flex>
        </Card>
        <Card>
          <Flex
            height="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button>Button</Button>
            <Button buttonSize="small">Button</Button>
            <Button variant="outline.light">Button</Button>
            <Button variant="outline.light" buttonSize="small">
              Button
            </Button>
            <Flex
              backgroundColor="black"
              width="100%"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              borderRadius={1}
              padding={2}
            >
              <Button variant="outline.dark">Button</Button>
              <Button variant="outline.dark" buttonSize="small">
                Button
              </Button>
            </Flex>
            <Button variant="clear">Button</Button>
            <Button variant="success">Button</Button>
            <Button variant="danger">Button</Button>
          </Flex>
        </Card>
      </Grid>
    </Box>
  );
}
