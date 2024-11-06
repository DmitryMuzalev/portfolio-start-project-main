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
      <HeaderMenu as="nav">
        <Link>Projects</Link>
        <Button as="a" href="#contact">
          Contact
        </Button>
      </HeaderMenu>
    </FlexContainer>
  );
}

const HeaderMenu = styled(FlexContainer)`
  gap: 2rem;
`;

export { Header };
