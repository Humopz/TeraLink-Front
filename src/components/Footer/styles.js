import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    margin-bottom: 30px;
`

export const Content = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    padding: 20px 12vw;
    margin-top:30px;
    flex-direction: row;
    align-items: flex-start;
    > img {
    height:120px;
    }
    ul li:hover{
    color: #f6f6f6;
    transition: 0.3s;
}
    
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: start;
    
    > h3 {
        font-size: 25px;
    }

`

export const Suport = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    > h3 {
        padding-bottom:10px;
        font-size: 25px;
    }

> ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;
    font-size: 16px;

}

ul li{
    cursor: pointer;
    position: relative;

}

`


export const Navigation = styled.nav`
> h3 {
        padding-bottom:10px;
        font-size: 25px;
    }
> ul{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 15px;
    font-size: 16px;
    text-align: start;
}

ul li{
    cursor: pointer;
    position: relative;
    
}


`

