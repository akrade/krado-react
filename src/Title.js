import styled from 'styled-components';
import { variant } from 'styled-system';
import Text from './Text';
import themeGet from '@styled-system/theme-get';

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

const Title = styled(Text)`
  font-weight: 400;
  font-family: ${themeGet('fonts.display')};
  letter-spacing: ${themeGet('letterSpacings.display')};

  ${variant({
    variants
  })}
`;

Title.propTypes = Text.propTypes;

Title.defaultProps = {
  variant: 'title'
};

export default Title;
