import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans Condensed", sans-serif;
    padding: 0 40px;


    @media screen and (max-width: 800px){
      padding: 0 10px;
    }
  }


  a {
    text-decoration: none;
    color: black;
  }
`;
