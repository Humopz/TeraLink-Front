import { Container, Background1, Content1, BannerArea, HomeImage1, BannerText, ButtonArea, Content2, BlobArea, Blob, HomeImage2, SH1, ST1, Content3, ImageRows, ImageRow } from "./styles";
import background1 from "../../assets/background1.svg";
import C3_1 from "../../assets/C3_1.svg";
import C3_2 from "../../assets/C3_2.svg";
import C3_3 from "../../assets/C3_3.svg";
import homeimage1 from "../../assets/homeimage1.svg";
import homeimage2 from "../../assets/homeimage2.svg";
import blob from "../../assets/blob.svg";
import { BannerButton } from "../../components/BannerButton";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [userType, setUserType] = useState(""); // Armazena o tipo de usuário

  // Função para obter o tipo de usuário (implemente de acordo com sua lógica)
  useEffect(() => {
    const getUserType = async () => {
      // Utilize sua lógica para obter o tipo de usuário (ex: API, localStorage)
      const user = await getUserFromAPI();
      setUserType(user.type);
    };
    getUserType();
  }, []);

  return (
    <Container>
      <Content1>
        <Background1 background={background1} />
        <Header />
        <BannerArea>
          <HomeImage1 src={homeimage1} alt="imagem de calendario" />
          <BannerText>
            <h1>Uma vida organizada <br /> é terapia.</h1>
            <ButtonArea>
              <h2>Agende sua sessão</h2>
              <Link to={userType === "1" ? "/STerapeuta" : "/SPaciente"}>
              <BannerButton title="Agendar" />
              </Link>
              <Link to={userType === "1" ? "/SPaciente" : "/STerapeuta"}>
              <BannerButton title="Agendar Terapeuta" />
              </Link>
            </ButtonArea>
          </BannerText>
        </BannerArea>
      </Content1>
      <Content2>
        <BlobArea>
         
          <SH1>Conheça nossos profissionais licenciados</SH1>
          <ST1>Profissionais de psicologia graduados e registrados no Conselho Regional de Psicologia, com cadastro específico – e-Psi – para atendimento por chamadas de vídeo, passam por um processo seguro de verificação e credenciamento, além de aderirem a rigorosos códigos de ética e sigilo.</ST1>
        </BlobArea>
        <HomeImage2 src={homeimage2} />
      </Content2>
      <Content3>
        <h2>Como funciona a Teralink</h2>
        <ImageRows>
          <ImageRow>
            <img src={C3_1} alt="" />
            <h3>Procure seu terapeuta</h3>
          </ImageRow>
          <ImageRow>
            <img src={C3_2} alt="" />
            <h3>Encontre o melhor horário</h3>
          </ImageRow>
          <ImageRow>
            <img src={C3_3} alt="" />
            <h3>Organize sua saúde</h3>
          </ImageRow>
        </ImageRows>
      </Content3>
      <Footer />
    </Container>
  );
};
