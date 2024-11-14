import styled from "styled-components";

import skills from "assets/mock/skills.json";

import { SectionTitle } from "components/SectionTitle";
import { SectionWrapper } from "components/SectionWrapper";
import { Icon } from "components/Icon";

function Skills() {
  return (
    <SectionWrapper>
      <SectionTitle>Skills</SectionTitle>
      <SkillsList>
        {skills.map((item, index) => {
          return (
            <SkillsItem key={index}>
              <Icon iconId={item} />
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
`;

const SkillsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 120px;
  line-height: 0;
`;

export { Skills };
