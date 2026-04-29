import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* overflow-x:hidden; */
    }

    body{
        /* background-color: #F3F3EB; */
        /* color: #4B5563; */
        -webkit-font-smoothing: antialiased ;
    }

    ::-webkit-scrollbar{
        width: 5px;
        background-color: #E8E8E0;
    }

    ::-webkit-scrollbar-track{
        background-color: #E8E8E0;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #4B5563;
        border-radius: 10px;
    }

    body, input, button, textarea{
        font-family: "Rubik", sans-serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
        color: #4B5563;
    }

    button:hover{
    filter: brightness(0.9);
    background-color: #8966FF;
    color: #F6F6F6;
    }

    a:hover {
        transition : 600ms;
        color: #212427;
    }

    

`