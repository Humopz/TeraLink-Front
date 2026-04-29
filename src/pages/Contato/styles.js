import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  min-height: 100vh; /* Garante que o container tenha pelo menos a altura da viewport */
`;

export const Background1 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%; /* Ocupa toda a altura da viewport */
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export const DataArea = styled.div`
  margin-top: 50px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;

    button {
      margin-top: 10px;
    }
  }
`;

export const InputArea = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;

  h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 400;
    color: #000000;
  }

  textarea,
  input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: 1px solid #000000;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 5px 10px;
    color: #000000;
    font-size: 16px;

    ::placeholder {
      color: #ccc;
    }
  }

  textarea {
    height: 120px;
    padding: 10px;
    resize: none;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;

    h2 {
      font-size: 18px;
    }
  }
`;

export const BackButton = styled.button`
  padding: 8px 16px;
  width: 120px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const UpdateButton = styled.button`
  padding: 8px 16px;
  width: 120px;
  height: 40px;
  background: #24d898;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px 10px;
  color: #fff;
  font-size: 16px;

  ::placeholder {
    color: #ccc;
  }
`;



