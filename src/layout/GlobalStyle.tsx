import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    button{
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
    }

    ul{
        list-style: none;
    }
`;

export { GlobalStyle };
