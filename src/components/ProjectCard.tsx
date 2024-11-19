import styled from "styled-components";
import { FlexContainer } from "./FlexContainer";
import { Button } from "./Button";
import { theme } from "styles/Theme";
import { Link } from "./Link";

type ProjectCardPropsType = {
  name: string;
  img: string;
  tools: string[];
  description: string;
  url: string;
};

function ProjectCard({
  name,
  img,
  tools,
  description,
  url,
}: ProjectCardPropsType) {
  return (
    <ProjectCardStyled>
      <Image src={img} alt={name} />
      <Content>
        <Title href={url}>{name}</Title>
        <BadgeList>
          {tools.map((item, index) => (
            <Badge as="span" key={index}>
              {item}
            </Badge>
          ))}
        </BadgeList>
        <Description>{description}</Description>
      </Content>
    </ProjectCardStyled>
  );
}

const ProjectCardStyled = styled.li`
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
  flex: wrap;
`;

const Badge = styled(Button)`
  font-weight: 400;
  font-size: 0.625rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.color.text.badge};
  pointer-events: none;
`;

export { ProjectCard };
