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
> h1 {
    margin-bottom: 30px;
}
`
export const ButtonUpdate = styled.button`



/* Auto layout */
display: flex;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 10px;
border: none;
width: 138px;
height: 50px;

background: #24D898;
border-radius: 5px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 2;

`