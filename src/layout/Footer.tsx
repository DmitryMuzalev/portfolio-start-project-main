import { SocialLinks } from "components/SocialLinks";
import { FlexContainer } from "components/UI/FlexContainer";
import { Link } from "components/UI/Link";
import styled from "styled-components";

const Wrapper = styled(FlexContainer)`
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
const ListLinks = styled(FlexContainer)`
  gap: 2.5rem;
`;

const Copyright = styled.span``;

export { Footer };
