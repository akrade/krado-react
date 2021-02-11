import React from 'react';
import {
  Box,
  Flex,
  Text,
  Heading,
  Title,
  Link,
  Card,
  Image,
  Avatar,
  Button
} from 'krado-react';
import avatarPlaceHolder from './assets/images/avatar-placeholder.png';
import imagePlaceholder from './assets/images/assortment-of-natural-ingredients-on-wooden-table.jpg';

function ComponentRow(props) {
  return <Flex flexWrap="wrap" flexDirection={['column', 'row']} {...props} />;
}

function ComponentCard(props) {
  return (
    <Card
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flex={1}
      height="auto"
      margin={3}
      {...props}
    />
  );
}

export default function App() {
  return (
    <Box variant="container">
      <Flex paddingTop={5} flexDirection="column">
        <ComponentRow>
          {/* Text component. */}
          <ComponentCard>
            <Text marginBottom={3}>Body</Text>
            <Text variant="smallBody" marginBottom={3}>
              Small Body
            </Text>
            <Text variant="bold" marginBottom={3}>
              Bold
            </Text>
            <Text variant="callout" marginBottom={3}>
              Callout
            </Text>
            <Text variant="caption" marginBottom={3}>
              Caption
            </Text>
            <Text variant="footnote" marginBottom={3}>
              Footnote
            </Text>
            <Text variant="pretext" marginBottom={3}>
              Pre Text
            </Text>
          </ComponentCard>

          {/* Heading component. */}
          <ComponentCard flex={2} alignItems="flex-start">
            <Heading level={1}>Heading 1</Heading>
            <Heading level={2}>Heading 2</Heading>
            <Heading level={3}>Heading 3</Heading>
            <Heading level={4}>Heading 4</Heading>
            <Heading level={5}>Heading 5</Heading>
            <Heading level={6}>Heading 6</Heading>
          </ComponentCard>
        </ComponentRow>

        <ComponentRow>
          {/* Title component. */}
          <ComponentCard flex={2} alignItems="flex-start">
            <Title variant="display">Display</Title>
            <Title variant="extraLarge">XL Title</Title>
            <Title variant="large">Large Title</Title>
            <Title>Title</Title>
            <Title variant="subtitle">Subtile</Title>
            <Title variant="quote">Quote</Title>
            <Title variant="extraSmall">X Small</Title>
          </ComponentCard>

          {/* Link component. */}
          <ComponentCard>
            <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Link>
          </ComponentCard>
        </ComponentRow>

        <ComponentRow>
          {/* Image Component */}
          <ComponentCard>
            <Flex flexDirection="column" alignItems="center">
              <Title variant="extraSmall" marginBottom={[4, 5]}>
                Image
              </Title>
              <Image src={imagePlaceholder} />
            </Flex>
          </ComponentCard>
          {/* Avatar Component */}
          <ComponentCard>
            <Flex
              height="100%"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="center"
            >
              <Title variant="extraSmall" marginBottom={'auto'}>
                Avatar
              </Title>
              <Avatar marginBottom="auto" src={avatarPlaceHolder} />
            </Flex>
          </ComponentCard>
        </ComponentRow>
        <ComponentRow>
          {/* Button Component */}
          <ComponentCard flex={2}>
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
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                borderRadius={1}
                padding={3}
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
          </ComponentCard>
        </ComponentRow>
        <ComponentRow></ComponentRow>
      </Flex>
    </Box>
  );
}
