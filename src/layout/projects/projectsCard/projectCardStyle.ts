import { Button } from "components/button/Button";
import { Link } from "components/link/Link";
import styled from "styled-components";
import { theme } from "styles/Theme";

const ProjectCardWrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: ${theme.color.bg.secondary};
`;

const Image = styled.img`
  object-fit: cover;
  aspect-ratio: 26/19;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  padding: 1.5rem 0.5rem 2rem 1.5rem;

  @media ${theme.media.mobile} {
    padding: 1rem 0.5rem 1rem 1rem;
  }
`;

const Title = styled(Link)`
  align-self: start;
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${theme.color.text.title};
`;

const Description = styled.p`
  margin-top: 0.5rem;
`;

const BadgeList = styled.ul`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const Badge = styled(Button)`
  font-weight: 400;
  font-size: 0.625rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.color.text.badge};
  pointer-events: none;
`;

export const S = {
  ProjectCardWrapper,
  Image,
  Content,
  Title,
  Description,
  BadgeList,
  Badge,
};
