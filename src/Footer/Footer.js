import Flex from '../Flex/Flex';
import Box from '../Box/Box';
import Text from '../Text/Text';

export function FooterFootnote({ ...rest }) {
  return (
    <Text
      variant="body.footnote"
      sx={{ marginBottom: [1, 0], textAlign: ['center', null, 'left'] }}
      {...rest}
    />
  );
}

export function FooterContent({ ...rest }) {
  return <Box sx={{ textAlign: ['center', null, 'right'] }} {...rest} />;
}
export function FooterItem({ children, ...rest }) {
  return (
    <a
      sx={{
        marginLeft: 3,
        color: 'inherit',
        textDecoration: 'none'
      }}
      {...rest}
    >
      <Text variant="body.footnote">{children}</Text>
    </a>
  );
}

export function Footer({ ...rest }) {
  return (
    <Flex
      sx={{
        marginTop: 'auto',
        flexDirection: ['column', null, 'row'],
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: [3, 4, 5],
        paddingY: 3,
        backgroundColor: 'background',
        boxShadow: 'soft.low'
      }}
      {...rest}
    />
  );
}
