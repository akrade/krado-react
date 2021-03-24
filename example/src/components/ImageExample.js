import React from 'react';
import ComponentCard from './ComponentCard';
import { Flex, Title, Image } from 'krado-react';
import imagePlaceholder from '../assets/images/assortment-of-natural-ingredients-on-wooden-table.jpg';

export default function ImageExample() {
  return (
    <ComponentCard>
      <Flex
        flexDirection="column"
        justifyContent="space=between"
        alignItems="center"
      >
        <Title variant="extraSmall" marginBottom={5}>
          Image
        </Title>
        <Image src={imagePlaceholder} />
      </Flex>
    </ComponentCard>
  );
}
