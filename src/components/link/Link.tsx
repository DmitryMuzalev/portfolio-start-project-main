import styled from "styled-components";
import { theme } from "styles/Theme";

const Link = styled.a`
  position: relative;
  color: inherit;
  font-weight: 500;
  padding: 0.25rem 0;
  text-transform: capitalize;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.125rem;
    border-radius: 0.25rem;
    transform: translateY(100%);
    background-image: ${theme.gradient.primary_90deg};
    transition: 0.3s;
    transform: scale(0);
  }

  &:hover {
    &::before {
      transform: scale(1);
    }
  }
`;

export { Link };
