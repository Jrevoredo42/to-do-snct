import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{
  --background: #ECC94B;
  --brown: #5F370E;
  --yellow: #F6E05E;
  --red: #C53030;
  --green: #38A169;
  --cyan: #00A3C4;
}


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body{
    background: var(--background);
    

  }
`