import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import Text from './Text';

const variants = {
  display: {
    fontSize: 11
  },
  extraLarge: {
    fontSize: 10
  },
  large: {
    fontSize: 9
  },
  title: {
    fontSize: 8
  },
  subtitle: {
    fontSize: 7
  },
  quote: {
    fontSize: 6,
    fontStyle: 'italic'
  },
  extraSmall: {
    fontSize: 6,
    fontWeight: 500
  }
};

const BaseTitle = styled(Text)(
  {
    fontWeight: 400
  },
  variant({
    variants
  })
);

function Title(props) {
  return (
    <BaseTitle fontFamily="display" letterSpacing="display" {...props}>
      {props.children}
    </BaseTitle>
  );
}

Title.propTypes = Text.propTypes;

Title.defaultProps = {
  variant: 'title'
};

export default Title;
