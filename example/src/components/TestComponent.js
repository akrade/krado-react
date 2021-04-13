import React from 'react';
import ComponentCard from './ComponentCard';
import { Title } from 'krado-react';

export default function TestComponent() {
  return (
    <ComponentCard>
      <Title variant="extraSmall" marginBottom={5}>
        Test Card
      </Title>
      <Title fontWeight="bold">Title</Title>
    </ComponentCard>
  );
}
