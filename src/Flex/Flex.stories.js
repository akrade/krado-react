import Flex from './Flex';
import Box from '../Box/Box';

export default {
  title: 'Flex',
  component: Flex
};

export const Default = () => (
  <Flex>
    <Box
      padding={4}
      color="primary.contrast"
      backgroundColor="primary.regular"
      sx={{ flex: '1 1 auto', fontWeight: 'bold', borderRadius: 1 }}
    >
      Flex
    </Box>
    <Box
      padding={4}
      color="secondary.contrast"
      backgroundColor="secondary.regular"
      sx={{ fontWeight: 'bold', borderRadius: 1 }}
    >
      Box
    </Box>
  </Flex>
);
