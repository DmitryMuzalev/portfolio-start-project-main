import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

const GlobalStyle = createGlobalStyle`

    *, 
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    

    body {
       font-family: ${theme.font_family.primary};
       background-color: ${theme.color.main_bg};
       color: ${theme.color.primary};
       font-weight: 400;
    }


    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }

    p {
        letter-spacing: 0.04em;
        line-height: 1.5;
    }

    ul { 
        list-style: none;
    }
`;

export { GlobalStyle };
