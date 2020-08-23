import React from "react";

import {
  Section,
  Title,
  SectionExp,
  SectionInfo,
  SectionImg,
  P,
} from "./styles";

const Header = () => {
  return (
    <Section>
      <Title>Experiencia</Title>
      <SectionExp>
        <SectionImg>asd</SectionImg>
        <SectionInfo>
          <P>
            Mi experiencia en el desarrollo de software comienza hace 6 años
            como analista funcional de un sistema para el rubro retail, mis
            principales funciones eran: hacer testing, brindar soporte y
            desarrollo de scripts SQL.
          </P>
          <P>
            Luego me dedique a estudiar programación, base de datos, business
            intelligence con el fin de brindar soluciones a particulares y
            empresas utilizando software a medida.
          </P>
          <P>
            Actualmente ya tengo mas de 10 proyectos desarrollados con exito,
            tanto de escritorio como apliacaiones web, utilzando diversas
            tecnologias.
          </P>
        </SectionInfo>
      </SectionExp>
    </Section>
  );
};

export default Header;
