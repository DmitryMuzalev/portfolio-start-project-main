import styled from "styled-components";

import socialLinks from "assets/mock/links.json";

import { SocialLinkItem } from "./SocialLinkItem";

function SocialLinks() {
  return (
    <SocialLinksStyled>
      {socialLinks.map((link, index) => (
        <SocialLinkItem key={index} {...link} />
      ))}
    </SocialLinksStyled>
  );
}

const SocialLinksStyled = styled.div`
  display: flex;
  gap: 4.5rem;
  justify-content: center;
`;

export { SocialLinks };
