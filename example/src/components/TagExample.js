import React from 'react';
import ComponentCard from './ComponentCard';
import { Tag } from 'krado-react';

export default function TagExample() {
  return (
    <ComponentCard flexDirection="row">
      <Tag>Tag</Tag>
      <Tag backgroundColor="secondary" color="white">
        Tag
      </Tag>
      <Tag tagType="outline">Tag</Tag>
    </ComponentCard>
  );
}
