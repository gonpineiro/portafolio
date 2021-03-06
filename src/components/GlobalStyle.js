import styled, { createGlobalStyle } from 'styled-components';
import { NavLink as LinkRouter } from 'react-router-dom';

import code from '../assets/code.png';

export const TitleSection = styled.h1`
    position: relative;
    letter-spacing: 1.5px;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 35px;
    font-weight: 400;
`;

export const Section = styled.section`
    width: 100%;
    overflow: hidden;
    min-height: 660px;
    display: flex;
    flex-direction: column;
    @media (max-width: 720px) {
        min-height: 420px;
    }
`;

export const CardInfo = styled.section`
    width: 100%;
    overflow: hidden;
    min-height: 660px;
    display: flex;
    flex-direction: row;
    @media (max-width: 1200px) {
        max-height: 1000px;
    }
    @media (max-width: 720px) {
        min-height: 420px;
    }
`;

export const SectionImg = styled.section`
    background: #191919;
    position: relative;
    display: flex;
    width: 100%;
    @media (max-width: 1200px) {
        display: none;
    }
`;
export const SectionImgExp = styled.section`
    background-image: url(${code});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    width: 100%;
    @media (max-width: 1200px) {
        display: none;
    }
`;

export const Img = styled.img`
    margin: auto;
    border-radius: 100%;
`;

export const SectionInfo = styled.section`
    background: #191919;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
`;

export const InfoTitle = styled.h1`
    font-weight: 400;
    font-size: 32px;
    position: relative;
    // margin-top: 0;
    @media (max-width: 720px) {
        font-size: 25px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    position: relative;
    margin: 40px 0;
    padding: 0 10px;
    font-weight: 400;
`;

export const Hr = styled.hr`
    color: white;
    border: 1px solid white;
    margin-top: 55px;
    width: 100%;
    margin-bottom: 55px;
`;
export const HrSection = styled.hr`
    color: white;
    position: relative;
    border: 1px solid white;
    margin-top: 55px;
    width: 300px;
    margin: 0;
    margin-bottom: 55px;
`;

export const Svg = styled.svg`
    width: 180px;
    height: auto;
    cursor: pointer;
    margin: auto;
    @media (max-width: 1600px) and (min-width: 440px) {
        width: 100px;
    }
    @media (max-width: 440px) {
        width: 60px;
    }
`;

export const Link = styled(LinkRouter)`
    position: relative;
    margin: 0;
    font-size: 15px;
    margin-right: 30px;
    letter-spacing: 0.8px;
    font-weight: 400;
    color: white;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 500px) {
        font-size: 13px;
        margin-right: 20px;
    }
`;

const GlobalStyle = createGlobalStyle`
  
  body {
    margin: 0;
    padding: 15px 100px;
    background: #000000;
    color: white;
    font-family: 'Maven Pro';
    @media (max-width: 720px) {
      padding: 15px 20px;
    }
  }

  #root{
    display:flex;
    flex-direction: column;
  }
  .is-active{
      color: rgb(182,182,182);
  }
`;

export default GlobalStyle;
