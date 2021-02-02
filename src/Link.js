import styled from 'styled-components';
import Text from './Text';
import themeGet from '@styled-system/theme-get';

const Link = styled(Text)`
  color: ${themeGet('accent', 'royalblue')};
`;

Link.defaultProps = {
  as: 'a',
  href: '#'
};

Link.propTypes = Text.propTypes;

export default Link;
