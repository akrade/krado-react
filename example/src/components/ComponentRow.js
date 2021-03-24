import React from 'react';
import { Flex } from 'krado-react';

export default function ComponentRow(props) {
  return (
    <Flex
      flexWrap="wrap"
      flexDirection={['column', null, null, 'row']}
      {...props}
    />
  );
}
