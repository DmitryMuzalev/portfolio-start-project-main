import { S } from "./HeroStyles";

import Developer from "assets/images/developer_dark.svg";

import { Button } from "components/button/Button";
import { Icon } from "components/icon/Icon";

function Hero() {
  return (
    <S.HeroWrapper>
      <S.Content>
        <S.Title>web developer</S.Title>
        <S.Name>John Doe</S.Name>
        <S.Description>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt.
        </S.Description>
        <Button as="a" href="#contacts">
          Contact Me
        </Button>
      </S.Content>
      <S.Image src={Developer} alt="Developer" />
      <S.Arrow href="#about" aria-label="Go to About section">
        <Icon
          iconId="arrow-scroll"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        />
      </S.Arrow>
    </S.HeroWrapper>
  );
}

export { Hero };
