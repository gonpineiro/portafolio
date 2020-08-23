import React from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import { Hr } from "./components/GlobalStyle";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Hr />
      <Experience />
      <Hr />
      <Skill />
    </>
  );
}
export default App;
