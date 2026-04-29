import styled from "styled-components";
import teralinklogo from '../../assets/teralinklogo.png';
import wave from '../../assets/wave.svg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

export const Logo = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 130px;
  margin-top: 30px;
  margin-left: 50px;
  cursor: pointer;
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px; /* Ajuste para telas menores */
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

export const Content = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 10px; /* Ajuste para telas menores */
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 2.188rem;
  padding-bottom: 1.25rem;
  margin-top: 50px; /* Ajuste para garantir espaço entre o topo e o título */
`;

