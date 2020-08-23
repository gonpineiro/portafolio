import React from "react";

import { HeaderApp, Name, Hr, SectionMenu, Menu } from "./styles";

const Header = () => {
  return (
    <HeaderApp>
      <Name>Gonzalo Piñeiro</Name>
      <Hr />
      <SectionMenu>
        <Menu>Experiencia</Menu>
        <Menu>Habilidades</Menu>
        <Menu>Proyectos</Menu>
      </SectionMenu>
    </HeaderApp>
  );
};

export default Header;
