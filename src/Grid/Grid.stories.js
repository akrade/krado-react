import Grid from './Grid';
import Box from '../Box/Box';

export default {
  title: 'Grid',
  component: Grid
};

const GridItem = ({ ...props }) => (
  <Box p={4} sx={{ fontWeight: 'bold', borderRadius: 1 }} {...props} />
);

export const Default = () => (
  <Grid columns={2}>
    <GridItem color="primary.contrast" backgroundColor="primary.regular">
      Grid
    </GridItem>
    <GridItem backgroundColor="secondary.light">Grid</GridItem>
    <GridItem backgroundColor="secondary.light">Grid</GridItem>
    <GridItem color="primary.contrast" backgroundColor="primary.regular">
      Grid
    </GridItem>
  </Grid>
);
