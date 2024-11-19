import styled from "styled-components";

import skills from "assets/mock/skills.json";

import { SectionTitle } from "components/SectionTitle";
import { SectionWrapper } from "components/SectionWrapper";
import { Icon } from "components/Icon";
import { theme } from "styles/Theme";
import { fontSizeCalc } from "helpers/font-size-calc";

function Skills() {
  return (
    <SectionWrapper>
      <SectionTitle>Skills</SectionTitle>
      <SkillsList>
        {skills.map((item, index) => {
          return (
            <SkillsItem key={index}>
              <Icon iconId={item.logoId} />
              <Name>{item.name}</Name>
            </SkillsItem>
          );
        })}
      </SkillsList>
    </SectionWrapper>
  );
}

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.75rem calc((100% - 5 * 120px) / 4);

  @media ${theme.media.large} {
    gap: 3.5rem calc((100% - 5 * 105px) / 4);
  }

  @media ${theme.media.tablet} {
    gap: 3rem calc((100% - 5 * 90px) / 4);
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
    width: 105px;
    svg {
      width: 105px;
      height: 105px;
    }
  }

  @media ${theme.media.tablet} {
    width: 90px;
    svg {
      width: 90px;
      height: 90px;
    }
  }
`;

const Name = styled.span`
  text-transform: uppercase;
  ${fontSizeCalc({ Fmin: 12, Fmax: 16 })}
`;

export { Skills };
