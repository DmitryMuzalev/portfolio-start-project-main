import styled from "styled-components";
import { FlexContainer } from "./FlexContainer";
import { Button } from "./Button";
import { theme } from "styles/Theme";

type ProjectCardPropsType = {
  name: string;
  img: string;
  tools: string[];
  description: string;
};

function ProjectCard({ name, img, tools, description }: ProjectCardPropsType) {
  return (
    <ProjectCardStyled>
      <Image src={img} alt={name} />
      <Content>
        <Title>{name}</Title>
        <FlexContainer as="ul" gap="0.75rem" wrap="wrap">
          {tools.map((item, index) => (
            <Badge as="span" key={index}>
              {item}
            </Badge>
          ))}
        </FlexContainer>
        <Description>{description}</Description>
      </Content>
    </ProjectCardStyled>
  );
}

const ProjectCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  background-color: ${theme.color.bg.secondary};
`;

const Image = styled.img`
  max-width: 100%;
  height: 380px;
  object-fit: cover;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
  padding: 1.75rem 0.5rem 2rem 1.5rem;
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  color: ${theme.color.text.title};
`;

const Description = styled.p`
  margin-top: 0.5rem;
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
