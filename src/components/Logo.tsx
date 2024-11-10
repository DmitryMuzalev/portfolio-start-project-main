import styled from "styled-components";
import { Icon } from "./UI/Icon";

const Wrapper = styled.a.attrs(() => ({
  href: "#home",
}))``;

function Logo() {
  return (
    <Wrapper>
      <Icon iconId="logo" height="40" width="40" viewBox="0 0 40 40" />
    </Wrapper>
  );
}

export { Logo };
