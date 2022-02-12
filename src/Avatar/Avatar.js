import { Avatar as ThemeUiAvatar } from 'theme-ui';
import Box from '../Box/Box';
import Flex from '../Flex/Flex';

export default function Avatar({ src, children, ...rest }) {
  if (src) {
    return <ThemeUiAvatar src={src} {...rest} />;
  }

  return (
    <Flex
      sx={{
        variant: 'images.avatar',
        overflow: 'hidden',
        textAlign: 'center',
        backgroundColor: 'accent.light',
        borderRadius: 4
      }}
      {...rest}
    >
      <Box
        variant="text.body.smallParagraph"
        sx={{ margin: 'auto', fontWeight: 'bold' }}
      >
        {children}
      </Box>
    </Flex>
  );
}
