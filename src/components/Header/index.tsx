import { MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Content} from './style';

export function Header() {
  return (
    <Container>
      <Content>
        <Link to="/"><h2>Where in the world?</h2></Link>

        <button type="button">
          <MdDarkMode/>
          Dark Mode
        </button>
      </Content>
    </Container>
  )
}