import { Container } from './styles';

export function FormBox({ children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}