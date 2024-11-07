import styled from "styled-components";

import { FlexContainer } from "components/UI/FlexContainer";
import { Logo } from "components/Logo";
import { Button } from "components/UI/Button";
import { Link } from "components/UI/Link";

function Header() {
  return (
    <FlexContainer
      as="header"
      align="center"
      justify="space-between"
      gap="1rem"
    >
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
    </FlexContainer>
  );
}

const Menu = styled.nav``;
const ListLinks = styled(FlexContainer)`
  gap: 2.5rem;
`;

export { Header };
