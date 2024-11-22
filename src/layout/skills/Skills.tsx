import { S } from "./SkillsStyles";

import skills from "assets/mock/skills.json";

import { SectionTitle } from "components/section/SectionTitle";
import { SectionWrapper } from "components/section/SectionWrapper";
import { Icon } from "components/icon/Icon";

function Skills() {
  return (
    <SectionWrapper>
      <SectionTitle>Skills</SectionTitle>
      <S.SkillsList>
        {skills.map((item, index) => {
          return (
            <S.SkillsItem key={index}>
              <Icon iconId={item.logoId} />
              <S.Name>{item.name}</S.Name>
            </S.SkillsItem>
          );
        })}
      </S.SkillsList>
    </SectionWrapper>
  );
}

export { Skills };
