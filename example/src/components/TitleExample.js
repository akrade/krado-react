import React from 'react';
import ComponentCard from './ComponentCard';
import { Title } from 'krado-react';

export default function TitleExample() {
  return (
    <ComponentCard flex={2} alignItems="flex-start">
      <Title variant="display">Display</Title>
      <Title variant="extraLarge">XL Title</Title>
      <Title variant="large">Large Title</Title>
      <Title>Title</Title>
      <Title variant="subtitle">Subtile</Title>
      <Title variant="quote">Quote</Title>
      <Title variant="extraSmall">X Small</Title>
    </ComponentCard>
  );
}
