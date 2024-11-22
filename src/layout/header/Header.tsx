import { S } from "./HeaderStyles";

import { MenuItemsType } from "types";

import { Logo } from "components/logo/Logo";
import { Menu } from "components/menu/Menu";

const menuItems: MenuItemsType[] = [
  { name: "projects", type: "link" },
  { name: "contact", type: "button" },
];

function Header() {
  return (
    <S.HeaderWrapper>
      <Logo />
      <S.HeaderMenu>
        <Menu items={menuItems} />
      </S.HeaderMenu>
    </S.HeaderWrapper>
  );
}

export { Header };
