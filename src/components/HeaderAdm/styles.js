import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  padding-top: 15px;
`;

export const Content = styled.div`
  width: 100%;
  justify-content: space-between;
  padding: 20px 12vw;
  display: flex;
  align-items: center;
  position: relative;
  > a img {
    height: 120px;
  }
`;

export const Navigation = styled.nav`
  > ul {
    display: flex;
    list-style: none;
    gap: 60px;
    font-weight: 600;
    font-size: 22px;
  }

  ul li {
    cursor: pointer;
    position: relative;
  }

  li:hover {
    color: #f6f6f6;
    transition: 0.3s;
  }
`;

export const Icon = styled.span`
  font-size: 32px;
  align-items: center;

  &:hover {
    color: #fff;
    transition: all ease-in-out 200ms;
    cursor: pointer;
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

  li {
    padding: 8px 16px;
    font-size: 20px;
    cursor: pointer;
  }

  li:hover {
    color: #000;
    background-color: #ddd;
  }
`;

export const DropdownItem = styled.li`
  padding: 8px 16px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #ddd;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  font-weight: bold; /* Adiciona negrito */
  text-decoration: none; /* Remove a decoração padrão */
  &:hover {
    color: #f6f6f6; /* Altera a cor ao passar o mouse */
    transition: 0.3s;
  }
`;

