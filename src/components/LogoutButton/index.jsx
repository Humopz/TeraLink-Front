import { Container } from './styles';

export function LogoutButton({title, loading = false, onLogout,...rest}) {
    return (
        <Container 
            type="button"
            onClick={onLogout} // Certifique-se de que onLogout é tratado corretamente aqui
            disabled={loading}
            {...rest}
        >
            {loading? 'Carregando...' : title}
        </Container>
    );
}