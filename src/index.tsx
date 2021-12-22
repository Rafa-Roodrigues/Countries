import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ProviderTheme } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ProviderTheme>
      <App />
    </ProviderTheme>
  </React.StrictMode>,
  document.getElementById('root')
);