import React from "react";
import {
  Section,
  SectionInfo,
  SectionImg,
  InfoTitle,
  P,
  InfoTitleDescr,
} from "./styles";

const Presentation = () => {
  return (
    <Section>
      <SectionInfo>
        <InfoTitleDescr>GONZALO PIÑEIRO</InfoTitleDescr>
        <InfoTitle>Frontend and Backend Development</InfoTitle>
        <P>
          Desarrollador de aplicaciones de escritorio y web con mas de 5 años de
          experiencia.
        </P>
        <P>
          Actualmente trabajo desarrollando aplicaciones web solucionando
          problemas o implementando productos a empresas.
        </P>
      </SectionInfo>
      <SectionImg> asd</SectionImg>
    </Section>
  );
};

export default Presentation;
