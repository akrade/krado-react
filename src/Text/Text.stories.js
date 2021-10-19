import React from 'react';
import Text from './Text';
import Flex from '../Flex/Flex';

export default {
  title: 'Text',
  component: Text
};

export const Default = (args) => <Text {...args}>Text</Text>;

export const Variants = () => (
  <Flex sx={{ gap: 6 }}>
    <Flex sx={{ flexDirection: 'column', gap: 3 }}>
      <Text variant="body.summary">Summary</Text>
      <Text variant="body.paragraph">Paragraph</Text>
      <Text variant="body.smallParagraph">Small Paragraph</Text>
      <Text variant="body.bold">Bold</Text>
      <Text variant="body.callout">Callout</Text>
      <Text variant="body.caption">Caption</Text>
      <Text variant="body.footnote">Footnote</Text>
      <Text variant="body.pretext">Pre Text</Text>
    </Flex>

    <Flex sx={{ flexDirection: 'column', gap: 3 }}>
      <Text variant="display.display">Display</Text>
      <Text variant="display.quote">Quote</Text>
    </Flex>
  </Flex>
);
