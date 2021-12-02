import { Text as ThemeUiText } from 'theme-ui';
import PropTypes from 'prop-types';

export default function Text({ ...rest }) {
  return <ThemeUiText {...rest} />;
}

Text.propTypes = {
  variant: PropTypes.oneOf([
    'body.summary',
    'body.paragraph',
    'body.paragraph',
    'body.smallParagraph',
    'body.bold',
    'body.callout',
    'body.caption',
    'body.footnote',
    'body.pretext',
    'display.display',
    'display.quote'
  ])
};

Text.defaultProps = {
  variant: 'body.smallParagraph'
};
