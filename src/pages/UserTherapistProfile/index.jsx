import { Header } from "../../components/Header";
import { ProfileOption } from "../../components/ProfileOption";
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
import { LogoutButton } from "../../components/LogoutButton";
import { useNavigate } from "react-router-dom";

export const UserTherapistProfile = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token"); // Remove o token do localStorage
    console.log("Logout realizado.");
    navigate("/");
    // Aqui você pode adicionar qualquer outra lógica de logout necessária
  }

  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
        <Area>
          <Title>Meus dados</Title>
          <ProfileOption
            title="Minhas consultas"
            subtitle="Histórico de consultas"
          />
          <a href="/usertherapistprofileinfo">
            <ProfileOption
              title="Informações pessoais"
              subtitle="Nome completo, email,CPF, sobre mim, especialidade, Formação Acadêmica e Profissional"
            />
          </a>
          <a href="/usertherapistprofilecredentials">
            <ProfileOption
              title="Credenciais"
              subtitle="Gerenciar senha e conta"
            />
          </a>
          <ButtonArea>
            <a href="/">
              <BackButton>Voltar</BackButton>
            </a>
            <LogoutButton title="Sair" onLogout={handleLogout} />
          </ButtonArea>
        </Area>
      </DataArea>
    </Container>
  );
};
