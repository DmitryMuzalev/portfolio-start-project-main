import { MenuItemsType } from "types";

import { Menu } from "components/menu/Menu";

import { SocialLinks } from "layout/footer/socialLinks/SocialLinks";

import { S } from "./FooterStyles";

const menuItems: MenuItemsType[] = [
  { name: "projects", type: "link" },
  { name: "contacts", type: "link" },
];

function Footer() {
  return (
    <S.FooterWrapper as="footer">
      <SocialLinks />
      <S.FooterMenu>
        <Menu items={menuItems} />
      </S.FooterMenu>
      <S.Copyright>web developer 2024</S.Copyright>
    </S.FooterWrapper>
  );
}

export { Footer };
