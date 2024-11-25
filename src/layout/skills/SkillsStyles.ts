import styled from "styled-components";
import { theme } from "styles/Theme";

import { fontSize } from "helpers/font-size-mixin";

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.75rem calc((100% - 5 * 120px) / 4);

  @media ${theme.media.large} {
    gap: 3.5rem calc((100% - 5 * 105px) / 4);
  }

  @media ${theme.media.tablet} {
    gap: 3rem calc((100% - 5 * 88px) / 4);
  }

  @media ${theme.media.mobile} {
    gap: 3rem;
  }
`;

const SkillsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 1.25rem;
  width: 120px;
  text-align: center;

  @media ${theme.media.large} {
    row-gap: 1rem;
    width: 105px;
    svg {
      width: 105px;
      height: 105px;
    }
  }

  @media ${theme.media.tablet} {
    row-gap: 0.875rem;
    width: 88px;
    svg {
      width: 88px;
      height: 88px;
    }
  }
`;

const Name = styled.span`
  text-transform: uppercase;
  ${fontSize({ Fmin: 12, Fmax: 16 })}
`;

export const S = { SkillsList, SkillsItem, Name };
