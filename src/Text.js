import styled from 'styled-components';
import { space, color, layout, typography, position } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import themeGet from '@styled-system/theme-get';

const Text = styled.div`
  color: ${themeGet('colors.text', 'black')};
  /* font-family: ${themeGet('fonts.body')}; */

  ${space}
  ${color}
  ${layout}
  ${typography}
  ${position}
`;

Text.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.typography,
  ...propTypes.position
};

export default Text;
