const fontSize = ({ Fmin, Fmax }: { Fmin: number; Fmax: number }) => `
font-size: calc( (100vw - 360px)/(1280 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;

export { fontSize };
