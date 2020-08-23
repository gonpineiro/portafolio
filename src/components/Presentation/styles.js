import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 660px;
  display: flex;
  flex-direction: row;
  @media (max-width: 720px) {
    min-height: 420px;
  }
`;

export const SectionInfo = styled.section`
  height: 100%;
  background: #191919;
  min-height: 660px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media (max-width: 1200px) {
    min-height: 420px;
  }
`;

export const InfoTitle = styled.h1`
  font-weight: 400;
  font-size: 32px;
  margin-top: 0;
  @media (max-width: 720px) {
    font-size: 25px;
  }
`;

export const InfoTitleDescr = styled.h1`
  font-weight: 400;
  font-size: 32px;
`;

export const SectionImg = styled.section`
  background: white;
  height: 660px;
  width: 100%;
  min-height: 660px;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const P = styled.p`
  font-size: 20px;
  margin-bottom: 0;
  font-weight: 400;
`;
