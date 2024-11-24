import styled from "styled-components";
import { SectionWrapper } from "components/section/SectionWrapper";
import { Link } from "components/link/Link";

const FooterWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const FooterMenu = styled.nav`
  ${Link} {
    font-weight: 400;
    font-size: 0.875rem;
  }
`;

const Copyright = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const S = { FooterWrapper, FooterMenu, Copyright };
