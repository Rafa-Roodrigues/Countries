import { GlobalStyle } from "./styles/global";

import light from './styles/theme/light';
import dark from './styles/theme/dark';

import { Router } from './routes';

import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Router/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App;
