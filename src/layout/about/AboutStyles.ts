import styled from "styled-components";
import { theme } from "styles/Theme";

const Content = styled.div`
  width: 100%;
  max-width: 845px;
`;

const Text = styled.p`
  position: relative;
  padding-left: 1.5rem;
  &::before {
    position: absolute;
    height: 7.25rem;
    content: "";
    top: 0;
    left: 0;
    width: 0.313rem;
    border-radius: 0.125rem;
    background-image: ${theme.gradient.primary_0deg};
  }
`;

export const S = { Content, Text };
