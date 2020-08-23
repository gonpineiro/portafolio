import React from "react";
import {
  TitleSection,
  Paragraph,
  Section,
  SectionImg,
  SectionInfo,
  CardInfo,
} from "../GlobalStyle";

const Header = () => {
  return (
    <Section>
      <TitleSection>Experiencia</TitleSection>
      <CardInfo>
        <SectionImg>asd</SectionImg>
        <SectionInfo>
          <Paragraph>
            Mi experiencia en el desarrollo de software comienza hace 6 años
            como analista funcional de un sistema para el rubro retail, mis
            principales funciones eran: hacer testing, brindar soporte y
            desarrollo de scripts SQL.
          </Paragraph>
          <Paragraph>
            Luego me dedique a estudiar programación, base de datos, business
            intelligence con el fin de brindar soluciones a particulares y
            empresas utilizando software a medida.
          </Paragraph>
          <Paragraph>
            Actualmente ya tengo mas de 10 proyectos desarrollados con exito,
            tanto de escritorio como apliacaiones web, utilzando diversas
            tecnologias.
          </Paragraph>
        </SectionInfo>
      </CardInfo>
    </Section>
  );
};

export default Header;
