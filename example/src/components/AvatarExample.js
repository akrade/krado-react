import React from 'react';
import ComponentCard from './ComponentCard';
import { Flex, Title, Avatar } from 'krado-react';
import avatarPlaceHolder from '../assets/images/avatar-placeholder.png';

export default function AvatarExample() {
  return (
    <ComponentCard>
      <Flex
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Title variant="extraSmall" marginBottom={5}>
          Avatar
        </Title>
        <Avatar src={avatarPlaceHolder} my="auto" />
      </Flex>
    </ComponentCard>
  );
}
