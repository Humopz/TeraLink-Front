import { Header } from "../../components/Header"
import { Container, Background1, Content1, BannerArea, Psychologist, BannerText, ButtonArea, Content2, BlobArea, Blob, StyledAnalise,SH1,ST1, Content3, ImageRows, ImageRow, StyledHug} from "./styles"
import background1 from "../../assets/background1.svg"
import hugImage from "../../assets/Hug.png"
import C3_4 from "../../assets/C3_4.png"
import C3_3 from "../../assets/C3_3.svg"
import psychologistImage from "../../assets/Psychologist.png" 
import analiseImage from "../../assets/Analise.png" 
import blob from "../../assets/blob.svg"
import { BannerButton } from "../../components/BannerButton"
import { Footer } from "../../components/Footer"

export const Sobre = () => {
    return (
        <Container>
            <Content1>
                <Background1 background={background1} />
                <Header />
                <BannerArea>
                    <Psychologist src={psychologistImage} alt="imagem de calendario" /> {/* Use a variável corrigida aqui */}
                    <BannerText>
                    <h2>Quem somos</h2>
          <p>
            A Teralink é uma plataforma inovadora que nasceu da ideia de
            conectar terapeutas e pacientes de forma simples e eficiente.
            Fundada em 2018, por um grupo de profissionais da saúde mental, nossa missão é proporcionar acesso
            fácil e rápido a serviços terapêuticos, promovendo o bem-estar e a
            saúde mental de nossos usuários.
            </p>
                    </BannerText>
                </BannerArea>
            </Content1>

            <Content2>
                <BlobArea>
                    <Blob src={blob} />
                    <SH1>Nossa História</SH1>
                    <ST1> A Teralink começou como um projeto de pesquisa em uma universidade,
            onde um grupo de estudantes de psicologia e tecnologia se uniram
            para desenvolver uma solução inovadora para facilitar o acesso à
            terapia. Após muitos meses de desenvolvimento e testes, a primeira
            versão da plataforma foi lançada em 2018. Desde então, a empresa
            cresceu significativamente, expandindo sua base de usuários e
            desenvolvendo novos recursos para melhor atender às necessidades de
            seus clientes.</ST1>
                </BlobArea>
                <StyledAnalise src={analiseImage} /> {/* Use a variável corrigida aqui */}
            </Content2>

            <Content3>
                <p>           A missão da Teralink é fornecer um ambiente seguro e acolhedor
            para que pessoas de todas as idades possam encontrar terapeutas
            qualificados e acessíveis para ajudá-las a lidar com uma variedade
            de questões relacionadas à saúde mental. Estamos comprometidos em
            oferecer uma plataforma fácil de usar
            </p>

            <ImageRows>
                <ImageRow>
                    <StyledHug src={hugImage} alt=""/> {/* Use a variável corrigida aqui */}
                </ImageRow>

                <ImageRow>
                    <img src={C3_4} alt=""/>
                </ImageRow>

                <ImageRow>
                    <img src={C3_3} alt=""/>
                </ImageRow>
            </ImageRows>
            <p>  Nossa visão é criar um mundo onde o cuidado com a saúde mental seja
        tão comum e acessível quanto o cuidado com a saúde física. Acreditamos
        que a terapia deve ser vista como parte integrante do autocuidado e
        que todos devem ter acesso a recursos e apoio para melhorar seu bem-estar
        emocional.</p>
        </Content3>
        
        <Footer />
    </Container>
)
}
