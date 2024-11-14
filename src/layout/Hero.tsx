import { Button } from "components/Button";
import { FlexContainer } from "components/FlexContainer";
import styled from "styled-components";

import Developer from "assets/images/developer_dark.svg";
import { Icon } from "components/Icon";
import { theme } from "styles/Theme";

function Hero() {
  return (
    <HeroStyled>
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
    </HeroStyled>
  );
}

const HeroStyled = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: calc(100vh - 100px);
`;

const Content = styled.div`
  width: 100%;
  max-width: 514px;
  display: flex;
  align-items: start;
  flex-direction: column;
  row-gap: 0.625rem;
`;
const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 400;
  text-transform: uppercase;
  font-family: ${theme.fontFamily.secondary};
  color: ${theme.color.secondary};
`;
const Name = styled.span`
  font-weight: 600;
  font-size: 4.5rem;
  background-image: ${theme.gradient.primary_90deg};
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
  color: ${theme.color.secondary};
`;

export { Hero };
