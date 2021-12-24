import { MdDarkMode, MdLightMode} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

import { Container, Content} from './style';

export function Header() {
  const { changeTheme, themeIsActive  } = useTheme();
  
  return (
    <Container>
      <Content>
        <Link to="/"><h2>Where in the world?</h2></Link>
        <button
          onClick={changeTheme}
          type="button"
        >
         {themeIsActive ? (
          <>
            <MdLightMode/>
            Light Mode
          </>
         ) : (
          <>
            <MdDarkMode/>
            Dark Mode
          </>
         ) }
        </button>
      </Content>
    </Container>
  )
}