export type MenuItemsType = {
  name: string;
  type: "link" | "button";
};

export type SocialItemType = {
  name: string;
  url: string;
  icon: string;
};

export type ProjectCardType = {
  name: string;
  img: string;
  tools: string[];
  description: string;
  url: string;
};

export type IconType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};
