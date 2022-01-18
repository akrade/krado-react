import Box from './Box/Box';
import Flex from './Flex/Flex';
import Text from './Text/Text';
import Heading from './Heading/Heading';
import LinkHeading from './LinkHeading/LinkHeading';

// I wish I can make this a proper MDX story, but I can't get it to work.

export default {
  title: 'Colors',
  component: Box
};

function ColorItem({ title, color, dark, border }) {
  return (
    <Flex
      sx={{
        marginBottom: 3,
        marginRight: 3,
        padding: 3,
        width: '171px',
        height: '80px',
        backgroundColor: color,
        borderRadius: 1,
        boxShadow: 'hard.low',
        border: border ? '1px solid' : 'none',
        borderColor: 'surface.extralight',
        textAlign: 'right'
      }}
    >
      <Text
        variant="body.caption"
        sx={{
          color: dark ? 'text.primary' : 'background',
          marginLeft: 'auto',
          marginTop: 'auto'
        }}
      >
        {title}
      </Text>
    </Flex>
  );
}

function ColorGroup({ children, rest }) {
  return (
    <Flex sx={{ flexWrap: 'wrap', marginBottom: 5 }} {...rest}>
      {children}
    </Flex>
  );
}

function ColorHeading({ ...rest }) {
  return (
    <LinkHeading
      as="h2"
      variant="display.h4"
      sx={{ marginBottom: 3 }}
      {...rest}
    />
  );
}

function ColorText({ ...rest }) {
  return (
    <Text as="p" variant="body.paragraph" sx={{ marginBottom: 4 }} {...rest} />
  );
}

export const Default = () => (
  <Box p={4}>
    <Heading as="h1" sx={{ marginBottom: 4 }}>
      Color Bonds
    </Heading>

    <ColorHeading id="primary">Primary</ColorHeading>
    <ColorText>Main color used by most components.</ColorText>
    <ColorGroup>
      <ColorItem title="Regular" color="primary.regular" />
      <ColorItem title="Contrast" color="primary.contrast" dark border />
    </ColorGroup>

    <ColorHeading id="secondary">Secondary</ColorHeading>
    <ColorText>Secondary color used for alternative styling.</ColorText>
    <ColorGroup>
      <ColorItem title="Light" color="secondary.light" />
      <ColorItem title="Regular" color="secondary.regular" />
      <ColorItem title="Bold" color="secondary.bold" />
      <ColorItem title="Contrast" color="secondary.contrast" dark border />
    </ColorGroup>

    <ColorHeading id="accent">Accent</ColorHeading>
    <ColorText>A contrast color used sparingly.</ColorText>
    <ColorGroup>
      <ColorItem title="Light" color="accent.light" dark border />
      <ColorItem title="Regular" color="accent.regular" dark />
      <ColorItem title="Medium" color="accent.medium" dark />
      <ColorItem title="Bold" color="accent.bold" />
      <ColorItem title="Contrast" color="accent.contrast" dark border />
    </ColorGroup>

    <ColorHeading id="error">Error</ColorHeading>
    <ColorText>
      Functional color used to represent interface elements that the user should
      be aware of.
    </ColorText>
    <ColorGroup>
      <ColorItem title="Light" color="error.light" dark border />
      <ColorItem title="Regular" color="error.regular" />
      <ColorItem title="Medium" color="error.medium" />
      <ColorItem title="Bold" color="error.bold" />
      <ColorItem title="Contrast" color="error.contrast" dark border />
    </ColorGroup>

    <ColorHeading id="warning">Warning</ColorHeading>
    <ColorText>
      Functional color used to represent potentially dangerous actions.
    </ColorText>
    <ColorGroup>
      <ColorItem title="Light" color="warning.light" dark border />
      <ColorItem title="Regular" color="warning.regular" />
      <ColorItem title="Medium" color="warning.medium" />
      <ColorItem title="Bold" color="warning.bold" />
      <ColorItem title="Contrast" color="warning.contrast" dark border />
    </ColorGroup>

    <ColorHeading id="Success">Success</ColorHeading>
    <ColorText>
      Functional color used to indicate a successful completion of an action.
    </ColorText>
    <ColorGroup>
      <ColorItem title="Light" color="success.light" dark border />
      <ColorItem title="Regular" color="success.regular" />
      <ColorItem title="Medium" color="success.medium" />
      <ColorItem title="Bold" color="success.bold" />
      <ColorItem title="Contrast" color="success.contrast" dark border />
    </ColorGroup>

    <ColorHeading id="information">Information</ColorHeading>
    <ColorText>
      Functional color used to present information to the user.
    </ColorText>
    <ColorGroup>
      <ColorItem title="Light" color="info.light" dark border />
      <ColorItem title="Regular" color="info.regular" />
      <ColorItem title="Medium" color="info.medium" />
      <ColorItem title="Bold" color="info.bold" />
      <ColorItem title="Contrast" color="info.contrast" dark border />
    </ColorGroup>

    <ColorHeading id="surface">Surface</ColorHeading>
    <ColorText>A common muted color used for neutral elements.</ColorText>
    <ColorGroup sx={{ flexWrap: 'wrap' }}>
      <ColorItem title="Extra-Thin" color="surface.extrathin" dark border />
      <ColorItem title="Thin" color="surface.thin" dark />
      <ColorItem title="Extra-Light" color="surface.extralight" />
      <ColorItem title="Light" color="surface.light" />
      <ColorItem title="Regular" color="surface.regular" />
      <ColorItem title="Medium" color="surface.medium" />
      <ColorItem title="Semi-Bold" color="surface.semibold" />
      <ColorItem title="Bold" color="surface.bold" />
      <ColorItem title="Semi-Black" color="surface.semiblack" />
      <ColorItem title="Black" color="surface.black" />
    </ColorGroup>

    <ColorHeading id="action">Action</ColorHeading>
    <ColorText>Colors for intractable elements.</ColorText>
    <ColorGroup>
      <ColorItem title="Active" color="action.active" />
      <ColorItem title="Hover" color="action.hover" />
      <ColorItem title="Selected" color="action.selected" />
      <ColorItem title="Disabled" color="action.disabled" />
      <ColorItem
        title="Disabled Background"
        color="action.disabledBackground"
        dark
        border
      />
    </ColorGroup>

    <ColorHeading id="text">Text</ColorHeading>
    <ColorText>Body foreground colors.</ColorText>
    <ColorGroup>
      <ColorItem title="Primary" color="text.primary" />
      <ColorItem title="Secondary" color="text.secondary" />
      <ColorItem title="Title" color="text.title" />
      <ColorItem title="Placeholder" color="text.placeholder" />
      <ColorItem title="Disabled" color="text.disabled" dark />
    </ColorGroup>

    <ColorHeading id="background">Background</ColorHeading>
    <ColorText>Body background color.</ColorText>
    <ColorGroup>
      <ColorItem title="Regular" color="background" dark border />
    </ColorGroup>

    <ColorHeading id="divider">Divider</ColorHeading>
    <ColorText>Color for divider cells.</ColorText>
    <ColorGroup>
      <ColorItem title="Regular" color="divider" dark border />
    </ColorGroup>
  </Box>
);
