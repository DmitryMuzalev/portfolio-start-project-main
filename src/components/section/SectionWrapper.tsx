import styled from "styled-components";
import { theme } from "styles/Theme";

const SectionWrapper = styled.section`
  padding: 4rem 0;

  @media ${theme.media.tablet} {
    padding: 3rem 0;
  }
`;

export { SectionWrapper };
