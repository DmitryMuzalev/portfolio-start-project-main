import { S } from "./ProjectsStyles";

import projects from "assets/mock/projects.json";

import { SectionTitle } from "components/section/SectionTitle";
import { SectionWrapper } from "components/section/SectionWrapper";
import { ProjectCard } from "./projectsCard/ProjectCard";

function Projects() {
  return (
    <SectionWrapper>
      <SectionTitle>Projects</SectionTitle>
      <S.ProjectsList>
        {projects.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </S.ProjectsList>
    </SectionWrapper>
  );
}

export { Projects };
