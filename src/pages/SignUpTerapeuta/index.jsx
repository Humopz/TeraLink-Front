import { Container, Logo, Wave, Content, Title} from "./styles";
import teralinklogo from '../../assets/teralinklogo.png';
import wave from '../../assets/wave.svg';
import { FormBox } from "../../components/FormBox";
import { InputSignUpIn } from "../../components/InputSignUpIn";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import { useState } from "react";
import { ButtonSignUpIn } from "../../components/ButtonSignUpIn";
import { useNavigate } from 'react-router-dom';

export const SignUpTerapeuta = () => {
    const [name, setName] = useState('');
    const [cfm, setCfm] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogoClick = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    const handleRegisterClick = async () => {
        if (password!== confirmPassword) {
            alert('As senhas não correspondem.');
            return;
        }

        const user = {
            userType: '2', // Indica que o usuário é um terapeuta
            name,
            cfm, // Solicitamos o CRM para terapeutas
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
    

    return (
        <Container>
            <Logo src={teralinklogo} onClick={handleLogoClick}/>
            <Wave src = {wave}/>
            <Content>
                <Title>Cadastre-se como terapeuta</Title>
                <FormBox>
                <InputSignUpIn value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Nome Completo" icon={FaUser} />
                <InputSignUpIn value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" icon={MdEmail} />
                <InputSignUpIn value={cfm} onChange={e => setCfm(e.target.value)} type="text" placeholder="CFM" icon={FaUser} />
                <InputSignUpIn value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" icon={FaLock} />
                   <InputSignUpIn value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="Confirme a senha" icon={FaLock} />
                <ButtonSignUpIn onClick={handleRegisterClick}title="Cadastrar" />
                <a href="/SignInPatient">Já possui cadastro?</a>
                </FormBox>
            </Content>
            
            
        </Container>
        
    )

}