import styled from "styled-components";

import { SectionTitle } from "components/SectionTitle";
import { SectionWrapper } from "components/SectionWrapper";
import { theme } from "styles/Theme";

function About() {
  return (
    <SectionWrapper>
      <SectionTitle>About me</SectionTitle>
      <Content>
        <Text>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </Text>
      </Content>
    </SectionWrapper>
  );
}

const Content = styled.div`
  width: 100%;
  max-width: 845px;
`;

const Text = styled.p`
  position: relative;
  padding-left: 1.5rem;
  &::before {
    position: absolute;
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    width: 0.313rem;
    border-radius: 0.125rem;
    background-image: ${theme.gradient.primary_0deg};
  }
`;

export { About };
