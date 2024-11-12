import { SocialLinks } from "components/SocialLinks";
import { Link } from "components/UI/Link";
import { SectionWrapper } from "components/UI/SectionWrapper";
import styled from "styled-components";

const Wrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

function Footer() {
  return (
    <Wrapper as="footer">
      <SocialLinks />
      <Menu>
        <ListLinks as="ul">
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ListLinks>
      </Menu>
      <Copyright>web developer 2024</Copyright>
    </Wrapper>
  );
}

const Menu = styled.nav``;
const ListLinks = styled.ul`
  li {
    display: inline-block;
  }

  li:not(:last-child) {
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
