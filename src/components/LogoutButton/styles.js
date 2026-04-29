import styled from "styled-components";

export const Container = styled.button`
  padding: 8px 16px;
  width: 138px;
  height: 50px;
  background: #24d898;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 24px;
  &:disabled {
    opacity: 0.5;
  }
`;
