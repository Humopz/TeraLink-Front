import styled from "styled-components";

export const Container = styled.div`
   width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin-top:30px;

    > hr { 
        border: 0.5px solid #000;
        opacity: 20%;
    }

    
`;

export const Title = styled.h2`
    font-weight: 400;
    font-size: 22px;
    padding-bottom: 5px;
`;

export const SubTitle = styled.h3`
    font-weight: 300;
    font-size: 18px;
    padding-bottom: 10px;
`;

export const ImageArea = styled.div`
    display: flex;
    justify-content: flex-end; /* Alinha a imagem à direita */
    align-items: center; /* Centraliza verticalmente */
    width: 100%; /* Garante que o ImageArea ocupe toda a largura do Container */
    height: 100%; /* Pode ser ajustado conforme necessário */

    > img {
        position: absolute;
    }

    
`;
