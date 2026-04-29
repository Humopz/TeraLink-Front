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

    

    

`;

export const Title = styled.h1`
    font-size: 30px;
    font-weight:500;

`;

export const Area = styled.div`
> a {
        color: #fff;
    }

    > a:hover {
        color: #eaeaea;
        transition: 0.3s;
    }
`

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin-top:30px;
`
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