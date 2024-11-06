import sprite from "assets/images/sprite.svg";

type IconPropsType = {
  iconId: string;
  height?: string;
  width?: string;
  viewBox?: string;
};

function Icon({ iconId, height, width, viewBox }: IconPropsType) {
  return (
    <svg
      height={height || "100"}
      width={width || "100"}
      viewBox={viewBox || "0 0 500 500"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${iconId}`} />
    </svg>
  );
}

export { Icon };
