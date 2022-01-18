import Heading from '../Heading/Heading';
import { MdLink } from 'react-icons/md';

export default function LinkHeading(props) {
  if (!props.id) return <Heading {...props} />;

  return (
    <Heading sx={{ display: 'flex' }} {...props}>
      <span sx={{ marginRight: 3 }}>{props.children}</span>
      <a
        href={`#${props.id}`}
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
