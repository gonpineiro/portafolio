import React from "react";

import {
  Section,
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
  PHPLogo,
  BT4Logo,
  ReduxLogo,
  CLogo,
  CiscoLogo,
} from "../svg";

import { TitleSection } from "../GlobalStyle";

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
      <TitleSection>Habilidades</TitleSection>
      <Skills>
        <SkillCard>{contentCard("CSS3", <CSS3Logo />)}</SkillCard>
        <SkillCard>{contentCard("HTML5", <HTMLLogo />)}</SkillCard>
        <SkillCard>{contentCard("JavaScript", <JSLogo />)}</SkillCard>
        <SkillCard>{contentCard("Bootstrap", <BT4Logo />)}</SkillCard>
        <SkillCard>{contentCard("Webpack", <WebpackLogo />)}</SkillCard>
        <SkillCard>{contentCard("ReactJs", <ReactLogo />)}</SkillCard>
        <SkillCard>{contentCard("Redux", <ReduxLogo />)}</SkillCard>
        <SkillCard>{contentCard("NodeJs", <NodeLogo />)}</SkillCard>
        <SkillCard>{contentCard("PHP", <PHPLogo />)}</SkillCard>
        <SkillCard>{contentCard("MySQL", <MYSQLLogo />)}</SkillCard>
        <SkillCard>{contentCard("C", <CLogo />)}</SkillCard>
        <SkillCard>{contentCard("Cisco", <CiscoLogo />)}</SkillCard>
      </Skills>
    </Section>
  );
};

export default Skill;
