import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    

`;

export const Background1 = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.background});
    background-size: cover;
    z-index: -1;
`;

export const DataArea = styled.div`
    margin-top: 50px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; // Garante que o conteúdo seja alinhado ao topo
    align-items: flex-start; // Mantém o conteúdo alinhado à esquerda

    > a {
        color: #fff;
    }

    > a:hover {
        color: #eaeaea;
        transition: 0.3s;
    }

`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight:500;
    margin-bottom:20px;
`;

export const Area = styled.div`
`

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`


export const InputArea = styled.div`
  > h2 {
    margin-bottom:20px;
    font-size: 30px;
    font-weight: 400;
  }
  
`;
export const Input = styled.input`
  box-sizing: border-box;

  width: 400px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 20px;
  color: #fff;
  padding-left: 10px;
  font-size: 20px;
`;


export const BackButton = styled.button`
  box-sizing: border-box;
  align-items: center;
  padding: 8px 16px;

  width: 104px;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
`;

export const UpdateButton = styled.button`
  padding: 8px 16px;

  width: 138px;
  height: 50px;
  background: #24d898;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 20px;
`;

export const DeleteAccountButton = styled.button`
padding: 8px 16px;
margin-top:200px;
width: 168px;
height: 60px;
background: #B81B1B;
border-radius: 5px;
border: none;
color: #fff;
font-size: 20px;


`
