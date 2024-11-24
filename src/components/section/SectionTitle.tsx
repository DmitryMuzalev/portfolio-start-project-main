import styled from "styled-components";
import { theme } from "styles/Theme";

const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.08;
  letter-spacing: 0.04em;
  margin: 0 0 1.5rem 1.5rem;

  @media ${theme.media.mobile} {
    margin: 0 0 1.25rem 1.25rem;
  }
`;

export { SectionTitle };
