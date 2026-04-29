import { Container, Title, SubTitle, ImageArea } from './styles';
import seta from '../../assets/seta.svg';

export function ProfileOption({ title, subtitle }) {
    const handleClick = () => {
        console.log('Componente clicado');
        // Aqui você pode adicionar a lógica para lidar com o clique, se necessário
    };

    return (
        <Container onClick={handleClick}>
            <Title>{title}</Title>
            <ImageArea>
                <img src={seta} alt="seta"  />
            </ImageArea>
            <SubTitle>{subtitle}</SubTitle>
            <hr />
        </Container>
    );
}
