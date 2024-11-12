import styled from "styled-components";
import { FlexContainer } from "./UI/FlexContainer";

import socialLinks from "assets/mock/links.json";

const Wrapper = styled(FlexContainer)`
  gap: 4.5rem;
  justify-content: center;
`;

function SocialLinks() {
  return (
    <Wrapper>
      {socialLinks.map((link, index) => (
        <SocialLinkItem key={index} {...link} />
      ))}
    </Wrapper>
  );
}

type SocialLinkItemPropsType = {
  name: string;
  url: string;
  icon: string;
};

function SocialLinkItem({ name, url, icon }: SocialLinkItemPropsType) {
  return (
    <SocialLinkItemStyled href={url} target="_blank">
      <img src={icon} alt={name} />
      <span style={{ textTransform: "uppercase" }}>{name}</span>
    </SocialLinkItemStyled>
  );
}

const SocialLinkItemStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    use {
      fill: black;
    }
  }
`;

export { SocialLinks };
