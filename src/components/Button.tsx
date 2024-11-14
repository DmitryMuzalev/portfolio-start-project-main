import styled from "styled-components";
import { theme } from "styles/Theme";

const Button = styled.button`
  font-weight: 500;
  color: ${theme.color.text.button};
  background-image: ${theme.gradient.primary_90deg};
  padding: 0.875em 1.25em;
  border-radius: 0.375em;
  transition: all 0.3s;

  &:hover {
    opacity: 0.85;
  }
`;

export { Button };
