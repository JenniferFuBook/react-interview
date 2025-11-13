import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
    `}
  />
);

export default GlobalStyle;
