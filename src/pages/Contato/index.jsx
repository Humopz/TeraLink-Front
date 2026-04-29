import React from "react";
import { Header } from "../../components/Header";
import { Container, Background1, DataArea, Title } from "./styles";
import background1 from "../../assets/background1.svg";
import { FaEnvelope } from "react-icons/fa";

export const Contato = () => {
  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea>
        <Title>Entre em Contato</Title>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <FaEnvelope style={{ fontSize: "64px", marginBottom: "20px" }} />
          <p style={{ fontSize: "24px" }}>contato@teralink.com</p>
        </div>
      </DataArea>
    </Container>
  );
};

