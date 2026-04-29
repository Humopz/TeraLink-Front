import styled from 'styled-components'

export const Container = styled.button `
    width: 70%;
    background-color: #38A1FF;
    color: #F6F6F6;
    height: 60px;
    border: 0;
    padding: 0 16px;
    margin-top: 10px;
    border-radius: 10px;
    font-weight: 500;
    font-size:30px;
    text-align:center;
    margin-bottom: 10px;
    &:disabled{
        opacity: 0.5;
    }
`