import { S } from "./projectCardStyle";

import { ProjectCardType } from "types";

function ProjectCard({ name, img, tools, description, url }: ProjectCardType) {
  return (
    <S.ProjectCardWrapper>
      <S.Image src={img} alt={name} />
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
