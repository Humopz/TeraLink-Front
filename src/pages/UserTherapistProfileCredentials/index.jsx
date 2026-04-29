import { Header } from "../../components/Header";
import {
  Container,
  Background1,
  DataArea,
  Title,
  Area,
  ButtonArea,
  BackButton,
  InputArea, 
  UpdateButton,
  Input,
  DeleteAccountButton
} from "./styles";
import background1 from "../../assets/background1.svg";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export const UserTherapistProfileCredentials = () => {
  const navigate = useNavigate();


  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
        <Area>
          <Title>Credenciais</Title>
          <InputArea>
            <h2>Atualizar senha</h2>
            <Input 
            disabled={true}/>
          </InputArea>
          
          <ButtonArea>
            
            <a href="/usertherapistprofile"><BackButton>Voltar</BackButton></a>
            <UpdateButton>Enviar</UpdateButton>
          </ButtonArea>
          <DeleteAccountButton>Excluir Conta</DeleteAccountButton>
        </Area>
      </DataArea>
    </Container>
  );
};
