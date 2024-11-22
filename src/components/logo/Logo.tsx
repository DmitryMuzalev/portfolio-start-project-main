import { S } from "./LogoStyles";

import LogoIcon from "assets/images/logo.svg";

function Logo() {
  return (
    <S.LogoWrapper>
      <img src={LogoIcon} alt="Logo" />
    </S.LogoWrapper>
  );
}

export { Logo };
