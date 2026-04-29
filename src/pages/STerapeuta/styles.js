import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100vh; /* Ajuste para ocupar toda a altura da viewport */
    overflow-x: hidden;
`;

// ----------------------------------------------------- Content 1 --------------------------------------------------------------

export const Background1 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.background});
    background-size: cover;
    z-index: -1;
`;

export const Content1 = styled.div`
    padding-bottom: 74px;
    max-width: 800px; /* Define uma largura máxima para o conteúdo */
    width: 100%; /* Garante que o conteúdo ocupe toda a largura disponível */
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza os itens horizontalmente */
`;

export const Calendar = styled.iframe`
    width: 100%; /* Ajusta para ocupar toda a largura disponível */
    height: 600px;
    border: 0;
    scrolling: none;
`;

export const ScheduleButton = styled.button`
    padding: 8px 16px;
    width: 138px;
    height: 50px;
    background: #24d898;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 20px;
    margin-top: 20px; /* Adiciona margem superior para dar espaço após o calendário */
`;
export const SuccessMessage = styled.div`
    color: #F6F6F6;
    font-weight: bold;
    margin-top: 10px;
`;