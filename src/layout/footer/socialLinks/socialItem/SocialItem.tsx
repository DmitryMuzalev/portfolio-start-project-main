import { S } from "./SocialItemStyles";
import { SocialItemType } from "types";

function SocialItem({ name, url, icon }: SocialItemType) {
  return (
    <S.SocialItemWrapper href={url} target="_blank">
      <S.Icon src={icon} alt={name} />
      <S.Text>{name}</S.Text>
    </S.SocialItemWrapper>
  );
}

export { SocialItem };
