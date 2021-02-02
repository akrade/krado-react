import React from 'react';
import Box from './Box';

function Container(props) {
  return (
    <Box mx="auto" px={[3, 4, 5]} maxWidth={1440}>
      {props.children}
    </Box>
  );
}

Container.propTypes = Box.propTypes;

export default Container;
