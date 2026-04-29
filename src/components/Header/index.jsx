import { Container, Content, Navigation, Icon, Dropdown, DropdownItem, StyledLink, LogoLink, LogoImg, EnterLink } from "./styles";
import teralinklogo from '../../assets/teralinklogo.png';
import { FaUser } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

export function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [dropdownActiveIndex, setDropdownActiveIndex] = useState(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Função para verificar se o usuário está logado
    const isLoggedIn = () => !!localStorage.getItem('token');

    const handleEntrarClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleDropdownItemClick = (index) => {
        if (dropdownActiveIndex === index) {
            setDropdownActiveIndex(null);
        } else {
            setDropdownActiveIndex(index);
        }
    };

    const handleTerapeutaClick = () => {
        navigate('/signupterapeuta'); // Navega para a página de cadastro do terapeuta
        setShowDropdown(false); // Fecha o dropdown após clicar
    };

    const handleUserIconClick = () => {
        navigate('/userpatientprofile');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container>
            <Content>
                <LogoLink to="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
                    <LogoImg src={teralinklogo} alt="logo da Teralink" />
                </LogoLink>

                <Navigation>
                    <ul>
                       
                        <li>
                            <StyledLink to="/sobre">Sobre nós</StyledLink>
                        </li>
                        <li>
                            <StyledLink to="/contato">Contato</StyledLink>
                        </li>
                        {!isLoggedIn() && (
                            <li onClick={handleEntrarClick} style={{ position: 'relative' }}>
                                <EnterLink>Entrar</EnterLink>
                                <Dropdown ref={dropdownRef} show={showDropdown}>
                                    <DropdownItem
                                        onClick={handleTerapeutaClick}
                                    >
                                        <a href="/SignInPatient">Como paciente</a>
                                    </DropdownItem>
                                    <DropdownItem
                                        onClick={() => handleDropdownItemClick(1)}
                                    >
                                        <a href="/SingUpTerapeuta">Como terapeuta</a>
                                    </DropdownItem>
                                </Dropdown>
                            </li>
                        )}
                        {isLoggedIn() && (
                            <Icon onClick={handleUserIconClick}><FaUser /></Icon>
                        )}
                    </ul>
                </Navigation>
            </Content>
        </Container>
    );
}
