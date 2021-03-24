import React from 'react';
import ComponentCard from './ComponentCard';
import { Text } from 'krado-react';

export default function TextExample() {
  return (
    <ComponentCard>
      <Text marginBottom={3}>Body</Text>
      <Text variant="smallBody" marginBottom={3}>
        Small Body
      </Text>
      <Text variant="bold" marginBottom={3}>
        Bold
      </Text>
      <Text variant="callout" marginBottom={3}>
        Callout
      </Text>
      <Text variant="caption" marginBottom={3}>
        Caption
      </Text>
      <Text variant="footnote" marginBottom={3}>
        Footnote
      </Text>
      <Text variant="pretext" marginBottom={3}>
        Pre Text
      </Text>
    </ComponentCard>
  );
}
