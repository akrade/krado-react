import Heading from '../Heading/Heading';
import { MdLink } from 'react-icons/md';

export default function LinkHeading({ id, children, ...rest }) {
  if (!id) return <Heading {...rest} />;

  return (
    <Heading id={id} sx={{ display: 'flex' }} {...rest}>
      <span sx={{ marginRight: 3 }}>{children}</span>
      <a
        href={`#${id}`}
        sx={{
          marginTop: '2px',
          color: 'primary.regular',
          textDecoration: 'none'
        }}
      >
        <MdLink />
      </a>
    </Heading>
  );
}
LinkHeading.defaultProps = {
  variant: 'display.h4'
};
