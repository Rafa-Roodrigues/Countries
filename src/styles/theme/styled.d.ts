import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: string,

    colors: {
      elements: string;
      background: string;
      text: string;
      shadow: string;
      shadowHeader: string;
      input?: string;
    }
  }
}