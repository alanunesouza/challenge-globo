import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
  }

  body{
    /* background: #312e38; */
    background: #FFF;
    color: rgba(0, 0, 0, 1);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    font-weight: normal;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }
`;
