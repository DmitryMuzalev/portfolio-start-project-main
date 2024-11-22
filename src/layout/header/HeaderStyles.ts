import styled from "styled-components";

import { theme } from "styles/Theme";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 100px;
`;

const HeaderMenu = styled.nav`
  ul {
    gap: 5.5rem;
  }

  @media ${theme.media.mobile} {
    ul {
      gap: 2rem;
    }
  }
`;

export const S = {
  HeaderWrapper,
  HeaderMenu,
};
