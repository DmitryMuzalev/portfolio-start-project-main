import styled from "styled-components";
import { FlexContainer } from "./UI/FlexContainer";
import { Button } from "./UI/Button";

type ProjectCardPropsType = {
  name: string;
  img: string;
  tools: string[];
  description: string;
};

const Wrapper = styled.li``;
const Image = styled.img`
  max-width: 100%;
  height: 380px;
  object-fit: cover;
`;
const Content = styled.div``;
const Title = styled.h3``;
const Description = styled.p``;
const Badge = styled(Button)``;

function ProjectCard({ name, img, tools, description }: ProjectCardPropsType) {
  return (
    <Wrapper>
      <Image src={img} alt={name} />
      <Content>
        <Title>{name}</Title>
        <FlexContainer as="ul" gap="0.5rem">
          {tools.map((item, index) => (
            <Badge as="span" key={index}>
              {item}
            </Badge>
          ))}
        </FlexContainer>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
}

export { ProjectCard };
