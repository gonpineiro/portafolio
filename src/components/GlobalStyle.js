// globalStyles.js
import styled, { createGlobalStyle } from "styled-components";

export const Hr = styled.hr`
  color: white;
  border: 1px solid white;
  margin-top: 55px;
  width: 100%;
  margin-bottom: 55px;
`;

export const Svg = styled.svg`
  width: 120px;
  height: auto;
  cursor: pointer;
  margin: auto;
`;

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 15px 100px;
    background: #000000;
    color: white;
    font-family: 'Maven Pro';
  }

  #root{
    display:flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
