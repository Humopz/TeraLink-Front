import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  padding-top: 15px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px 2vw;
  display: flex;
  align-items: center;
  margin:auto;
  justify-content: space-between; /* Distribui os elementos horizontalmente */
  max-width: 1200px; /* Defina a largura máxima conforme necessário e centraliza */

 
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  max-width: 200px;
`;

export const Navigation = styled.nav`
  margin-top: 10px;

  > ul {
    display: flex;
    list-style: none;
    gap: 30px;
    font-weight: 600;
    font-size: 18px;
    justify-content: center; /* Centraliza os itens horizontalmente */

  
  }
`;

export const Icon = styled.span`
  font-size: 40px;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: all ease-in-out 200ms;
  }

`;

export const Dropdown = styled.ul`
  position: absolute;
  background-color: #fff;
  list-style: none;
  padding: 5px;
  margin-top: 5px;
  width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  display: ${(props) => (props.show ? "block" : "none")}; /* Mostra o dropdown apenas se props.show for verdadeiro */

  li {
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
  }

  li:hover {
    color: #000;
    background-color: #ddd;
  }
`;

export const DropdownItem = styled.li`
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #000;
    background-color: #ddd;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  font-size:20px;
  &:hover {
    color: #f6f6f6;
    transition: 0.3s;
  }
`;

export const EnterLink = styled.span`
  color: #000;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: 0.3s;
  }
`;
