
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 3.125rem; /* Padding para distância das bordas da tela */
  position: relative;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  height: 130px;
  cursor: pointer;
  z-index: 2;
`;

export const Welcome = styled.img`
   margin-left:150px;
    height: 60vh;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
  z-index: 1;
  text-align: center; /* Centraliza o conteúdo */
  max-width: 600px; /* Largura máxima do conteúdo */
`;

export const Title = styled.h1`
  z-index: 1;
  font-weight: bold;
  text-align: center;
  font-size: 2.188rem;
  padding-bottom: 1.25rem;
`;

export const Wave = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 0; 
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;