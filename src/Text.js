import styled from 'styled-components';
import { space, color, layout, typography, position } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Text = styled.div(
  { color: 'red' },
  space,
  color,
  layout,
  typography,
  position
);

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.position
};

export default Text;
