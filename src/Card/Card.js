import Box from '../Box/Box';

export default function Card({ children }) {
  return (
    <Box
      sx={{
        padding: [4, 5],
        borderRadius: 3,
        backgroundColor: 'background',
        boxShadow: 'soft.low',

        transition: 'transform 325ms ease, box-shadow 325ms ease',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 'soft.highMiddle'
        }
      }}
    >
      {children}
    </Box>
  );
}
