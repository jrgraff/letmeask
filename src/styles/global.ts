import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #f8f8f8;

    --box-background: #f4f0ff;

    --gray-dark: #737380;
    --gray-medium: #a8a8b3;
    --gray-light: #cecece;

    --pink-dark: #e559f9;
    --pink-medium: #ff59f8;
    --pink-light: #d67ee2;

    --black: #29292e;

    --white: #fefefe;

    --purple: #6f4bd8;

    --red: #d73754;

    --blue: #485bff;
  }

  .dark-mode:root {
    --background: #121212;

    --box-background: #1a1330;

    --purple: #482b9e;
    
    --white: #191B1C;

    --red: #ac273f;

    --gray-dark: #2C2C2C;
    --gray-medium: #323232;
    --gray-light: #373737;

    input, h1, h2, h3, h4, h5, h6, b, strong {
      color: #f8f8f8 !important;
    }

    button, span, p, textarea {
      color: #f5f5f5 !important;
    }

    img[alt="Letmeask"] {
      filter: invert(1) hue-rotate(180deg) !important;
    }
  }

  body {
    background: var(--background);
  }
  
  body,
  input,
  button,
  textarea {
    font: 400 1rem "Roboto", sans-serif;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--black);
  }
`;