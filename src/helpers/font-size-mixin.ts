type fontSizeCalcPropsType = {
  Fmin: number;
  Fmax: number;
};

const fontSize = ({ Fmin, Fmax }: fontSizeCalcPropsType) => `
font-size: calc( (100vw - 360px)/(1280 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;

export { fontSize };
