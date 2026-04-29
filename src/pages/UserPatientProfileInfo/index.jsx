import { Header } from "../../components/Header";
import {
  Container,
  Background1,
  DataArea,
  Title,
  Area,
  ButtonArea,
  InputArea,
  Input,
  BackButton,
  UpdateButton,
} from "./styles";
import background1 from "../../assets/background1.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { api } from "../../services/api";

export const UserPatientProfileInfo = () => {
  const navigate = useNavigate();

  // Suponha que essas são as informações do usuário
  const [user, setUser] = useState({
    nome: '',
    email: '',
    cpf: ''
  });

  

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isNameChecked, setIsNameChecked] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleUpdateName = async () => {
    const token = localStorage.getItem('token');

    try {
        const response = await api.post('/auth/changeName', {
            newName: newName
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (response.status === 200) {
            alert('Nome atualizado com sucesso!');
            navigate('/userpatientprofile');
        } else {
            alert('Erro ao atualizar o nome: ' + response.data.message);
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao fazer a requisição: ' + error.message);
    }
  };

  const handleUpdateInfo = async () => {
    const token = localStorage.getItem('token');

    if (isNameChecked) {
      try {
        const response = await api.post('/auth/changeName', {
          newName: newName
        }, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        if (response.status === 200) {
          alert('Nome atualizado com sucesso!');
        } else {
          alert('Erro ao atualizar o nome: ' + response.data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao fazer a requisição: ' + error.message);
      }
    }

    if (isEmailChecked) {
      try {
        const response = await api.post('/auth/changeEmail', {
          newEmail: newEmail
        }, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });

        if (response.status === 200) {
          alert('Email atualizado com sucesso!');
        } else {
          alert('Erro ao atualizar o email: ' + response.data.message);
        }
      } catch (error) {
        console.error(error);
        alert('Erro ao fazer a requisição: ' + error.message);
      }
    }

    if (isNameChecked || isEmailChecked) {
      navigate('/userpatientprofile');
    }
  };

  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
        <Area>
          <Title>Informações pessoais</Title>
          <InputArea>
            <h2>Nome completo</h2>
            <Input value={newName} onChange={(e) => setNewName(e.target.value)} disabled={!isNameChecked} />
            <div style={{ marginLeft: '20px', display: 'inline-block' }}>
            <input
          type="checkbox"
          checked={isNameChecked}
          onChange={(e) => setIsNameChecked(e.target.checked)}
        />
        </div>
            <h2>E-mail</h2>
            <Input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} disabled={!isEmailChecked}/>
            <div style={{ marginLeft: '20px', display: 'inline-block' }}>
            <input
          type="checkbox"
          checked={isEmailChecked}
          onChange={(e) => setIsEmailChecked(e.target.checked)}
        />
        </div>
            <h2>CPF</h2>
            <Input value={user.cpf} disabled={true}/>
          </InputArea>
          <ButtonArea>
            <a href="/userpatientprofile"><BackButton>Voltar</BackButton></a>
            <UpdateButton onClick={handleUpdateInfo}>Atualizar</UpdateButton>
          </ButtonArea>
        </Area>
      </DataArea>
    </Container>
  );
};