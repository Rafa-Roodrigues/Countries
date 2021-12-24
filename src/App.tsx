import { GlobalStyle } from "./styles/global";
import { Router } from './routes';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import { dark } from './styles/theme/dark';
import { light } from './styles/theme/light';
import { useTheme } from "./hooks/useTheme";
import { CountriesProvider } from "./hooks/useCountries";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { themeIsActive } = useTheme();

  return (
    <>
      <ThemeProvider theme={themeIsActive ? light : dark}>
        <CountriesProvider>
          <Router/>
          <ToastContainer autoClose={2500}/>
          <GlobalStyle/>
        </CountriesProvider>
      </ThemeProvider>
    </>
  )
}

export default App;