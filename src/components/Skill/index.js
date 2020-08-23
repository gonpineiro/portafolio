import React from "react";

import {
  Section,
  Title,
  Skills,
  SkillCard,
  SkillTitle,
  SkillFigure,
} from "./styles";

import {
  CSS3Logo,
  HTMLLogo,
  JSLogo,
  MYSQLLogo,
  ReactLogo,
  NodeLogo,
  WebpackLogo,
  PythonLogo,
  PHPLogo,
  BT4,
} from "../svg";

const contentCard = (str, comp) => {
  return (
    <>
      <SkillFigure>{comp}</SkillFigure>
      <SkillTitle>{str}</SkillTitle>
    </>
  );
};

const Skill = () => {
  return (
    <Section>
      <Title>Habilidades</Title>
      <Skills>
        <SkillCard>{contentCard("CSS3", <CSS3Logo />)}</SkillCard>
        <SkillCard>{contentCard("HTML5", <HTMLLogo />)}</SkillCard>
        <SkillCard>{contentCard("JavaScript", <JSLogo />)}</SkillCard>
        <SkillCard>{contentCard("NodeJs", <NodeLogo />)}</SkillCard>
        <SkillCard>{contentCard("ReactJs", <ReactLogo />)}</SkillCard>
        <SkillCard>{contentCard("MySQL", <MYSQLLogo />)}</SkillCard>
        <SkillCard>{contentCard("Webpack", <WebpackLogo />)}</SkillCard>
        <SkillCard>{contentCard("Python", <PythonLogo />)}</SkillCard>
        <SkillCard>{contentCard("PHPd", <PHPLogo />)}</SkillCard>
        <SkillCard>{contentCard("BT4", <BT4 />)}</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
        <SkillCard>1</SkillCard>
      </Skills>
    </Section>
  );
};

export default Skill;
