//_Styles:
import { S } from "./MenuStyles";

//_Types:
import { MenuItemsType } from "types";

//_Components:
import { Button } from "components/button/Button";
import { Link } from "components/link/Link";

const Menu: React.FC<{ items: MenuItemsType[] }> = ({
  items,
}: {
  items: MenuItemsType[];
}) => {
  return (
    <S.MenuWrapper>
      {items.map((item, index) => {
        const { name, type } = item;
        return (
          <S.MenuItem key={index}>
            {type === "button" ? (
              <Button as="a" href={`#${name}`}>
                {name}
              </Button>
            ) : (
              <Link href={`#${name}`}>{name}</Link>
            )}
          </S.MenuItem>
        );
      })}
    </S.MenuWrapper>
  );
};

export { Menu };
