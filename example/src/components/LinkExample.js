import React from 'react';
import ComponentCard from './ComponentCard';
import { Link } from 'krado-react';

export default function LinkExample() {
  return (
    <ComponentCard>
      <Link
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Link
      </Link>
    </ComponentCard>
  );
}
