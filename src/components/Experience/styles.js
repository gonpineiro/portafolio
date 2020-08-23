import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  min-height: 660px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  margin-top: 0;
  letter-spacing: 1.5px;
  margin-bottom: 55px;
  font-size: 35px;
`;

export const SectionExp = styled.section`
  width: 100%;
  min-height: 660px;
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    max-height: 1000px;
    flex-direction: column;
  }
`;

export const SectionInfo = styled.section`
  background: #191919;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const P = styled.p`
  font-size: 20px;
  margin: 40px 0;
  padding: 0 10px;
  font-weight: 400;
`;

export const SectionImg = styled.section`
  background: white;
  height: 660px;
  width: 100%;
  @media (max-width: 720px) {
    display: none;
  }
`;
