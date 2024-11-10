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
       font-family: ${theme.font.family.primary};
       background-color: ${theme.color.mainBg};
       color: ${theme.color.text.primary};
    }


    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }

    ul { 
        list-style: none;
    }
`;

export { GlobalStyle };
