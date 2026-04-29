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
  display: none;

  @media (min-width: 769px) {
    display: block;
    height: 60vh;
    margin-left: 150px; /* Ajuste conforme necessário */
  }
`;

export const Content = styled.div`
  z-index: 1;
`;

export const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  font-size: 2.188rem;
  padding: 1.875rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
  }
`;
