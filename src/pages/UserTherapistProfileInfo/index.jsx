import { Header } from "../../components/Header";
import {
  Container,
  Background1,
  DataArea,
  Title,
  Area,
  ButtonArea,
  BackButton,
} from "./styles";
import background1 from "../../assets/background1.svg";
import { useNavigate } from "react-router-dom";

export const UserTherapistProfileInfo = () => {
  const navigate = useNavigate();

  

  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
  <Area>
    <Title>Informações pessoais</Title>
    <InputArea>
      <h2>Nome completo</h2>
      <Input />
      <h2>E-mail</h2>
      <Input />
      <h2>CPF</h2>
      <Input disabled={true}/>
      <h2>Sobre Mim</h2>
      <Input />
      <h2>Especialidade</h2>
      <Input />
      <h2>Formação Acadêmica e Profissional</h2>
      <Input />
    </InputArea>
    <ButtonArea>
      <a href="/usertherapistprofileinfo"><BackButton>Voltar</BackButton></a>
      <UpdateButton>Atualizar</UpdateButton>
    </ButtonArea>
  </Area>
</DataArea>

    </Container>
  );
};
