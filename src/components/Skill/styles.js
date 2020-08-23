import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 660px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  letter-spacing: 1.5px;
  margin-top: 0;
  margin-bottom: 55px;
  font-size: 35px;
`;

export const Skills = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  opacity: 0.4;
  cursor: pointer;
  margin-top: 0;
  transition: opacity 1s ease;
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
