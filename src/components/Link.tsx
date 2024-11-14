import styled from "styled-components";
import { theme } from "styles/Theme";

const Link = styled.a.attrs<{ href?: string }>(({ href }) => ({
  href: href || "#link",
}))`
  position: relative;
  color: inherit;
  font-weight: 500;
  padding: 0.25rem 0;

  /*  
    &:active {
    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.75rem;
      border-radius: 0.25rem;
      transform: translateY(100%);
     // background-image: ${theme.gradient.primary_90deg};
    }
  }*/
`;

export { Link };
