import styled from "styled-components";

import LogoIcon from "assets/images/logo.svg";

const Wrapper = styled.a.attrs(() => ({
  href: "#home",
}))`
  height: 3rem;
  width: 3rem;
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
