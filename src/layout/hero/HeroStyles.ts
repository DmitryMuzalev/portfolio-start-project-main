import styled from "styled-components";

import { theme } from "styles/Theme";

import { fontSize } from "helpers/font-size-mixin";

const HeroWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;
  gap: 2rem;
  padding: 2rem 0 4rem;
  min-height: calc(100vh - 100px);

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 4rem;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
  row-gap: 0.625rem;

  @media ${theme.media.tablet} {
    text-align: center;
    align-items: center;
  }
`;

const Title = styled.h1`
  ${fontSize({ Fmin: 16, Fmax: 20 })}
  font-weight: 400;
  text-transform: uppercase;
  font-family: ${theme.fontFamily.secondary};
  color: ${theme.color.secondary};
`;

const Name = styled.span`
  ${fontSize({ Fmin: 40, Fmax: 72 })}
  font-weight: 600;
  background-image: ${theme.gradient.primary_90deg};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  margin-bottom: 1.25rem;

  @media ${theme.media.mobile} {
    margin-bottom: 0.3rem;
  }
`;

const Image = styled.img`
  justify-self: end;
  max-width: 100%;

  @media ${theme.media.tablet} {
    order: -1;
    justify-self: center;
  }
`;

const Arrow = styled.a`
  cursor: pointer;
  position: absolute;
  bottom: 1.5rem;
  left: calc(50% - 1rem);
  line-height: 0;
  color: ${theme.color.secondary};

  -webkit-animation: up-down 1s infinite alternate;
  animation: up-down 1s infinite alternate;

  @media ${theme.media.tablet_or_landscape} {
    display: none;
  }
`;

export const S = {
  HeroWrapper,
  Content,
  Title,
  Name,
  Description,
  Image,
  Arrow,
};
