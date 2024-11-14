import styled from "styled-components";

import socialLinks from "assets/mock/links.json";

import { theme } from "styles/Theme";

import { FlexContainer } from "./FlexContainer";

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
  gap: 0.625rem;

  span {
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${theme.color.primary};
  }
`;

export { SocialLinks };
