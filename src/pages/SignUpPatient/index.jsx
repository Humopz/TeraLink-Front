import { Container, Logo, Welcome, Content, Title, Wave } from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import teralinklogo from '../../assets/teralinklogo.png';
import welcome from '../../assets/welcome.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const SignUpPatient = () => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegisterClick = async () => {
        if (password!== confirmPassword) {
            alert('As senhas não correspondem.');
            return;
        }

        const user = {
            userType: '1',
            name,
            cpf,
            email,
            password
        };

        try {
            const registerResponse = await api.post('/auth/signup', user);
            if (registerResponse.status === 201 || registerResponse.status === 200) {
                const loginResponse = await api.post('/auth/login', { email, password });
                if (loginResponse.status === 200) {
                    const token = loginResponse.data.token;
                    localStorage.setItem('token', token);
                    console.log("Usuário logado com sucesso!");

                    // Redirecione para a página inicial após o cadastro e login bem-sucedidos
                    navigate('/');
                } else {
                    throw new Error('Falha na autenticação após cadastro');
                }
            } else {
                throw new Error('Falha no cadastro');
            }
        } catch (error) {
            alert('Erro ao cadastrar usuário, tente novamente.');
        }
    };

    useEffect(() => {
        // Verifica se o usuário já está logado quando a página é carregada
        const token = localStorage.getItem('token');
        if (token) {
            // Não redirecione automaticamente, apenas registre no console ou faça outra ação
            console.log("Usuário já está logado.");
        }
    }, []); // Dependências vazias para que o effect seja executado apenas na montagem

    // Manipulador para redirecionar quando o logo for clicado
    const handleLogoClick = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink" onClick={handleLogoClick}/> {/* Adicione o manipulador de clique */}
            <Welcome src={welcome} alt="imagem de boas-vindas"/>
            <Wave src={wave} alt="background de uma onda"/>
            <Content>
                <FormBox>
                    <Title>Crie sua conta</Title>
                    <InputSignUpIn value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome Completo" icon={FaUser} />
                    <InputSignUpIn value={cpf} onChange={e => setCpf(e.target.value)} type="text" placeholder="CPF" icon={FaUser} />
                    <InputSignUpIn value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="E-mail" icon={MdEmail} />
                    <InputSignUpIn value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" icon={FaLock} />
                    <InputSignUpIn value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirme a senha" icon={FaLock} />
                    <ButtonSignUpIn onClick={handleRegisterClick} title="Cadastrar" />
                    <a href="/SignInPatient">Já tem uma conta?</a>
                </FormBox>
            </Content>
        </Container>
    )
}
