import styled from "styled-components";
import { theme } from "styles/Theme";

const Button = styled.button`
  font-weight: 500;
  color: ${theme.color.text.button};
  background-image: ${theme.gradient_90deg};
  padding: 0.75em 1.25em;
  border-radius: 0.375em;
`;

export { Button };
