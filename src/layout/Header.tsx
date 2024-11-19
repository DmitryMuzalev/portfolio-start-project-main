import styled from "styled-components";

import { Logo } from "components/Logo";
import { Button } from "components/Button";
import { Link } from "components/Link";
import { theme } from "styles/Theme";

function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Menu>
        <ListLinks>
          <ListLinksItem>
            <Link href="#projects">Projects</Link>
          </ListLinksItem>
          <ListLinksItem>
            <Button as="a" href="#contact">
              Contact
            </Button>
          </ListLinksItem>
        </ListLinks>
      </Menu>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 100px;
`;

const Menu = styled.nav``;

const ListLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
`;

const ListLinksItem = styled.li`
  margin-right: 1rem;

  @media ${theme.media.mobile} {
    margin-right: 0;
  }
`;

export { Header };
