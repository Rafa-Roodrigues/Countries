import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --max-width: 1100px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {c
    background: #555;
  }

  main {
    min-height: calc(100vh - 12rem);
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }

  body, input, button, textarea {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    font-size: 16px;
     
    @media (max-width: 499px) {
      font-size: 87%; /* 14px */
    }

    @media (min-width: 775px) {
      font-size: 93.5%; /* 15px */
    }

    @media (min-width: 1060px) {
      font-size: 100%; /* 16px */
    }
  }
`;