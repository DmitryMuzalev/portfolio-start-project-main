import styled from "styled-components";

import { SectionTitle } from "components/UI/SectionTitle";
import { SectionWrapper } from "components/UI/SectionWrapper";

const Wrapper = styled(SectionWrapper)``;

const AboutContent = styled.div`
  width: 100%;
  max-width: 845px;
`;

function About() {
  return (
    <Wrapper>
      <SectionTitle>About me</SectionTitle>
      <AboutContent>
        <p>
          The long barrow was built on land previously inhabited in the
          Mesolithic period. It consisted of a sub-rectangular earthen tumulus,
          estimated to have been 15 metres (50 feet) in length, with a chamber
          built from sarsen megaliths on its eastern end. Both inhumed and
          cremated human remains were placed within this chamber during the
          Neolithic period, representing at least nine or ten individuals.
        </p>
      </AboutContent>
    </Wrapper>
  );
}

export { About };
