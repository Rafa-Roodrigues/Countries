import { useContext } from 'react';
import { MdDarkMode, MdLightMode} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

import { Container, Content} from './style';

export function Header() {
  const { changeTheme, themeIsActive } = useContext(ThemeContext);
  
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
            <MdDarkMode/>
            Dark Mode
          </>
           
         ) : (
          <>
            <MdLightMode/>
            Light Mode
          </>
          
         ) }
        </button>
      </Content>
    </Container>
  )
}