import React from 'react';
import { Card } from 'krado-react';

export default function ComponentCard(props) {
  return (
    <Card
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      flex={1}
      height="auto"
      margin={3}
      {...props}
    />
  );
}
