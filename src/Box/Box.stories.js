import Box from './Box';

export default {
  title: 'Box',
  component: Box
};

export const Default = () => (
  <Box p={4} color="background" bg="primary" sx={{ borderRadius: 1 }}>
    This is a box
  </Box>
);
