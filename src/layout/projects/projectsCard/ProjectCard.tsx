import { ProjectCardImage } from "./ProjectCardImage";
import { S } from "./ProjectCardStyles";

import { ProjectCardType } from "types";

function ProjectCard({ name, img, tools, description, url }: ProjectCardType) {
  return (
    <S.ProjectCardWrapper>
      <ProjectCardImage name={name} img={img} />
      <S.Content>
        <S.Title href={url}>{name}</S.Title>
        <S.BadgeList>
          {tools.map((item, index) => (
            <S.Badge as="span" key={index}>
              {item}
            </S.Badge>
          ))}
        </S.BadgeList>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.ProjectCardWrapper>
  );
}

export { ProjectCard };
