import styled from "styled-components";

const LogoWrapper = styled.a.attrs(() => ({
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

export const S = {
  LogoWrapper,
};
