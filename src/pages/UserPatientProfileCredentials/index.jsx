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
import React, {useState} from 'react';
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

export const UserPatientProfileCredentials = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    const token = localStorage.getItem('token'); // Obtém o token do usuário logado
  const userId = localStorage.getItem('Id'); // Obtém o ID do usuário logado

  if (!token || !userId) {
    console.error('Token ou ID do usuário não encontrado.');
    return; // Trate o erro de token ou ID ausente (exiba mensagem de erro)
  }
  
    try {
      const response = await api.delete('/auth/delete/${userId}', {
        headers: {
          Authorization: `Bearer ${token}`, // Inclui o token na requisição
        },
      });
  
      const { status, message } = response.data; // Extrai o status e a mensagem da resposta
  
      if (status === 'success') {
        console.log('Usuário excluído com sucesso.'); // Registra mensagem de sucesso
      } else {
        console.error('Erro ao excluir usuário:', message); // Registra mensagem de erro
      }
    } catch (error) {
      console.error('Erro durante a requisição:', error); // Registra erro geral
    }
  };

  const handleUpdatePassword = async () => {
    // Recupera o token do armazenamento local
    const token = localStorage.getItem('token');

    try {
        const response = await api.post('/auth/changePassword', {
            oldPassword: currentPassword,
            newPassword: newPassword
        }, {
            headers: {
                'Authorization': 'Bearer ' + token // Usa o token recuperado
            }
        });

        if (response.status === 200) {
            alert('Senha atualizada com sucesso!');
            // Redireciona o usuário para a página de perfil ou faz logout
            navigate('/userpatientprofile');
        } else {
            alert('Erro ao atualizar a senha: ' + response.data.message);
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao fazer a requisição: ' + error.message);
    }
};


 
  return (
    <Container>
      <Background1 background={background1} />
      <Header />

      <DataArea style={{ alignItems: "center" }}>
        <Area>
          <Title>Credenciais</Title>
          <InputArea>
            <h2>Confirme sua senha</h2>
            <Input 
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              disabled={false}
            />
          </InputArea>
          <InputArea>
            <h2>Nova senha</h2>
            <Input 
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={false}
            />
          </InputArea>
          <ButtonArea>
            <a href="/userpatientprofile"><BackButton>Voltar</BackButton></a>
            <UpdateButton onClick={handleUpdatePassword}>Atualizar</UpdateButton>
          </ButtonArea>
          <DeleteAccountButton onClick={handleDeleteUser}>Excluir Conta</DeleteAccountButton>
        </Area>
      </DataArea>
    </Container>
  );
};