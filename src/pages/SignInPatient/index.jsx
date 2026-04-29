import { Container, Logo, Welcome, Content, Title, Wave, ButtonContainer } from "./styles";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { FormBox } from "../../components/FormBox";
import { FormButton } from "../../components/FormButton";
import teralinklogo from '../../assets/teralinklogo.png';
import Loginimg from '../../assets/LoginImg.svg';
import wave from '../../assets/wave.svg';
import { InputSignUpIn } from "../../components/InputSignUpIn";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { api } from "../../services/api";

export const SignInPatient = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use o hook useNavigate

    const handleForgotPasswordClick = () => {
        navigate('/UserPassword'); // Substitua '/UserPassword' pelo caminho correto da sua aplicação
    };
    

    const handleLogin = async () => {
        try {
            const response = await api.post('/auth/login', { email, password });
            if (response.status === 200) {
                const token = response.data.token;
                localStorage.setItem('token', token);
                console.log("Usuário logado com sucesso!");
                navigate('/');
            } else {
                throw new Error('Falha na autenticação');
            }
        } catch (error) {
            console.error("Erro ao tentar logar:", error);
        }
    };

    // Manipulador para redirecionar quando o logo for clicado
    const handleLogoClick = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <Container>
            <Logo src={teralinklogo} alt="logo da Teralink" onClick={handleLogoClick} /> {/* Adicione o manipulador de clique */}
            <Welcome src={Loginimg} alt="imagem de boas-vindas" />
            <Wave src={wave} alt="background de uma onda" />
            <Content>
                <FormBox>
                    <Title>Acesse sua conta</Title>
                    <InputSignUpIn value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="E-mail" icon={MdEmail} />
                    <InputSignUpIn value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" icon={FaLock} />
                    <ButtonSignUpIn title="Entrar" onClick={handleLogin} />
                    <ButtonContainer>

                        <a href="/SignUpPatient">
                            <FormButton title="Crie sua conta" />
                        </a>
                    </ButtonContainer>
                </FormBox>
            </Content>
        </Container>
    )
}
