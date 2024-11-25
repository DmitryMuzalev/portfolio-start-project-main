import styled from "styled-components";
import { theme } from "styles/Theme";

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  gap: 1.75rem;

  @media ${theme.media.mobile} {
    gap: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const S = { ProjectsList };
