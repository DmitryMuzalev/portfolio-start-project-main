import styled from "styled-components";

import LogoIcon from "assets/images/logo.svg";

const LogoStyled = styled.a.attrs(() => ({
  href: "#home",
}))`
  height: 3rem;
  width: 3rem;
  line-height: 0;
  flex-shrink: 0;

  img {
    max-width: 100%;
  }
`;

function Logo() {
  return (
    <LogoStyled>
      <img src={LogoIcon} alt="Logo" />
    </LogoStyled>
  );
}

export { Logo };
