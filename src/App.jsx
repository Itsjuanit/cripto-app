import { useState } from "react";
import styled from "@emotion/styled";
import ImgCypto from "./img/imagencriptos.png";
import Form from "./components/Form";

const Heading = styled.h1`
  color: red;
  text-align: center;
  margin-top: 2rem;
`;
const Contenedor = styled.div`
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
function App() {
  return (
    <Contenedor>
      <Imagen src={ImgCypto} alt="Imagen Criptomonedas" />
      <Header>
        <Heading>Cotiza tus Criptos</Heading>
        <Form />
      </Header>
    </Contenedor>
  );
}

export default App;
