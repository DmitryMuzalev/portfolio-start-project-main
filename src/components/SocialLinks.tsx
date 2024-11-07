import styled from "styled-components";
import { FlexContainer } from "./UI/FlexContainer";
import { Icon } from "./UI/Icon";

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
};

function SocialLinkItem({ name, url }: SocialLinkItemPropsType) {
  return (
    <FlexContainer
      as="a"
      direction="column"
      align="center"
      href={url}
      target="_blank"
    >
      <Icon iconId={name} height="38" width="38" viewBox="0 0 38 38" />
      <span style={{ textTransform: "uppercase" }}>{name}</span>
    </FlexContainer>
  );
}

export { SocialLinks };
