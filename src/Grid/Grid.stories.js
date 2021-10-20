import React from 'react';
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
    <GridItem color="background" bg="primary">
      Grid
    </GridItem>
    <GridItem bg="lightGray">Grid</GridItem>
    <GridItem bg="lightGray">Grid</GridItem>
    <GridItem color="background" bg="primary">
      Grid
    </GridItem>
  </Grid>
);
