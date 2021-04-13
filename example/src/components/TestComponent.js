import React from 'react';
import ComponentCard from './ComponentCard';
import { Heading, Title } from 'krado-react';

export default function TestComponent() {
  return (
    <ComponentCard>
      <Heading>Test Card</Heading>
      <Title fontWeight="bold">Title</Title>
    </ComponentCard>
  );
}
