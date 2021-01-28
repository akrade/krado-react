import styled from 'styled-components';
import { variant } from 'styled-system';
import Text from './Text';

const variants = {
  display,
  extraLarge,
  large,
  title,
  subtitle,
  quote,
  extraSmall
};

const Title = styled(Text)(
  {
    margin: 0
  },
  variant({
    variants
  })
);
