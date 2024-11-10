import { SectionTitle } from "components/UI/SectionTitle";
import { SectionWrapper } from "components/UI/SectionWrapper";
import styled from "styled-components";

import skills from "assets/mock/skills.json";
import { Icon } from "components/UI/Icon";

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

export { Skills };
