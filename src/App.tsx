import { GlobalStyle } from "./styles/global";
import { Router } from './routes';

import { ThemeProvider } from 'styled-components';

import dark from './styles/theme/dark';
import light from './styles/theme/light';
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { themeIsActive } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={themeIsActive ? dark : light}>
        <Router/>
        <GlobalStyle/>
      </ThemeProvider>
    </>
    
  )
}

export default App;
