import styled from "styled-components";
import { theme } from "styles/Theme";

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  gap: 1.75rem;

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const S = { ProjectsList };
