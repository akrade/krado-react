import Container from './Container';

export default {
  title: 'Container',
  component: Container
};

export const Default = () => (
  <Container paddingY={4} backgroundColor="muted">
    Centered container
  </Container>
);
