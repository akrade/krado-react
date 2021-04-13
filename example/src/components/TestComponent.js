import React from 'react';
import ComponentCard from './ComponentCard';
import { Title } from 'krado-react';

export default function TestComponent() {
  return (
    <ComponentCard>
      <Title fontWeight="bold">Title</Title>
    </ComponentCard>
  );
}
