import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Montserrat';
  }
  body{
    background: #F9F9F9;
  }
  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }
`;
