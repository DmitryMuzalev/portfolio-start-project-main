import { SectionWrapper } from "components/section/SectionWrapper";
import styled from "styled-components";
import { theme } from "styles/Theme";

const FooterStyled = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  @media ${theme.media.tablet} {
    padding: 3rem 0;
  }
`;

const FooterMenu = styled.nav``;

const Copyright = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const S = { FooterStyled, FooterMenu, Copyright };

///
const ListLinksItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 2.5rem;
  }
  a {
    font-weight: 400;
  }
`;
