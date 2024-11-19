import styled from "styled-components";
import { theme } from "styles/Theme";

const Container = styled.div`
  max-width: 1152px;
  display: block;
  margin: 0 auto;
  padding: 0 2.5rem;

  @media ${theme.media.large} {
    padding: 0 1.75rem;
  }

  @media ${theme.media.tablet} {
    padding: 0 1rem;
  }
`;

export { Container };
