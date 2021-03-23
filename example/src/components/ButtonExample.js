import React from 'react';
import ComponentCard from './ComponentCard';
import { Flex, Button } from 'krado-react';

export default function ButtonExample() {
  return (
    <ComponentCard flex={2}>
      <Flex
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button>Button</Button>
        <Button buttonSize="small">Button</Button>
        <Button variant="outline.light">Button</Button>
        <Button variant="outline.light" buttonSize="small">
          Button
        </Button>
        <Flex
          backgroundColor="black"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          borderRadius={1}
          padding={3}
        >
          <Button variant="outline.dark">Button</Button>
          <Button variant="outline.dark" buttonSize="small">
            Button
          </Button>
        </Flex>
        <Button variant="clear">Button</Button>
        <Button variant="success">Button</Button>
        <Button variant="danger">Button</Button>
      </Flex>
    </ComponentCard>
  );
}
