import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text
} from 'krado-react';

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

      <Flex sx={{ gap: 4 }}>
        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Button size="small">Button</Button>
          <Button size="small" disabled>
            Button
          </Button>
        </Flex>

        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Button variant="text" size="small">
            Button
          </Button>
          <Button variant="text" size="small" disabled>
            Button
          </Button>
        </Flex>

        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          <Button variant="ghost" size="small">
            Button
          </Button>
          <Button variant="ghost" size="small" disabled>
            Button
          </Button>
        </Flex>
      </Flex>

      <Card>Card</Card>

      <Image src="https://source.unsplash.com/random" />

      <Box>
        <Link href="#">Link</Link>
      </Box>

      <Flex sx={{ gap: 5 }}>
        <Box>
          <Heading variant="body.h1" as="h1">
            H1
          </Heading>
          <Heading variant="body.h2" as="h2">
            H2
          </Heading>
          <Heading variant="body.h3" as="h3">
            H3
          </Heading>
          <Heading variant="body.h4" as="h4">
            H4
          </Heading>
          <Heading variant="body.h5" as="h5">
            H5
          </Heading>
        </Box>
        <Box>
          <Heading variant="display.h1" as="h1">
            H1
          </Heading>
          <Heading variant="display.h2" as="h2">
            H2
          </Heading>
          <Heading variant="display.h3" as="h3">
            H3
          </Heading>
          <Heading variant="display.h4" as="h4">
            H4
          </Heading>
          <Heading variant="display.h5" as="h5">
            H5
          </Heading>
        </Box>
      </Flex>

      <Flex sx={{ gap: 5 }}>
        <Box>
          <Text variant="body.summary" as="p">
            Summary
          </Text>
          <Text variant="body.paragraph" as="p">
            Paragraph
          </Text>
          <Text variant="body.smallParagraph" as="p">
            Small Paragraph
          </Text>
          <Text variant="body.bold" as="p">
            Bold
          </Text>
          <Text variant="body.callout" as="p">
            Callout
          </Text>
          <Text variant="body.caption" as="p">
            Caption
          </Text>
          <Text variant="body.footnote" as="p">
            Footnote
          </Text>
          <Text variant="body.pretext" as="p">
            Pretext
          </Text>
        </Box>
        <Box>
          <Text variant="display.display">Display</Text>
          <Text variant="display.quote" as="blockquote">
            Quote
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
