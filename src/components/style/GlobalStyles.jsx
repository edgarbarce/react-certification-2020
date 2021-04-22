import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    }
    
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      color: ${({ theme }) => theme.text};
      margin: 0;
      font-size: 0.875rem;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      line-height: 1.43;
      letter-spacing: 0.01071em;
      background: ${({ theme }) => theme.body};
      min-width: fit-content;
    }
`;
