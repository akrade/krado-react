import { Container as ThemeUiContainer } from 'theme-ui';

export default function Box({ ...rest }) {
  return <ThemeUiContainer paddingX={[3, 4, 5]} {...rest} />;
}
