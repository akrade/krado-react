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
      <Text as="h1" variant="body.h1">
        H1
      </Text>
      <Text as="h2" variant="body.h2">
        H2
      </Text>
      <Text as="h3" variant="body.h3">
        H3
      </Text>
      <Text as="h4" variant="body.h4">
        H4
      </Text>
      <Text as="h5" variant="body.h5">
        H5
      </Text>
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
      <Text as="h1" variant="display.h1">
        H1
      </Text>
      <Text as="h2" variant="display.h2">
        H2
      </Text>
      <Text as="h3" variant="display.h3">
        H3
      </Text>
      <Text as="h4" variant="display.h4">
        H4
      </Text>
      <Text as="h5" variant="display.h5">
        H5
      </Text>
      <Text variant="display.quote">Quote</Text>
    </Flex>
  </Flex>
);
