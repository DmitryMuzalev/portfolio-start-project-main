import styled from "styled-components";

import { SectionWrapper } from "components/SectionWrapper";
import { SocialLinks } from "components/SocialLinks";
import { Link } from "components/Link";

function Footer() {
  return (
    <FooterStyled as="footer">
      <SocialLinks />
      <Menu>
        <ListLinks as="ul">
          <ListLinksItem>
            <Link href="#projects">Projects</Link>
          </ListLinksItem>
          <ListLinksItem>
            <Link href="#contact">Contact</Link>
          </ListLinksItem>
        </ListLinks>
      </Menu>
      <Copyright>web developer 2024</Copyright>
    </FooterStyled>
  );
}

const FooterStyled = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const Menu = styled.nav``;
const ListLinks = styled.ul``;

const ListLinksItem = styled.li`
  display: inline-block;

  &:not(:last-child) {
    margin-right: 2.5rem;
  }
  a {
    font-weight: 400;
  }
`;

const Copyright = styled.span`
  font-size: 0.875rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export { Footer };
