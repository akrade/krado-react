import React from 'react';
import ComponentCard from './ComponentCard';
import { Heading } from 'krado-react';

export default function HeadingExample() {
  return (
    <ComponentCard flex={2} alignItems="flex-start">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </ComponentCard>
  );
}