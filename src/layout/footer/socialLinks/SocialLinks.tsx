import socialLinks from "assets/mock/links.json";
import { SocialItem } from "./socialItem/SocialItem";

import { S } from "./SocialLinksStyles";

function SocialLinks() {
  return (
    <S.SocialLinksWrapper>
      {socialLinks.map((link, index) => (
        <SocialItem key={index} {...link} />
      ))}
    </S.SocialLinksWrapper>
  );
}

export { SocialLinks };
