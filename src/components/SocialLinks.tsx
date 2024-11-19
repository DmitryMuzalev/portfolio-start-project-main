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
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

export { SocialLinks };
