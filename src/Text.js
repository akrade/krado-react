import React from 'react';
import styled from 'styled-components';
import { typography } from 'styled-system';

const BaseText = styled.div`
  ${typography}
`;

export default function Text(props) {
  return <BaseText>{props.children}</BaseText>;
}
