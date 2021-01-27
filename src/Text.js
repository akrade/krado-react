import React from 'react';
import styled from 'styled-components';
import { space, layout, color, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const BaseText = styled.div`
  ${space}
  ${layout}
  ${color}
  ${typography}
`;

function Text(props) {
  return (
    <BaseText fontSize={3} fontFamily="body" color="text" {...props}>
      {props.children}
    </BaseText>
  );
}

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography
};

export default Text;
