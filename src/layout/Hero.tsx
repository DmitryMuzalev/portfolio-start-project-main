import { Button } from "components/Button";
import styled from "styled-components";

import Developer from "assets/images/developer_dark.svg";
import { Icon } from "components/Icon";
import { theme } from "styles/Theme";
import { fontSizeCalc } from "helpers/font-size-calc";

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
      <Arrow href="#down">
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  gap: 2rem;
  padding: 1rem 0;
  min-height: calc(100vh - 100px);

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  row-gap: 0.625rem;

  @media ${theme.media.tablet} {
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  ${fontSizeCalc({ Fmin: 16, Fmax: 20 })}
  font-weight: 400;
  text-transform: uppercase;
  font-family: ${theme.fontFamily.secondary};
  color: ${theme.color.secondary};
`;

const Name = styled.span`
  ${fontSizeCalc({ Fmin: 40, Fmax: 72 })}
  font-weight: 600;
  background-image: ${theme.gradient.primary_90deg};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  margin-bottom: 1.25rem;
`;

const Image = styled.img`
  justify-self: end;
  max-width: 100%;

  @media ${theme.media.tablet} {
    order: -1;
    justify-self: center;
  }
`;

const Arrow = styled.a`
  cursor: pointer;
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  line-height: 0;
  color: ${theme.color.secondary};

  @media ${theme.media.tablet} {
    display: none;
  }
`;

export { Hero };
