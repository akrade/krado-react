import { Divider as ThemeUiDivider } from 'theme-ui';

export default function Divider({ ...rest }) {
  return <ThemeUiDivider sx={{ color: 'divider' }} {...rest} />;
}
