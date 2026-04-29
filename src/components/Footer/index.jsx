import { Container, Content, Navigation, Info, Suport } from "./styles";

import teralinklogo from '../../assets/teralinklogo.png';



export function Footer() {
    return (
        <Container>
            <Content>
                <img src={teralinklogo} alt="Logo do site" />
                <Info>
                     <h3>Informações</h3>
                    <p>Avenida Aguia de Haia</p>
                    <p>+55 (11) 95158-0560</p>
                </Info>
                <Navigation>
                <h3>Navegação</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#">Perfil</a></li>
                        <li><a href="#">Agendar</a></li>
                    </ul>
                </Navigation>
                <Suport>
                    <h3>Suporte</h3>
                        <ul>
                            <li><a href="/">Sobre Nós</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="/">Fale Conosco</a></li>
                        </ul>
                </Suport>
            </Content>
        </Container>
    )
}