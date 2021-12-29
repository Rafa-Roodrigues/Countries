import { Container, Button } from './style';

export function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada</h1>
      <Button to="/">Voltar a pagina inicial</Button>
    </Container>
  )
}