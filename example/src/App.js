import React from 'react';
import { Box, Flex, Tag } from 'krado-react';
import ComponentRow from './components/ComponentRow';
import ComponentCard from './components/ComponentCard';
import TextExample from './components/TextExample';
import HeadingExample from './components/HeadingExample';
import TitleExample from './components/TitleExample';
import LinkExample from './components/LinkExample';
import ImageExample from './components/ImageExample';
import AvatarExample from './components/AvatarExample';
import ButtonExample from './components/ButtonExample';

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
          <ImageExample />
          <AvatarExample />
        </ComponentRow>

        {/* Fourth row */}
        <ComponentRow>
          <ButtonExample />

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
