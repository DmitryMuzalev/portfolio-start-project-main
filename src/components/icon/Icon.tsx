import sprite from "assets/images/sprite.svg";

import { IconType } from "types";

function Icon({ iconId, height, width, viewBox }: IconType) {
  return (
    <svg
      height={height || "120"}
      width={width || "120"}
      viewBox={viewBox || "0 0 120 120"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  );
}

export { Icon };
