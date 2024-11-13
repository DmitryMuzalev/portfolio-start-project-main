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

    
    *::-webkit-scrollbar {
      width: 0.25rem;
    }

    *::-webkit-scrollbar-track {
      background-color: ${theme.color.card_bg};
      border-radius: 0.625rem;
    }

    *::-webkit-scrollbar-thumb {
      background-image: ${theme.gradient_0deg};
      border-radius: 0.625rem;
    }
    

    body {
       font-family: ${theme.font_family.primary};
       background-color: ${theme.color.main_bg};
       color: ${theme.color.primary};
       font-weight: 400;
       font-size: 16px;
    }


    button {
        font-family: ${theme.font_family.primary};
        cursor: pointer;
        border: none;
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
