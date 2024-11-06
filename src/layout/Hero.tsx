import { Button } from "components/UI/Button";
import { FlexContainer } from "components/UI/FlexContainer";
import styled from "styled-components";

import Developer from "assets/images/developer_dark.svg";
import { Icon } from "components/UI/Icon";

const Wrapper = styled(FlexContainer)`
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 100px 0;
`;

const Content = styled(FlexContainer)`
  flex-direction: column;
`;
const Title = styled.h1``;
const Name = styled.span``;
const Description = styled.p``;
const Image = styled.img``;

const Arrow = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  line-height: 0;
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
