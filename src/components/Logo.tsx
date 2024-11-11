import styled from "styled-components";

import LogoIcon from "assets/images/logo.svg";

const Wrapper = styled.a.attrs(() => ({
  href: "#home",
}))`
  height: 2.75rem;
  width: 2.75rem;
  line-height: 0;

  img {
    max-width: 100%;
  }
`;

function Logo() {
  return (
    <Wrapper>
      <img src={LogoIcon} alt="Logo" />
    </Wrapper>
  );
}

export { Logo };
