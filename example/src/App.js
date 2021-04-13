import React from 'react';
import { Box, Flex } from 'krado-react';
import ComponentRow from './components/ComponentRow';
import TextExample from './components/TextExample';
import HeadingExample from './components/HeadingExample';
import TitleExample from './components/TitleExample';
import LinkExample from './components/LinkExample';
import ImageExample from './components/ImageExample';
import AvatarExample from './components/AvatarExample';
import ButtonExample from './components/ButtonExample';
import TagExample from './components/TagExample';
import TestComponent from './components/TestComponent';

export default function App() {
  return (
    <Box variant="container" py={5}>
      <Flex flexDirection="column">
        <ComponentRow>
          <TestComponent />
          <TextExample />
          <HeadingExample />
        </ComponentRow>

        <ComponentRow>
          <TitleExample />
          <LinkExample />
        </ComponentRow>

        <ComponentRow>
          <ImageExample />
          <AvatarExample />
        </ComponentRow>

        <ComponentRow>
          <ButtonExample />
          <TagExample />
        </ComponentRow>
      </Flex>
    </Box>
  );
}
