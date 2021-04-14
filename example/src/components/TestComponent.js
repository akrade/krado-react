import React from 'react';
import ComponentCard from './ComponentCard';
import { Text, Title } from 'krado-react';

export default function TestComponent() {
  return (
    <ComponentCard>
      <Title variant="extraSmall" marginBottom={5}>
        Test Card
      </Title>

      <Title fontWeight="bold" fontSize={11}>
        Title
      </Title>
      <Text fontWeight="bold" fontSize={6}>
        Text
      </Text>
    </ComponentCard>
  );
}
