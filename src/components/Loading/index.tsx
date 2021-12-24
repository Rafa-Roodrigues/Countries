import { Container, Animation } from './styled';

export function Loading() {
  return (
    <Container>
      <Animation>
        <div></div><div></div><div></div><div></div>
      </Animation>
    </Container>
  )
}