import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const Skills = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 500px) {
  justify-content: center;
  }
`;

export const SkillCard = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #191919;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    & > figure {
      opacity: 1;
    }
    & > h1 {
      opacity: 1;
    }
  }

  @media (max-width: 1500px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 1250px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 840px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 730px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 440px) {
    width: 100px;
    height: 100px;
  }
`;

export const SkillFigure = styled.figure`
  display: flex;
  opacity: 0.4;
  will-change: opacity;
  transition: opacity 1s ease;
  margin: auto;
`;

export const SkillTitle = styled.h1`
  font-weight: 400;
  text-align: center;
  opacity: 0.4;
  cursor: pointer;
  margin-top: 0;
  transition: opacity 1s ease;
  @media (max-width: 440px) {
    margin-bottom: 5px;
  }
  @media (max-width: 290px) {
    font-size: 10px;
  }
`;

export const SectionInfo = styled.section`
  height: 100%;
  background: #191919;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const P = styled.p`
  font-size: 25px;
  margin: 40px 0;
  font-weight: 400;
`;

export const SectionImg = styled.section`
  background: white;
  height: 100%;
  width: 100%;
`;
