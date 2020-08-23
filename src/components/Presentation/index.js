import React from "react";

import {
  Paragraph,
  Section,
  SectionImg,
  SectionInfo,
  CardInfo,
  InfoTitle,
} from "../GlobalStyle";

const Presentation = () => {
  return (
    <Section>
      <CardInfo>
        <SectionInfo>
          <InfoTitle>Frontend and Backend Development</InfoTitle>
          <Paragraph>
            Desarrollador de aplicaciones de escritorio y web con mas de 5 años
            de experiencia.
          </Paragraph>
          <Paragraph>
            Actualmente trabajo desarrollando aplicaciones web solucionando
            problemas o implementando productos a empresas.
          </Paragraph>
        </SectionInfo>
        <SectionImg>asd</SectionImg>
      </CardInfo>
    </Section>
  );
};

export default Presentation;
