import styled from "styled-components";
import { theme } from "styles/Theme";

import { SectionWrapper } from "components/section/SectionWrapper";

const AboutWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 388px;

  @media ${theme.media.tablet_or_landscape} {
    min-height: auto;
    justify-content: flex-start;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 845px;
`;

const Text = styled.p`
  position: relative;
  padding-left: 1.5rem;

  &::before {
    position: absolute;
    height: 7.25rem;
    content: "";
    top: 0;
    left: 0;
    width: 0.313rem;
    border-radius: 0.125rem;
    background-image: ${theme.gradient.primary_0deg};
  }
`;

export const S = { AboutWrapper, Content, Text };
