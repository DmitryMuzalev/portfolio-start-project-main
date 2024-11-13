import styled from "styled-components";

import { FlexContainer } from "components/UI/FlexContainer";
import { Logo } from "components/Logo";
import { Button } from "components/UI/Button";
import { Link } from "components/UI/Link";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 100px;

  a {
    flex-shrink: 0;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Menu>
        <ListLinks as="ul">
          <li>
            <Link>Projects</Link>
          </li>
          <li>
            <Button as="a" href="#contact">
              Contact
            </Button>
          </li>
        </ListLinks>
      </Menu>
    </Wrapper>
  );
}

const Menu = styled.nav``;
const ListLinks = styled(FlexContainer)`
  gap: 2.5rem;
`;

export { Header };
