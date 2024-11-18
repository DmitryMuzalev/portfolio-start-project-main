import { SectionTitle } from "components/SectionTitle";
import { SectionWrapper } from "components/SectionWrapper";
import styled from "styled-components";

import projects from "assets/mock/projects.json";
import { ProjectCard } from "components/ProjectCard";

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

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, auto));
  gap: 1.75rem;
`;

export { Projects };
