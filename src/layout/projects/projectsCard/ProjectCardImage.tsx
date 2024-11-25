import { S } from "./ProjectCardStyles";

import { ProjectCardType } from "types";

function ProjectCardImage({
  name,
  img,
}: Pick<ProjectCardType, "name" | "img">) {
  const { jpeg, webp } = img;
  return (
    <S.ProjectCardImageWrapper>
      <source srcSet={`${webp.x1}, ${webp.x2} 2x`} type="image/webp" />
      <source srcSet={`${jpeg.x1}, ${jpeg.x2} 2x`} type="image/jpeg" />
      <img src={jpeg.x1} srcSet={`${jpeg.x2} 2x`} alt={name} />
    </S.ProjectCardImageWrapper>
  );
}
export { ProjectCardImage };
