import { SectionTitle } from "components/UI/SectionTitle";
import { SectionWrapper } from "components/UI/SectionWrapper";
import styled from "styled-components";

import projects from "assets/mock/projects.json";
import { ProjectCard } from "components/ProjectCard";

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 1.75rem;
`;

function Projects() {
  return (
    <SectionWrapper>
      <SectionTitle>Projects</SectionTitle>
      <ProjectsList>
        {projects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </ProjectsList>
    </SectionWrapper>
  );
}

export { Projects };
