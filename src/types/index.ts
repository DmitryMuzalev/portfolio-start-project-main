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
  img: ImageType;
  tools: string[];
  description: string;
  url: string;
};

export type ImageType = {
  jpeg: {
    x1: string;
    x2: string;
  };
  webp: {
    x1: string;
    x2: string;
  };
};

export type IconType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};
