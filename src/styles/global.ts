import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    color: ${(props) => props.theme["gray-100"]};
      -webkit-font-smoothing: antialiased;
  }
  
  body, input, button, textarea {
    font: 400 1rem "Nunito", sans-serif;
  }
`;

export default GlobalStyles;
