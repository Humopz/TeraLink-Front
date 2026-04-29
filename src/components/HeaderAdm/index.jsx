import { Container, Content, Navigation, Icon, Dropdown, DropdownItem, StyledLink } from "./styles";
import teralinklogo from '../../assets/teralinklogo.png';
import { FaUser } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


export function HeaderAdm() {
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
                <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{ textDecoration: 'none' }}>
                    <img src={teralinklogo} alt="logo da Teralink" />
                </a>

                <Navigation>
                   
                        {!isLoggedIn() && (
                            <li onClick={handleEntrarClick} style={{ position: 'relative' }}>
                                Entrar
                                {showDropdown && (
                                    <Dropdown ref={dropdownRef}>
                                        <DropdownItem
                                            className={dropdownActiveIndex === 1 ? 'active' : ''}
                                            onClick={handleTerapeutaClick}
                                        >
                                            <a href="/SignInPatient">Como paciente</a>
                                        </DropdownItem>
                                        <DropdownItem
                                            className={dropdownActiveIndex === 1 ? 'active' : ''}
                                            onClick={() => handleDropdownItemClick(1)}
                                        >
                                            <a href="/SingUpTerapeuta">Como terapeuta</a>

                                        </DropdownItem>
                                    </Dropdown>
                                )}
                            </li>
                        )}
                        {isLoggedIn() && (
                            <Icon onClick={handleUserIconClick}><FaUser /></Icon>
                        )}
                </Navigation>
            </Content>
        </Container>
    );
}

