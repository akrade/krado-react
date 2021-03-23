import React from 'react';
import { Box, Flex, Title, Image, Avatar, Button, Tag } from 'krado-react';
import ComponentRow from './components/ComponentRow';
import ComponentCard from './components/ComponentCard';
import TextExample from './components/TextExample';
import HeadingExample from './components/HeadingExample';
import TitleExample from './components/TitleExample';
import LinkExample from './components/LinkExample';
import avatarPlaceHolder from './assets/images/avatar-placeholder.png';
import imagePlaceholder from './assets/images/assortment-of-natural-ingredients-on-wooden-table.jpg';

export default function App() {
  return (
    <Box variant="container" py={5}>
      <Flex flexDirection="column">
        {/* First row. */}
        <ComponentRow>
          <TextExample />
          <HeadingExample />
        </ComponentRow>

        {/* Second row. */}
        <ComponentRow>
          <TitleExample />
          <LinkExample />
        </ComponentRow>

        {/* Third row */}
        <ComponentRow>
          {/* Image Component */}
          <ComponentCard>
            <Flex
              flexDirection="column"
              justifyContent="space=between"
              alignItems="center"
            >
              <Title variant="extraSmall" marginBottom={5}>
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
              <Title variant="extraSmall" marginBottom={5}>
                Avatar
              </Title>
              <Avatar src={avatarPlaceHolder} my="auto" />
            </Flex>
          </ComponentCard>
        </ComponentRow>

        {/* Fourth row */}
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

          {/* Tag component */}
          <ComponentCard flexDirection="row">
            <Tag>Tag</Tag>
            <Tag backgroundColor="secondary" color="white">
              Tag
            </Tag>
            <Tag tagType="outline">Tag</Tag>
          </ComponentCard>
        </ComponentRow>
      </Flex>
    </Box>
  );
}
