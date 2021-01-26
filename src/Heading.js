import styled from 'styled-components';
import { variant } from 'styled-system';
import Text from './Text';

const variants = {
  1: {
    fontSize: 8
  },
  // Heading
  2: {
    fontSize: 7
  },
  3: {
    fontSize: 6
  },
  4: {
    fontSize: 3,
    fontWeight: 600
  },
  5: {
    fontSize: 2,
    fontWeight: 600
  },
  6: {
    fontSize: 1,
    fontWeight: 600
  }
};

const Heading = styled(Text)(
  {
    margin: 0,
    lineHeight: 'heading'
  },
  variant({ variants, prop: 'level' })
);

export default Heading;
