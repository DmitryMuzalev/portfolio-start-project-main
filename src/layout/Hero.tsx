import { Button } from "components/UI/Button";
import { FlexContainer } from "components/UI/FlexContainer";
import styled from "styled-components";

import Developer from "assets/images/developer_dark.svg";
import { Icon } from "components/UI/Icon";
import { theme } from "styles/Theme";

const Wrapper = styled(FlexContainer)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: calc(100vh - 100px);
`;

const Content = styled(FlexContainer)`
  width: 100%;
  max-width: 514px;
  flex-direction: column;
  row-gap: 0.625rem;
`;
const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: uppercase;
  font-family: ${theme.font_family.secondary};
  color: ${theme.color.secondary};
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 4.5rem;
  background-image: ${theme.gradient_90deg};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Description = styled.p`
  margin-bottom: 1.25rem;
`;
const Image = styled.img``;

const Arrow = styled.span`
  cursor: pointer;
  position: absolute;
  bottom: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  line-height: 0;

  svg {
    use {
      fill: ${theme.color.secondary};
    }
  }
`;

function Hero() {
  return (
    <Wrapper as="section">
      <Content>
        <Title>web developer</Title>
        <Name>John Doe</Name>
        <Description>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </Description>
        <Button as="a" href="#contact">
          Contact Me
        </Button>
      </Content>
      <Image src={Developer} alt="Developer" />
      <Arrow>
        <Icon
          iconId="arrow-scroll"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        />
      </Arrow>
    </Wrapper>
  );
}

export { Hero };
